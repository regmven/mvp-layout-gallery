import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProviderRecipesSection } from "@/components/recipes/provider-recipes-section";
import { ActivityTab } from "@/components/sections/activity-tab";
import { ArchetypePreviewSection } from "@/components/sections/archetype-preview-section";
import { ArchetypeStorySection } from "@/components/sections/archetype-story-section";
import { EducationHeroSection } from "@/components/sections/education-hero-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HighlightsSection } from "@/components/sections/highlights-section";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import { OverviewTab } from "@/components/sections/overview-tab";
import { PipelinePanel } from "@/components/sections/pipeline-panel";
import { PipelineTab } from "@/components/sections/pipeline-tab";
import { PricingSection } from "@/components/sections/pricing-section";
import { ValuePropsSection } from "@/components/sections/value-props-section";
import { VerticalPresetSection } from "@/components/sections/vertical-preset-section";
import { WorkflowSection } from "@/components/sections/workflow-section";
import { activeVerticalPreset } from "@/config/presets/active-preset";
import { marketingTabs } from "@/config/navigation";
import type { ThemePreset } from "@/data/theme-presets";

interface MarketingPageProps {
  theme: ThemePreset;
}

export function MarketingPage({ theme }: MarketingPageProps) {
  const isEducationArchetype = activeVerticalPreset.archetype === "editorial-authority-page";

  return (
    <main className="theme-root min-h-screen" style={{ color: "var(--theme-text)" }}>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        {isEducationArchetype ? (
          <EducationHeroSection />
        ) : (
          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <HeroSection theme={theme} />
            <PipelinePanel />
          </section>
        )}

        <VerticalPresetSection />
        <ArchetypePreviewSection />
        <ValuePropsSection />
        <HighlightsSection />
        <ArchetypeStorySection />
        <WorkflowSection />

        <section>
          <Card className="theme-panel-strong border py-0">
            <CardHeader className="px-6 pt-6 sm:px-8 sm:pt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="theme-text-muted text-sm uppercase tracking-[0.25em]">Dashboard demo</p>
                  <CardTitle className="theme-text mt-2 text-3xl font-semibold">{theme.dashboard.title}</CardTitle>
                </div>
                <CardDescription className="theme-text-muted max-w-xl text-sm leading-6">
                  {theme.dashboard.description}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8">
              <Tabs defaultValue="overview" className="mt-4 gap-6">
                <TabsList className="theme-pill-inactive border">
                  {marketingTabs.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value}>
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="overview" className="mt-0">
                  <OverviewTab />
                </TabsContent>

                <TabsContent value="pipeline" className="mt-0">
                  <PipelineTab />
                </TabsContent>

                <TabsContent value="activity" className="mt-0">
                  <ActivityTab />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        <PricingSection />
        <ProviderRecipesSection />
        <IntegrationsSection />
      </div>
    </main>
  );
}
