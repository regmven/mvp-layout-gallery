import { activeVerticalPreset } from "@/config/presets/active-preset";

export const siteConfig = {
  name: "MVP Base Dashboard Starter",
  description: "Premium reusable starter with a 20-theme library and 10 archetypes for distinct MVP landing pages and executive dashboards.",
  productName: activeVerticalPreset.productName,
  defaultThemePreset: activeVerticalPreset.theme,
  defaultArchetype: activeVerticalPreset.archetype,
  primaryCta: activeVerticalPreset.primaryCta,
  secondaryCta: activeVerticalPreset.secondaryCta,
} as const;
