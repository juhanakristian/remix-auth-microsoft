import { StrategyVerifyCallback } from "remix-auth";

import {
  OAuth2Profile,
  OAuth2Strategy,
  OAuth2StrategyOptions,
  OAuth2StrategyVerifyParams,
  TokenResponseBody,
} from "remix-auth-oauth2";

/**
 * @see https://learn.microsoft.com/en-us/azure/active-directory/develop/scopes-oidc#openid-connect-scopes
 */
export type MicrosoftScope = "openid" | "email" | "profile" | "offline_access";

export interface MicrosoftStrategyOptions
  extends Omit<
    OAuth2StrategyOptions,
    "authorizationEndpoint" | "tokenEndpoint" | "tokenRevocationEndpoint"
  > {
  tenantId?: string;
  prompt?: string;
  domain?: string;
  policy?: string;
  userInfoEndpoint?: string;
}

export interface MicrosoftProfile extends OAuth2Profile {
  id: string;
  displayName: string;
  name: {
    familyName: string;
    givenName: string;
  };
  emails: [{ value: string }];
  _json: {
    sub: string;
    name: string;
    family_name: string;
    given_name: string;
    email: string;
  };
}

export interface MicrosoftExtraParams extends Record<string, string | number> {
  expires_in: 3599;
  token_type: "Bearer";
  scope: string;
  id_token: string;
}

export const MicrosoftStrategyDefaultScopes: MicrosoftScope[] = [
  "openid",
  "profile",
  "email",
];
export const MicrosoftStrategyDefaultName = "microsoft";
export const MicrosoftStrategyScopeSeperator = " ";

export class MicrosoftStrategy<User> extends OAuth2Strategy<
  User,
  MicrosoftProfile,
  MicrosoftExtraParams
> {
  name = MicrosoftStrategyDefaultName;
  userInfoEndpoint: string;
  scope: string;
  prompt: string;

  constructor(
    {
      tenantId = "common",
      domain = "login.microsoftonline.com",
      userInfoEndpoint = "https://graph.microsoft.com/oidc/userinfo",
      policy,
      ...options
    }: MicrosoftStrategyOptions,
    verify: StrategyVerifyCallback<
      User,
      OAuth2StrategyVerifyParams<MicrosoftProfile, MicrosoftExtraParams>
    >
  ) {
    const authorizationEndpoint = policy
      ? `https://${domain}/${tenantId}/${policy}/oauth2/v2.0/authorize`
      : `https://${domain}/${tenantId}/oauth2/v2.0/authorize`;

    const tokenEndpoint = policy
      ? `https://${domain}/${tenantId}/${policy}/oauth2/v2.0/token`
      : `https://${domain}/${tenantId}/oauth2/v2.0/token`;

    super({ authorizationEndpoint, tokenEndpoint, ...options }, verify);

    this.userInfoEndpoint = userInfoEndpoint;
    this.scope = this.getScope(options.scopes);
    this.prompt = options.prompt ?? "none";
  }

  //Allow users the option to pass a scope string, or typed array
  private getScope(scope: MicrosoftStrategyOptions["scopes"]) {
    if (!scope) {
      return MicrosoftStrategyDefaultScopes.join(
        MicrosoftStrategyScopeSeperator
      );
    } else if (typeof scope === "string") {
      return scope;
    }
    return scope.join(MicrosoftStrategyScopeSeperator);
  }

  protected authorizationParams(_params: URLSearchParams): URLSearchParams {
    // TODO see what params are passed as arg here, might avoid needing the scope/prompt fields on this class
    return new URLSearchParams({
      scope: this.scope,
      prompt: this.prompt,
    });
  }

  protected async userProfile({
    access_token,
  }: TokenResponseBody): Promise<MicrosoftProfile> {
    const response = await fetch(this.userInfoEndpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const data: MicrosoftProfile["_json"] = await response.json();
    const profile: MicrosoftProfile = {
      provider: MicrosoftStrategyDefaultName,
      displayName: data.name,
      id: data.sub,
      name: {
        familyName: data.family_name,
        givenName: data.given_name,
      },
      emails: [{ value: data.email }],
      _json: data,
    };

    return profile;
  }
}
