import { siteConfig } from "@/config/site";
import { THEME_PRESETS, type ThemePreset, type ThemePresetKey } from "@/data/theme-presets";

export function getThemePreset(key?: string): ThemePreset {
  const fallbackKey = siteConfig.defaultThemePreset as ThemePresetKey;
  const safeKey = (key && key in THEME_PRESETS ? key : fallbackKey) as ThemePresetKey;
  return THEME_PRESETS[safeKey];
}

export function getThemeEntries() {
  return Object.values(THEME_PRESETS);
}

export function getThemeStyles(theme: ThemePreset) {
  const { tokens } = theme;

  return {
    "--theme-background": tokens.background,
    "--theme-background-alt": tokens.backgroundAlt,
    "--theme-panel": tokens.panel,
    "--theme-panel-alt": tokens.panelAlt,
    "--theme-panel-muted": tokens.panelMuted,
    "--theme-text": tokens.text,
    "--theme-text-muted": tokens.textMuted,
    "--theme-text-soft": tokens.textSoft,
    "--theme-border": tokens.border,
    "--theme-border-strong": tokens.borderStrong,
    "--theme-primary-button": tokens.primaryButton,
    "--theme-primary-button-text": tokens.primaryButtonText,
    "--theme-primary-button-hover": tokens.primaryButtonHover,
    "--theme-secondary-button": tokens.secondaryButton,
    "--theme-secondary-button-text": tokens.secondaryButtonText,
    "--theme-secondary-button-border": tokens.secondaryButtonBorder,
    "--theme-secondary-button-hover": tokens.secondaryButtonHover,
    "--theme-active-pill": tokens.activePill,
    "--theme-active-pill-text": tokens.activePillText,
    "--theme-inactive-pill": tokens.inactivePill,
    "--theme-inactive-pill-text": tokens.inactivePillText,
    "--theme-ring": tokens.ring,
    "--theme-shadow": tokens.shadow,
    "--theme-shadow-color": tokens.shadowColor,
    "--theme-gradient-hero": tokens.gradientHero,
    "--theme-gradient-panel": tokens.gradientPanel,
    "--theme-accent-cyan": theme.accents.cyan,
    "--theme-accent-violet": theme.accents.violet,
    "--theme-accent-emerald": theme.accents.emerald,
    "--theme-accent-amber": theme.accents.amber,
  } as React.CSSProperties;
}
