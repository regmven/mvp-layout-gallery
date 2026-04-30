import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getThemeEntries, getThemePreset, getThemeStyles } from "@/lib/theme";
import { getArchetypeEntries } from "@/lib/archetypes";
import { VERTICAL_PRESETS } from "@/data/verticals/vertical-presets";

export default function ThemePreviewPage() {
  const presets = getThemeEntries();
  const activeTheme = getThemePreset();
  const verticals = Object.values(VERTICAL_PRESETS);
  const archetypes = getArchetypeEntries();

  return (
    <main className="theme-root min-h-screen px-6 py-10 sm:px-8 lg:px-10" style={getThemeStyles(activeTheme)}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em]" style={{ color: "var(--theme-accent-cyan)" }}>
            Theme library
          </p>
          <h1 className="theme-text mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            20 modern, corporate, and elegant themes for MVPs
          </h1>
          <p className="theme-text-soft mt-4 text-base leading-7">
            Visual identity is now a first-class layer. Product presets define what the MVP does; theme presets define how premium,
            minimal, bold, or executive it feels.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {presets.map((preset) => (
            <Card key={preset.key} className="theme-panel border py-0 backdrop-blur">
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="theme-text text-lg">{preset.label}</CardTitle>
                  <span className="rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.22em] theme-pill-inactive">
                    {preset.category}
                  </span>
                </div>
                <CardDescription className="theme-text-muted">{preset.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-2">
                  {Object.values(preset.accents).map((color) => (
                    <div key={color} className="h-10 rounded-2xl border" style={{ backgroundColor: color, borderColor: "var(--theme-border)" }} />
                  ))}
                </div>
                <div className="mt-5 space-y-2">
                  <p className="theme-text text-sm font-medium">{preset.hero.title}</p>
                  <p className="theme-text-muted text-sm leading-6">{preset.hero.description}</p>
                </div>
                <div className="mt-5 rounded-3xl border p-4" style={{ background: preset.tokens.gradientPanel, borderColor: preset.tokens.border }}>
                  <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.22em]" style={{ color: preset.tokens.textMuted }}>
                    <span>{preset.key}</span>
                    <span>{preset.category}</span>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="rounded-2xl p-3" style={{ background: preset.tokens.panelMuted }}>
                      <p className="text-xs" style={{ color: preset.tokens.textMuted }}>Primary CTA</p>
                      <div className="mt-2 rounded-full px-3 py-2 text-xs font-semibold" style={{ background: preset.tokens.primaryButton, color: preset.tokens.primaryButtonText }}>
                        Open MVP
                      </div>
                    </div>
                    <div className="rounded-2xl p-3" style={{ background: preset.tokens.panelMuted }}>
                      <p className="text-xs" style={{ color: preset.tokens.textMuted }}>Surface tone</p>
                      <div className="mt-2 h-9 rounded-full border" style={{ background: preset.tokens.secondaryButton, borderColor: preset.tokens.secondaryButtonBorder }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="theme-panel mt-10 rounded-[32px] border p-6 backdrop-blur">
          <div className="max-w-3xl">
            <p className="theme-text-muted text-sm uppercase tracking-[0.25em]">Archetypes</p>
            <h2 className="theme-text mt-3 text-3xl font-semibold">10 composition systems for distinct MVP structures</h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {archetypes.map((archetype) => (
              <div key={archetype.key} className="theme-surface-muted rounded-3xl border p-5">
                <p className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--theme-accent-violet)" }}>{archetype.heroMode}</p>
                <p className="theme-text mt-3 text-base font-semibold">{archetype.label}</p>
                <p className="theme-text-muted mt-2 text-sm leading-6">{archetype.summary}</p>
                <p className="theme-text-soft mt-3 text-xs leading-5">{archetype.idealUse}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="theme-panel mt-10 rounded-[32px] border p-6 backdrop-blur">
          <div className="max-w-3xl">
            <p className="theme-text-muted text-sm uppercase tracking-[0.25em]">Vertical presets</p>
            <h2 className="theme-text mt-3 text-3xl font-semibold">Product framing layered on top of the theme system</h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {verticals.map((preset) => (
              <div key={preset.key} className="theme-surface-muted rounded-3xl border p-5">
                <p className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--theme-accent-cyan)" }}>{preset.theme}</p>
                <p className="theme-text mt-3 text-lg font-semibold">{preset.label}</p>
                <p className="theme-text-muted mt-2 text-sm leading-6">{preset.summary}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="theme-button-secondary rounded-full border px-5 py-3 text-sm font-medium">
            Marketing route
          </Link>
          <Link href="/app" className="theme-button-primary rounded-full px-5 py-3 text-sm font-medium">
            App route
          </Link>
          <Link href="/sign-in" className="theme-button-secondary rounded-full border px-5 py-3 text-sm font-medium">
            Auth route
          </Link>
        </div>
      </div>
    </main>
  );
}
