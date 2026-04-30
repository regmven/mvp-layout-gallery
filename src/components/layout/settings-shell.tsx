import Link from "next/link";

import { settingsNavigation } from "@/config/navigation";

interface SettingsShellProps {
  currentPath: string;
  children: React.ReactNode;
}

export function SettingsShell({ currentPath, children }: SettingsShellProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {settingsNavigation.map((item) => {
          const active = currentPath === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active ? "bg-white text-slate-950" : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
}
