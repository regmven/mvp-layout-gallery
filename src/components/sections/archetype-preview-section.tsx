import { activeVerticalPreset } from "@/config/presets/active-preset";
import { getArchetype, getArchetypeEntries } from "@/lib/archetypes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ArchetypePreviewSection() {
  const activeArchetype = getArchetype(activeVerticalPreset.archetype);
  const archetypes = getArchetypeEntries();

  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <Card className="theme-panel py-0 border backdrop-blur">
        <CardHeader>
          <CardTitle className="theme-text">Active archetype</CardTitle>
          <CardDescription className="theme-text-muted">
            Archetypes change structure, rhythm, and emphasis so MVPs stop feeling like the same template with different copy.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-3xl border p-5 theme-surface-muted">
            <p className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--theme-accent-cyan)" }}>
              {activeArchetype.key}
            </p>
            <h3 className="mt-3 text-2xl font-semibold theme-text">{activeArchetype.label}</h3>
            <p className="mt-3 text-sm leading-7 theme-text-soft">{activeArchetype.summary}</p>
            <p className="mt-4 text-sm leading-7 theme-text-muted">{activeArchetype.idealUse}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {activeArchetype.dashboardEmphasis.map((focus) => (
              <div key={focus} className="theme-surface-muted rounded-2xl border px-4 py-3 text-sm">
                {focus}
              </div>
            ))}
          </div>
          <div className="theme-surface-muted rounded-3xl border p-5">
            <p className="text-sm uppercase tracking-[0.22em]" style={{ color: "var(--theme-accent-violet)" }}>
              Ideal use
            </p>
            <p className="theme-text-soft mt-3 text-sm leading-7">{activeArchetype.idealUse}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="theme-panel py-0 border backdrop-blur">
        <CardHeader>
          <CardTitle className="theme-text">10 available archetypes</CardTitle>
          <CardDescription className="theme-text-muted">
            Use these to control composition style separately from the visual theme and product vertical.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {archetypes.map((archetype) => (
            <div key={archetype.key} className="theme-surface-muted rounded-3xl border p-5">
              <p className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--theme-accent-cyan)" }}>
                {archetype.heroMode}
              </p>
              <p className="theme-text mt-3 text-lg font-semibold">{archetype.label}</p>
              <p className="theme-text-muted mt-2 text-sm leading-6">{archetype.summary}</p>
              <p className="theme-text-soft mt-3 text-xs leading-5">{archetype.idealUse}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
