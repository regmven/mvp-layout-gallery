import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { integrations, testimonials } from "@/data/dashboard-data";

export function IntegrationsSection() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="border-white/10 bg-white/[0.04] py-0 text-white">
        <CardHeader>
          <CardTitle className="text-white">Starter-ready integrations</CardTitle>
          <CardDescription className="text-slate-400">
            Common product building blocks you can connect once the MVP moves past mock data.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          {integrations.map((item) => (
            <div key={item.name} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
              <p className="text-sm text-slate-400">{item.category}</p>
              <p className="mt-2 text-lg font-semibold text-white">{item.name}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-white/10 bg-white/[0.04] py-0 text-white">
        <CardHeader>
          <CardTitle className="text-white">Why teams keep this shell</CardTitle>
          <CardDescription className="text-slate-400">Premium enough for demos, modular enough for real builds.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm leading-7 text-slate-200">“{item.quote}”</p>
              <div className="mt-4">
                <p className="font-medium text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
