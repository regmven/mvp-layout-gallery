import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { workflowSteps } from "@/data/dashboard-data";

export function WorkflowSection() {
  return (
    <Card className="border-white/10 bg-[#0b1628] py-0 text-white">
      <CardHeader className="px-6 pt-6 sm:px-8 sm:pt-8">
        <CardTitle className="text-2xl text-white">A clearer path from starter to product</CardTitle>
        <CardDescription className="max-w-2xl text-sm leading-6 text-slate-400">
          v0.4 pushes the template beyond a pretty mockup by including reusable productization surfaces for onboarding,
          pricing, integrations, and team operations.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 px-6 pb-6 sm:grid-cols-3 sm:px-8 sm:pb-8">
        {workflowSteps.map((item) => (
          <div key={item.step} className="rounded-3xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm font-medium tracking-[0.25em] text-cyan-300/80">{item.step}</p>
            <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
