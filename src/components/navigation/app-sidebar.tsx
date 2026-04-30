import Link from "next/link";

import { appNavigation } from "@/config/navigation";
import { productConfig } from "@/config/product";
import { siteConfig } from "@/config/site";

interface AppSidebarProps {
  currentPath: string;
}

export function AppSidebar({ currentPath }: AppSidebarProps) {
  return (
    <aside className="theme-panel rounded-[28px] border p-5 backdrop-blur">
      <div className="theme-surface-muted rounded-3xl border p-4">
        <p className="text-xs uppercase tracking-[0.25em]" style={{ color: "var(--theme-accent-cyan)" }}>
          {productConfig.release}
        </p>
        <h1 className="mt-3 text-2xl font-semibold theme-text">{siteConfig.productName}</h1>
        <p className="theme-text-muted mt-2 text-sm leading-6">
          {productConfig.workspaceName} • {productConfig.environment}
        </p>
      </div>

      <nav className="mt-6 space-y-2">
        {appNavigation.map((item) => {
          const Icon = item.icon;
          const active = currentPath === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                active ? "theme-pill-active border-transparent" : "theme-pill-inactive"
              }`}
            >
              <Icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="theme-surface-muted mt-6 rounded-3xl border p-4">
        <p className="theme-text-muted text-sm">Plan</p>
        <p className="theme-text mt-2 text-lg font-semibold">{productConfig.workspacePlan}</p>
        <p className="theme-text-muted mt-2 text-sm leading-6">
          Centralized config makes this shell easier to fork into real MVPs.
        </p>
      </div>
    </aside>
  );
}
