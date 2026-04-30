import { activeVerticalPreset } from "@/config/presets/active-preset";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PROVIDER_RECIPES } from "@/lib/recipes/provider-recipes";

export function ProviderRecipesSection() {
  const recipes = activeVerticalPreset.recommendedRecipes.map((key) => PROVIDER_RECIPES[key]);

  return (
    <section className="grid gap-6 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <Card key={recipe.key} className="border-white/10 bg-white/[0.04] py-0 text-white">
          <CardHeader>
            <CardTitle className="text-white">{recipe.label}</CardTitle>
            <CardDescription className="text-slate-400">{recipe.summary}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">Strengths</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {recipe.strengths.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">Starter steps</p>
              <div className="mt-3 space-y-2">
                {recipe.starterSteps.map((step) => (
                  <div key={step} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300">
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
