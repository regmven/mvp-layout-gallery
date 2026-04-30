import type { ArchetypeKey } from "@/data/archetypes";
import type { ThemePresetKey } from "@/data/theme-presets";

export type ProviderRecipeKey = "clerk" | "supabase-auth" | "authjs" | "stripe";
export type VerticalPresetKey = "saas-starter" | "ops-command" | "ai-copilot";

export interface VerticalPreset {
  key: VerticalPresetKey;
  label: string;
  summary: string;
  theme: ThemePresetKey;
  archetype: ArchetypeKey;
  productName: string;
  primaryCta: string;
  secondaryCta: string;
  marketingSections: string[];
  appFocus: string[];
  recommendedRecipes: ProviderRecipeKey[];
  tags: string[];
}

export const VERTICAL_PRESETS: Record<VerticalPresetKey, VerticalPreset> = {
  "saas-starter": {
    key: "saas-starter",
    label: "SaaS Starter",
    summary: "Subscription product shell optimized for growth, retention, and executive visibility.",
    theme: "executive-night",
    archetype: "executive-split-hero",
    productName: "Northstar Cloud",
    primaryCta: "Launch SaaS shell",
    secondaryCta: "Explore SaaS blocks",
    marketingSections: ["hero", "value-props", "workflow", "pricing", "integrations"],
    appFocus: ["MRR", "billing", "team roles", "customer health"],
    recommendedRecipes: ["clerk", "stripe", "supabase-auth"],
    tags: ["subscription", "dashboard", "growth"],
  },
  "ops-command": {
    key: "ops-command",
    label: "Ops Command",
    summary: "Command-center shell for operations, service visibility, dispatch, and internal workflows.",
    theme: "royal-slate",
    archetype: "boardroom-dashboard",
    productName: "FieldOps Command",
    primaryCta: "Open command center",
    secondaryCta: "See ops workflow",
    marketingSections: ["hero", "highlights", "workflow", "integrations"],
    appFocus: ["SLAs", "alerts", "throughput", "incident readiness"],
    recommendedRecipes: ["supabase-auth", "authjs"],
    tags: ["operations", "internal-tool", "monitoring"],
  },
  "ai-copilot": {
    key: "ai-copilot",
    label: "AI Copilot",
    summary: "AI product shell for usage analytics, assistant visibility, and automation workflows.",
    theme: "midnight-cyan",
    archetype: "bento-intelligence-grid",
    productName: "Promptlane Copilot",
    primaryCta: "Ship AI product",
    secondaryCta: "Preview AI preset",
    marketingSections: ["hero", "value-props", "highlights", "workflow", "pricing"],
    appFocus: ["usage", "cost control", "automation lift", "workspace health"],
    recommendedRecipes: ["clerk", "stripe", "authjs"],
    tags: ["ai", "copilot", "usage-analytics"],
  },
};
