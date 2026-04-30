import { AppShell } from "@/components/layout/app-shell";
import { SettingsShell } from "@/components/layout/settings-shell";
import { AppHeader } from "@/components/navigation/app-header";
import { TeamBillingPanel } from "@/components/sections/team-billing-panel";
import { NoticeBanner } from "@/components/states/notice-banner";

export default function BillingSettingsPage() {
  return (
    <AppShell currentPath="/app/settings/billing">
      <NoticeBanner
        title="Billing is now modeled as a dedicated app route"
        description="That makes it much easier to later wire Stripe, usage analytics, invoices, and plan changes without collapsing everything into one dashboard page."
        tone="success"
      />
      <AppHeader
        title="Billing settings"
        description="Use this route for plan management, invoices, usage summaries, and upgrade flows."
        breadcrumb="Settings / Billing"
      />
      <SettingsShell currentPath="/app/settings/billing">
        <TeamBillingPanel />
      </SettingsShell>
    </AppShell>
  );
}
