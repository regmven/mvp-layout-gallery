import { Bell, CreditCard, LayoutDashboard, Settings, ShieldCheck, Users } from "lucide-react";

export const appNavigation = [
  { label: "Overview", href: "/app", icon: LayoutDashboard },
  { label: "Onboarding", href: "/app/onboarding", icon: ShieldCheck },
  { label: "Team", href: "/app/settings/team", icon: Users },
  { label: "Billing", href: "/app/settings/billing", icon: CreditCard },
  { label: "Alerts", href: "/app/settings/profile", icon: Bell },
  { label: "Settings", href: "/app/settings/profile", icon: Settings },
] as const;

export const settingsNavigation = [
  { label: "Profile", href: "/app/settings/profile" },
  { label: "Team", href: "/app/settings/team" },
  { label: "Billing", href: "/app/settings/billing" },
] as const;

export const marketingTabs = [
  { label: "Overview", value: "overview" },
  { label: "Pipeline", value: "pipeline" },
  { label: "Activity", value: "activity" },
] as const;
