import { activeVerticalPreset } from "@/config/presets/active-preset";
import { productConfig } from "@/config/product";
import { getArchetype } from "@/lib/archetypes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ArchetypeAppSummary() {
  const archetype = getArchetype(activeVerticalPreset.archetype);

  return (
    <Card className="theme-panel border py-0 backdrop-blur">
      <CardHeader>
        <CardTitle className="theme-text">Archetype readiness</CardTitle>
        <CardDescription className="theme-text-muted">
          The current starter is configured to bias the app experience around this archetype.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm theme-text-soft">
        <div className="theme-surface-muted rounded-2xl border px-4 py-3">Archetype: {archetype.label}</div>
        <div className="theme-surface-muted rounded-2xl border px-4 py-3">Hero mode: {archetype.heroMode}</div>
        <div className="theme-surface-muted rounded-2xl border px-4 py-3">App emphasis: {archetype.appPrimary.join(", ")}</div>
        <div className="theme-surface-muted rounded-2xl border px-4 py-3">Dashboard signals: {archetype.dashboardEmphasis.join(", ")}</div>
        <div className="theme-surface-muted rounded-2xl border px-4 py-3">Suggested themes: {archetype.defaultThemes.join(", ")}</div>
        <div className="theme-surface-muted rounded-2xl border px-4 py-3">Vertical tags: {productConfig.tags.join(", ")}</div>
      </CardContent>
    </Card>
  );
}
