import { Card, CardContent } from "@/components/ui/card";
import { featureCallouts } from "@/data/dashboard-data";

export function ValuePropsSection() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {featureCallouts.map((item) => (
        <Card key={item.title} className="border-white/10 bg-white/[0.04] py-0 text-white backdrop-blur">
          <CardContent className="p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">{item.metric}</p>
            <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
