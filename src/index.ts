import { OAuth2Strategy } from "remix-auth-oauth2";

/**
 * @see https://learn.microsoft.com/en-us/azure/active-directory/develop/scopes-oidc#openid-connect-scopes
 */
export type OpenIDConnectScope =
  | "openid"
  | "email"
  | "profile"
  | "offline_access";

// eslint-disable-next-line @typescript-eslint/ban-types -- allow custom scopes
export type MicrosoftStrategyScope = OpenIDConnectScope | (string & {});

export interface MicrosoftStrategyOptions {
  clientId: string;
  clientSecret: string;
  redirectURI: string;
  scopes?: MicrosoftStrategyScope[];
  tenantId?: string;
  prompt?: string;
}

export interface MicrosoftProfile {
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

const USER_INFO_URL = "https://graph.microsoft.com/oidc/userinfo";

export const MicrosoftStrategyDefaultScopes: OpenIDConnectScope[] = [
  "openid",
  "profile",
  "email",
];
export const MicrosoftStrategyDefaultName = "microsoft";
export const MicrosoftStrategyScopeSeparator = " ";

export class MicrosoftStrategy<User> extends OAuth2Strategy<User> {
  public name = MicrosoftStrategyDefaultName;

  private readonly prompt?: string;
  private scopes: MicrosoftStrategyScope[];

  constructor(
    {
      clientId,
      clientSecret,
      redirectURI,
      scopes = MicrosoftStrategyDefaultScopes,
      prompt,
      tenantId = "common",
    }: MicrosoftStrategyOptions,
    verify: OAuth2Strategy<User>["verify"]
  ) {
    super(
      {
        clientId,
        clientSecret,
        redirectURI,
        authorizationEndpoint: `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize`,
        tokenEndpoint: `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
        scopes,
      },
      verify
    );

    this.scopes = scopes;
    this.prompt = prompt;
  }

  protected authorizationParams(params: URLSearchParams): URLSearchParams {
    params.set("scope", this.scopes.join(MicrosoftStrategyScopeSeparator));
    if (this.prompt) {
      params.set("prompt", this.prompt);
    }

    return params;
  }

  static async userProfile(accessToken: string): Promise<MicrosoftProfile> {
    const response = await fetch(USER_INFO_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data: MicrosoftProfile["_json"] = await response.json();

    const profile: MicrosoftProfile = {
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
