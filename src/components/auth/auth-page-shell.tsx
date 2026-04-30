import Link from "next/link";

import { siteConfig } from "@/config/site";

interface AuthPageShellProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function AuthPageShell({ title, description, children }: AuthPageShellProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_30%),linear-gradient(180deg,#06101d_0%,#0a1526_52%,#0e1b31_100%)] px-6 py-10 text-white">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-5xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">{siteConfig.name}</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="max-w-xl text-base leading-7 text-slate-300">{description}</p>
          <div className="flex gap-3 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">
              Marketing
            </Link>
            <Link href="/app" className="hover:text-white">
              App shell
            </Link>
          </div>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">{children}</div>
      </div>
    </main>
  );
}
