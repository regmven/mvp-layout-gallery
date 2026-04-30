import { AppShell } from "@/components/layout/app-shell";
import { SettingsShell } from "@/components/layout/settings-shell";
import { AppHeader } from "@/components/navigation/app-header";
import { SettingsFormCard } from "@/components/settings/settings-form-card";
import { NoticeBanner } from "@/components/states/notice-banner";

export default function ProfileSettingsPage() {
  return (
    <AppShell currentPath="/app/settings/profile">
      <NoticeBanner
        title="Settings routes are now first-class"
        description="v0.5 adds reusable settings navigation and page primitives instead of keeping everything inside one dashboard view."
      />
      <AppHeader
        title="Profile settings"
        description="Use this route as the base for account preferences, notification rules, and workspace profile settings."
        breadcrumb="Settings / Profile"
      />
      <SettingsShell currentPath="/app/settings/profile">
        <div className="grid gap-6 xl:grid-cols-2">
          <SettingsFormCard title="Workspace profile" description="Swap these placeholders for real controlled forms or server actions later.">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300">Workspace name: Northstar Workspace</div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300">Primary contact: founder@northstar.app</div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300">Timezone: America/Puerto_Rico</div>
          </SettingsFormCard>
          <SettingsFormCard title="Notification rules" description="A ready spot for email, Slack, digest, or incident notification toggles.">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300">Daily digest: enabled</div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300">Executive alerts: enabled</div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300">Billing reminders: weekly</div>
          </SettingsFormCard>
        </div>
      </SettingsShell>
    </AppShell>
  );
}
