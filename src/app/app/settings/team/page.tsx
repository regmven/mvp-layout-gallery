import { AppShell } from "@/components/layout/app-shell";
import { SettingsShell } from "@/components/layout/settings-shell";
import { AppHeader } from "@/components/navigation/app-header";
import { TeamBillingPanel } from "@/components/sections/team-billing-panel";
import { NoticeBanner } from "@/components/states/notice-banner";

export default function TeamSettingsPage() {
  return (
    <AppShell currentPath="/app/settings/team">
      <NoticeBanner
        title="Team management now has its own route"
        description="This is the right level for roles, invites, audit access, and workspace-level controls in future iterations."
      />
      <AppHeader
        title="Team settings"
        description="Use this surface for members, roles, invites, and workspace access policy."
        breadcrumb="Settings / Team"
      />
      <SettingsShell currentPath="/app/settings/team">
        <TeamBillingPanel />
      </SettingsShell>
    </AppShell>
  );
}
