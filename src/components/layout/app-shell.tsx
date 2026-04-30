import { getThemeStyles, getThemePreset } from "@/lib/theme";
import { AppSidebar } from "@/components/navigation/app-sidebar";

interface AppShellProps {
  currentPath: string;
  children: React.ReactNode;
}

export function AppShell({ currentPath, children }: AppShellProps) {
  const theme = getThemePreset();

  return (
    <main className="theme-root min-h-screen" style={getThemeStyles(theme)}>
      <div className="mx-auto grid min-h-screen max-w-7xl gap-6 px-6 py-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8">
        <AppSidebar currentPath={currentPath} />
        <section className="space-y-6">{children}</section>
      </div>
    </main>
  );
}
