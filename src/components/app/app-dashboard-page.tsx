import { ArrowUpRight } from "lucide-react";

import { activeVerticalPreset } from "@/config/presets/active-preset";
import { productConfig } from "@/config/product";
import { AppHeader } from "@/components/navigation/app-header";
import { ActivityTab } from "@/components/sections/activity-tab";
import { ArchetypeAppSummary } from "@/components/sections/archetype-app-summary";
import { OnboardingPanel } from "@/components/sections/onboarding-panel";
import { OverviewTab } from "@/components/sections/overview-tab";
import { PipelineTab } from "@/components/sections/pipeline-tab";
import { TeamBillingPanel } from "@/components/sections/team-billing-panel";
import { NoticeBanner } from "@/components/states/notice-banner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ThemePreset } from "@/data/theme-presets";

interface AppDashboardPageProps {
  theme: ThemePreset;
}

export function AppDashboardPage({ theme }: AppDashboardPageProps) {
  return (
    <>
      <NoticeBanner
        title="v0.8 makes the starter theme + archetype driven"
        description="The active vertical preset now drives product framing, while themes and archetypes control how distinct the MVP looks and behaves."
      />

      <AppHeader
        title={theme.dashboard.title}
        description={theme.dashboard.description}
        breadcrumb="App dashboard"
        actions={
          <>
            <Button variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              View docs
            </Button>
            <Button className="bg-white text-slate-950 hover:bg-cyan-100">
              New report
              <ArrowUpRight className="size-4" />
            </Button>
          </>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <OverviewTab />
        <div className="space-y-6">
          <Card className="theme-panel border py-0 backdrop-blur">
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <CardTitle className="theme-text">Active preset readiness</CardTitle>
                  <CardDescription className="theme-text-muted">
                    Template-level signals coming from the selected vertical preset.
                  </CardDescription>
                </div>
                <Badge className="theme-pill-active border-0">v0.8</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm theme-text-soft">
              <div className="theme-surface-muted rounded-2xl border px-4 py-3">Preset: {activeVerticalPreset.label}</div>
              <div className="theme-surface-muted rounded-2xl border px-4 py-3">Recommended stack: {activeVerticalPreset.recommendedRecipes.join(", ")}</div>
              <div className="theme-surface-muted rounded-2xl border px-4 py-3">Focus areas: {productConfig.appFocus.join(", ")}</div>
              <div className="theme-surface-muted rounded-2xl border px-4 py-3">Tags: {productConfig.tags.join(", ")}</div>
            </CardContent>
          </Card>

          <ArchetypeAppSummary />
          <OnboardingPanel />
        </div>
      </div>

      <PipelineTab />
      <TeamBillingPanel />

      <div>
        <h3 className="theme-text mb-4 text-lg font-semibold">Recent activity</h3>
        <ActivityTab />
      </div>
    </>
  );
}
