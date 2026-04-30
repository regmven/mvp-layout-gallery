import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LAYOUT_PRESETS, RECOMMENDED_LAYOUT_KEYS } from "@/data/layouts";

export default function LayoutShowcaseIndexPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-700">20 layout systems</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Un MVP visual para escoger geometría real, no solo theme o archetype.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Cada página muestra un layout distinto aplicado a una misma marca de referencia tipo hospitality/lifestyle, para que puedas comparar cómo cambia la experiencia según la estructura.
          </p>
        </div>

        <div className="mt-8 rounded-[32px] border border-amber-200 bg-amber-50/70 p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-700">My current recommendation for Condado</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {RECOMMENDED_LAYOUT_KEYS.map((key) => {
              const layout = LAYOUT_PRESETS.find((item) => item.key === key)!;
              return (
                <Link key={layout.key} href={`/layout-showcase/${layout.slug}`} className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-amber-50">
                  {layout.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {LAYOUT_PRESETS.map((layout, index) => (
            <Card key={layout.key} className="border border-slate-200 bg-white py-0 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs uppercase tracking-[0.25em] text-slate-500">Layout {String(index + 1).padStart(2, "0")}</span>
                  {layout.recommendation ? (
                    <span className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.18em] ${layout.recommendation === "strong" ? "bg-cyan-100 text-cyan-900" : "bg-slate-100 text-slate-700"}`}>
                      {layout.recommendation}
                    </span>
                  ) : null}
                </div>
                <CardTitle className="text-xl text-slate-950">{layout.label}</CardTitle>
                <CardDescription className="text-slate-600">{layout.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FCFF_100%)] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-700">Best for</p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{layout.bestFor}</p>
                </div>
                <Link href={`/layout-showcase/${layout.slug}`} className="mt-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
                  View layout
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
