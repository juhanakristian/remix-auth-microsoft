import { SessionStorage } from "@remix-run/server-runtime";
import {
  AuthenticateOptions,
  Strategy,
  StrategyVerifyCallback,
} from "remix-auth";

import {
  OAuth2Profile,
  OAuth2Strategy,
  OAuth2StrategyVerifyParams,
} from "remix-auth-oauth2";

export interface MicrosoftStrategyOptions {
  clientID: string;
  clientSecret: string;
  callbackURL: string;
  scope?: string;
  tenant?: string;
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

export class MicrosoftStrategy<User> extends OAuth2Strategy<
  User,
  MicrosoftProfile,
  MicrosoftExtraParams
> {
  name = "azure";

  private scope: string;
  private userInfoURL = "https://graph.microsoft.com/oidc/userinfo";

  constructor(
    {
      clientID,
      clientSecret,
      callbackURL,
      scope,
      tenant = "common",
    }: MicrosoftStrategyOptions,
    verify: StrategyVerifyCallback<
      User,
      OAuth2StrategyVerifyParams<MicrosoftProfile, MicrosoftExtraParams>
    >
  ) {
    super(
      {
        clientID,
        clientSecret,
        callbackURL,
        authorizationURL: `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize`,
        tokenURL: `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`,
      },
      verify
    );
    this.scope = scope ?? "openid profile email";
  }

  protected authorizationParams() {
    return new URLSearchParams({
      scope: this.scope,
    });
  }

  protected async userProfile(accessToken: string): Promise<MicrosoftProfile> {
    let response = await fetch(this.userInfoURL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    let data: MicrosoftProfile["_json"] = await response.json();

    let profile: MicrosoftProfile = {
      provider: "microsoft",
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
