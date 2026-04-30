import { Badge } from "@/components/ui/badge";

interface NoticeBannerProps {
  title: string;
  description: string;
  tone?: "info" | "success" | "warning";
}

const toneClassMap = {
  info: "bg-cyan-400/12 text-cyan-200 ring-1 ring-cyan-400/20",
  success: "bg-emerald-400/12 text-emerald-200 ring-1 ring-emerald-400/20",
  warning: "bg-amber-400/12 text-amber-200 ring-1 ring-amber-400/20",
};

export function NoticeBanner({ title, description, tone = "info" }: NoticeBannerProps) {
  return (
    <div className="flex flex-col gap-3 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-lg font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm text-slate-400">{description}</p>
      </div>
      <Badge className={toneClassMap[tone]}>{tone}</Badge>
    </div>
  );
}
