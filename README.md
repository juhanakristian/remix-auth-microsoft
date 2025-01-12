# MicrosoftStrategy for [Remix](https://remix.run/) using [Remix-Auth](https://github.com/sergiodxa/remix-auth)

The Microsoft strategy is used to authenticate users against an account on [Microsoft Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/develop/) using [Remix Auth](https://github.com/sergiodxa/remix-auth).
This can be a work/school account or a personal Microsoft account, like Skype, Xbox and Outlook.com. It extends the [remix-auth-oauth2](https://github.com/sergiodxa/remix-auth-oauth2) strategy.

## Supported runtimes

| Runtime    | Has Support |
| ---------- | ----------- |
| Node.js    | ✅          |
| Cloudflare | ✅          |

## How to use

### Create an OAuth application

Follow the steps on [the Microsoft documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app) to create a new App Registration. You should select **Web** as the platform, configure a **Redirect URI** and add a client secret.

    If you want to support login with both personal Microsoft accounts and school/work accounts, you might need to configure the supported account types by editing the manifest file. Set `signInAudience` value to `MicrosoftADandPersonalMicrosoftAccount` to allow login also with personal accounts.

Change your redirect URI to `https://example.com/auth/microsoft/callback` or `http://localhost:4200/auth/microsoft/callback` if you run it locally.

Be sure to copy the client secret, redirect URI, Tenant ID and the Application (client) ID (under Overview) because you will need them later.

### Install dependencies

```bash
npm install remix-auth-microsoft remix-auth
```

### Create the strategy instance

```ts
// app/services/auth.server.ts
import { MicrosoftStrategy } from "remix-auth-microsoft";
import { Authenticator } from "remix-auth";

export let authenticator = new Authenticator<User>(); //User is a custom user types you can define as you want

let microsoftStrategy = new MicrosoftStrategy(
  {
    clientId: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
    redirectURI: "https://example.com/auth/microsoft/callback",
    tenantId: "YOUR_TENANT_ID", // optional - necessary for organization without multitenant (see below)
    scopes: ["openid", "profile", "email"], // optional
    prompt: "login", // optional
  },
  async ({ request, tokens }) => {
    // Here you can fetch the user from database or return a user object based on profile
    let accessToken = tokens.accessToken();
    let idToken = tokens.idToken();
    let profile = await MicrosoftStrategy.userProfile(accessToken);

    // The returned object is stored in the session storage you are using by the authenticator

    // If you're using cookieSessionStorage, be aware that cookies have a size limit of 4kb

    // Retrieve or create user using id received from userinfo endpoint
    // https://graph.microsoft.com/oidc/userinfo

    // DO NOT USE EMAIL ADDRESS TO IDENTIFY USERS
    // The email address received from Microsoft Entra ID is not validated and can be changed to anything from Azure Portal.
    // If you use the email address to identify users and allow signing in from any tenant (`tenantId` is not set)
    // it opens up a possibility of spoofing users!

    return User.findOrCreate({ id: profile.id });
  }
);

authenticator.use(microsoftStrategy);
```

See [Microsoft docs](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) for more information on `scope` and `prompt` parameters.

### Applications with single-tenant authentication (no multitenant allowed)

If you want to allow login only for users from a single organization, you should add the `tenantId` attribute to the configuration passed to `MicrosoftStrategy`.
The value of `tenantId` should be the **Directory (tenant) ID** found under **Overview** in your App Registration page.

You must also select **Accounts in this organizational directory** as Supported account types in your App Registration.

### Next steps

See the [Remix Auth documentation](https://sergiodxa.github.io/remix-auth/) on how to configure your routes, persist the session in a cookie, etc.
