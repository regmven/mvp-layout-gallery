import { productConfig } from "@/config/product";

interface AppHeaderProps {
  title: string;
  description: string;
  breadcrumb?: string;
  actions?: React.ReactNode;
}

export function AppHeader({ title, description, breadcrumb, actions }: AppHeaderProps) {
  return (
    <header className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{breadcrumb ?? productConfig.workspaceName}</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{description}</p>
      </div>
      {actions ? <div className="flex gap-3">{actions}</div> : null}
    </header>
  );
}
