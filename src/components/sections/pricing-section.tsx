import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingTiers } from "@/data/dashboard-data";

export function PricingSection() {
  return (
    <section className="grid gap-6 lg:grid-cols-3">
      {pricingTiers.map((tier) => (
        <Card
          key={tier.name}
          className={`py-0 text-white ${
            tier.highlighted
              ? "border-cyan-300/30 bg-gradient-to-b from-cyan-400/10 to-violet-400/10 shadow-2xl shadow-cyan-950/20"
              : "border-white/10 bg-white/[0.04]"
          }`}
        >
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <CardTitle className="text-white">{tier.name}</CardTitle>
              {tier.highlighted ? <Badge className="bg-cyan-400/12 text-cyan-200 ring-1 ring-cyan-400/20">Recommended</Badge> : null}
            </div>
            <CardDescription className="text-slate-400">{tier.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-semibold text-white">{tier.price}</p>
            <div className="mt-6 space-y-3">
              {tier.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-2xl bg-black/20 px-4 py-3 text-sm text-slate-300">
                  <Check className="mt-0.5 size-4 text-emerald-300" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
