import { AppShell } from "@/components/layout/app-shell";
import { AppDashboardPage } from "@/components/app/app-dashboard-page";
import { getThemePreset } from "@/lib/theme";

export default function AppRoute() {
  const theme = getThemePreset();

  return (
    <AppShell currentPath="/app">
      <AppDashboardPage theme={theme} />
    </AppShell>
  );
}
