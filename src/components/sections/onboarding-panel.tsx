import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { onboardingTasks } from "@/data/dashboard-data";

const statusToneMap: Record<string, string> = {
  Ready: "bg-cyan-400/12 text-cyan-200 ring-1 ring-cyan-400/20",
  "In progress": "bg-violet-400/12 text-violet-200 ring-1 ring-violet-400/20",
  Blocked: "bg-amber-400/12 text-amber-200 ring-1 ring-amber-400/20",
  Complete: "bg-emerald-400/12 text-emerald-200 ring-1 ring-emerald-400/20",
};

export function OnboardingPanel() {
  return (
    <Card className="border-white/10 bg-white/[0.04] py-0 text-white">
      <CardHeader>
        <CardTitle className="text-white">Onboarding queue</CardTitle>
        <CardDescription className="text-slate-400">A starter surface for launch tasks, setup state, and operational readiness.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {onboardingTasks.map((task) => (
          <div key={task.title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-white">{task.title}</p>
                <p className="mt-2 text-sm text-slate-400">
                  {task.owner} • ETA {task.eta}
                </p>
              </div>
              <Badge className={statusToneMap[task.status]}>{task.status}</Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
