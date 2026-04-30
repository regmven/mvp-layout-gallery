import { activeVerticalPreset } from "@/config/presets/active-preset";

export const productConfig = {
  workspaceName: activeVerticalPreset.productName,
  workspacePlan: "Growth Build",
  environment: "Production mirror",
  release: "v0.8 theme + archetype system",
  summary: activeVerticalPreset.summary,
  appFocus: activeVerticalPreset.appFocus,
  tags: activeVerticalPreset.tags,
  archetype: activeVerticalPreset.archetype,
} as const;
