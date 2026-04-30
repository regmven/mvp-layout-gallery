import { AppShell } from "@/components/layout/app-shell";
import { AppHeader } from "@/components/navigation/app-header";
import { OnboardingPanel } from "@/components/sections/onboarding-panel";
import { EmptyState } from "@/components/states/empty-state";
import { NoticeBanner } from "@/components/states/notice-banner";

export default function OnboardingPage() {
  return (
    <AppShell currentPath="/app/onboarding">
      <NoticeBanner
        title="Onboarding has a dedicated route now"
        description="This is ready to become a true first-run flow with persistence, completion tracking, and role-aware setup steps."
      />
      <AppHeader
        title="Onboarding workspace"
        description="A first-class route for setup progress, launch readiness, and first-run product workflows."
        breadcrumb="Onboarding"
      />
      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <OnboardingPanel />
        <EmptyState
          title="Next step: persist onboarding state"
          description="v0.6 introduces server-shaped loaders and adapter contracts so this page can be connected to real setup progress later."
        />
      </div>
    </AppShell>
  );
}
