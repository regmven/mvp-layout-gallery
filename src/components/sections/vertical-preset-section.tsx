import { activeVerticalPreset } from "@/config/presets/active-preset";
import { VERTICAL_PRESETS } from "@/data/verticals/vertical-presets";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function VerticalPresetSection() {
  const presets = Object.values(VERTICAL_PRESETS);

  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <Card className="theme-panel border py-0 backdrop-blur">
        <CardHeader>
          <CardTitle className="theme-text">Active vertical preset</CardTitle>
          <CardDescription className="theme-text-muted">
            Swap one config key to reshape product naming, theme, CTA tone, provider recommendations, and default archetype.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="theme-surface-muted rounded-3xl border p-5">
            <p className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--theme-accent-cyan)" }}>
              {activeVerticalPreset.key}
            </p>
            <h3 className="theme-text mt-3 text-2xl font-semibold">{activeVerticalPreset.label}</h3>
            <p className="theme-text-soft mt-3 text-sm leading-7">{activeVerticalPreset.summary}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {activeVerticalPreset.appFocus.map((focus) => (
              <div key={focus} className="theme-surface-muted rounded-2xl border px-4 py-3 text-sm">
                {focus}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="theme-panel border py-0 backdrop-blur">
        <CardHeader>
          <CardTitle className="theme-text">Available vertical presets</CardTitle>
          <CardDescription className="theme-text-muted">Use these as fast starting points for different MVP categories.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {presets.map((preset) => (
            <div key={preset.key} className="theme-surface-muted rounded-3xl border p-5">
              <p className="theme-text-muted text-sm uppercase tracking-[0.2em]">{preset.theme} • {preset.archetype}</p>
              <p className="theme-text mt-3 text-lg font-semibold">{preset.label}</p>
              <p className="theme-text-muted mt-2 text-sm leading-6">{preset.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {preset.tags.map((tag) => (
                  <span key={tag} className="theme-pill-inactive rounded-full border px-3 py-1 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
