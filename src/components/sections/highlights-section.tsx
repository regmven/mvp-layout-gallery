import { Card, CardContent } from "@/components/ui/card";
import { highlights, industryVariants } from "@/data/dashboard-data";

export function HighlightsSection() {
  return (
    <section className="grid gap-6 lg:grid-cols-3">
      {highlights.map((item) => {
        const Icon = item.icon;
        return (
          <Card
            key={item.title}
            className="border-white/10 bg-white/[0.04] py-0 text-white backdrop-blur"
          >
            <CardContent className="p-6">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-white/8 ring-1 ring-white/10">
                <Icon className="size-5 text-cyan-200" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </CardContent>
          </Card>
        );
      })}

      <Card className="border-white/10 bg-white/[0.04] py-0 text-white backdrop-blur lg:col-span-3">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">v0.2 structure</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Starter can now flex across industries</h3>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-400">
              The repo is now organized around reusable data and section blocks, making it easier to fork this
              starter into vertical-specific MVPs with less rewriting.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {industryVariants.map((variant) => {
              const Icon = variant.icon;
              return (
                <div key={variant.name} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-white/8 ring-1 ring-white/10">
                    <Icon className="size-5 text-violet-200" />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-white">{variant.name}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{variant.focus}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
