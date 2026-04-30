import type { ProviderRecipeKey } from "@/data/verticals/vertical-presets";

export interface ProviderRecipe {
  key: ProviderRecipeKey;
  label: string;
  category: "auth" | "billing";
  summary: string;
  strengths: string[];
  starterSteps: string[];
}

export const PROVIDER_RECIPES: Record<ProviderRecipeKey, ProviderRecipe> = {
  clerk: {
    key: "clerk",
    label: "Clerk",
    category: "auth",
    summary: "Fastest path to polished auth UX with hosted flows, session helpers, and organization-ready primitives.",
    strengths: ["fast setup", "good UX", "org-aware auth", "middleware support"],
    starterSteps: [
      "Install Clerk SDK and add provider to root layout",
      "Replace auth placeholders with Clerk components",
      "Protect /app routes with middleware and session checks",
    ],
  },
  "supabase-auth": {
    key: "supabase-auth",
    label: "Supabase Auth",
    category: "auth",
    summary: "Good fit when you want auth and database foundations from one stack with portable backend patterns.",
    strengths: ["db + auth pairing", "SQL-friendly", "self-serve backend", "good for MVPs"],
    starterSteps: [
      "Add Supabase client/server helpers",
      "Replace mock auth adapter with Supabase session adapter",
      "Persist workspace, settings, and onboarding state in Postgres",
    ],
  },
  authjs: {
    key: "authjs",
    label: "Auth.js",
    category: "auth",
    summary: "Flexible auth layer for teams that want more control over providers, sessions, and custom flows.",
    strengths: ["provider flexibility", "custom control", "Next.js native feel", "adapter ecosystem"],
    starterSteps: [
      "Configure Auth.js route handlers and providers",
      "Wire session reads into app shell and protected routes",
      "Map existing auth placeholders into custom forms or provider buttons",
    ],
  },
  stripe: {
    key: "stripe",
    label: "Stripe",
    category: "billing",
    summary: "Default recipe for subscription billing, usage charges, invoices, and upgrade flows.",
    strengths: ["subscription billing", "customer portal", "webhooks", "MVP-friendly"],
    starterSteps: [
      "Replace billing mock adapter with Stripe-backed billing snapshot loader",
      "Add checkout/session flows for plan upgrades",
      "Wire billing page to invoice, usage, and renewal data",
    ],
  },
};
