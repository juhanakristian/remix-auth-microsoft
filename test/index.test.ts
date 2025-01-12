import { beforeEach, describe, expect, it, vi } from "vitest";
import { MicrosoftStrategy } from "../src";

describe(MicrosoftStrategy, () => {
  let verify = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should allow changing the scope", async () => {
    let strategy = new MicrosoftStrategy(
      {
        clientId: "CLIENT_ID",
        clientSecret: "CLIENT_SECRET",
        redirectURI: "https://example.app/callback",
        scopes: ["custom"],
      },
      verify
    );

    let request = new Request("https://example.app/auth/microsoft");

    try {
      await strategy.authenticate(request);
    } catch (error) {
      if (!(error instanceof Response)) throw error;
      let location = error.headers.get("Location");

      if (!location) throw new Error("No redirect header");

      let redirectUrl = new URL(location);

      expect(redirectUrl.searchParams.get("scope")).toBe("custom");
    }
  });

  it("should have the scope `openid profile email` as default", async () => {
    let strategy = new MicrosoftStrategy(
      {
        clientId: "CLIENT_ID",
        clientSecret: "CLIENT_SECRET",
        redirectURI: "https://example.app/callback",
      },
      verify
    );

    let request = new Request("https://example.app/auth/microsoft");

    try {
      await strategy.authenticate(request);
    } catch (error) {
      if (!(error instanceof Response)) throw error;
      let location = error.headers.get("Location");

      if (!location) throw new Error("No redirect header");

      let redirectUrl = new URL(location);

      expect(redirectUrl.searchParams.get("scope")).toBe(
        "openid profile email"
      );
    }
  });

  it("should correctly format the authorization URL", async () => {
    let strategy = new MicrosoftStrategy(
      {
        clientId: "CLIENT_ID",
        clientSecret: "CLIENT_SECRET",
        redirectURI: "https://example.app/callback",
      },
      verify
    );

    let request = new Request("https://example.app/auth/microsoft");

    try {
      await strategy.authenticate(request);
    } catch (error) {
      if (!(error instanceof Response)) throw error;

      let location = error.headers.get("Location");

      if (!location) throw new Error("No redirect header");

      let redirectUrl = new URL(location);

      expect(redirectUrl.hostname).toBe("login.microsoftonline.com");
      expect(redirectUrl.pathname).toBe("/common/oauth2/v2.0/authorize");
    }
  });

  it("should allow changing tenant", async () => {
    let strategy = new MicrosoftStrategy(
      {
        clientId: "CLIENT_ID",
        clientSecret: "CLIENT_SECRET",
        redirectURI: "https://example.app/callback",
        tenantId: "custom",
      },
      verify
    );

    let request = new Request("https://example.app/auth/microsoft");

    try {
      await strategy.authenticate(request);
    } catch (error) {
      if (!(error instanceof Response)) throw error;

      let location = error.headers.get("Location");

      if (!location) throw new Error("No redirect header");

      let redirectUrl = new URL(location);

      expect(redirectUrl.pathname).toBe("/custom/oauth2/v2.0/authorize");
    }
  });
});
