import { getArchetype } from "@/lib/archetypes";
import { activeVerticalPreset } from "@/config/presets/active-preset";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ArchetypeStorySection() {
  const archetype = getArchetype(activeVerticalPreset.archetype);

  return (
    <Card className="theme-panel border py-0 backdrop-blur">
      <CardHeader className="px-6 pt-6 sm:px-8 sm:pt-8">
        <CardTitle className="theme-text text-2xl">Archetype-driven composition</CardTitle>
        <CardDescription className="theme-text-muted max-w-2xl text-sm leading-6">
          The active archetype changes what the page emphasizes so two MVPs can share a codebase without sharing the same visual story.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 px-6 pb-6 sm:grid-cols-2 xl:grid-cols-4 sm:px-8 sm:pb-8">
        <div className="theme-surface-muted rounded-3xl border p-5">
          <p className="text-sm uppercase tracking-[0.22em]" style={{ color: "var(--theme-accent-cyan)" }}>
            Landing focus
          </p>
          <ul className="theme-text-soft mt-4 space-y-2 text-sm leading-6">
            {archetype.landingPrimary.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="theme-surface-muted rounded-3xl border p-5">
          <p className="text-sm uppercase tracking-[0.22em]" style={{ color: "var(--theme-accent-violet)" }}>
            App focus
          </p>
          <ul className="theme-text-soft mt-4 space-y-2 text-sm leading-6">
            {archetype.appPrimary.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="theme-surface-muted rounded-3xl border p-5">
          <p className="text-sm uppercase tracking-[0.22em]" style={{ color: "var(--theme-accent-emerald)" }}>
            Visual rules
          </p>
          <ul className="theme-text-soft mt-4 space-y-2 text-sm leading-6">
            {archetype.visualRules.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="theme-surface-muted rounded-3xl border p-5">
          <p className="text-sm uppercase tracking-[0.22em]" style={{ color: "var(--theme-accent-amber)" }}>
            Default posture
          </p>
          <p className="theme-text mt-4 text-lg font-semibold">{archetype.label}</p>
          <p className="theme-text-muted mt-3 text-sm leading-6">{archetype.idealUse}</p>
        </div>
      </CardContent>
    </Card>
  );
}
