import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { heroBadges, kpis } from "@/data/dashboard-data";
import type { ThemePreset } from "@/data/theme-presets";

const toneClassMap: Record<string, string> = {
  emerald: "text-emerald-300",
  cyan: "text-cyan-300",
  violet: "text-violet-300",
  amber: "text-amber-300",
};

interface HeroSectionProps {
  theme: ThemePreset;
}

export function HeroSection({ theme }: HeroSectionProps) {
  return (
    <Card className="theme-panel-strong border py-0 backdrop-blur-xl">
      <CardContent className="p-7 sm:p-8">
        <div className="theme-text-soft flex flex-wrap items-center gap-3 text-sm">
          <Badge className="theme-pill-active border-0">
            Launch-ready UI system
          </Badge>
          {heroBadges.map((badge) => (
            <Badge key={badge} variant="outline" className="theme-pill-inactive border">
              {badge}
            </Badge>
          ))}
        </div>

        <div className="mt-6 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--theme-accent-cyan)" }}>{theme.hero.eyebrow}</p>
          <h1 className="theme-text mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {theme.hero.title}
          </h1>
          <p className="theme-text-soft mt-5 max-w-2xl text-base leading-7 sm:text-lg">{theme.hero.description}</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {kpis.map((item) => (
            <Card key={item.label} className="theme-surface-muted border py-0 ring-0">
              <CardContent className="p-5">
                <p className="theme-text-muted text-sm">{item.label}</p>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <p className="theme-text text-3xl font-semibold">{item.value}</p>
                  <span className={`text-sm font-medium ${toneClassMap[item.tone]}`}>{item.delta}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button render={<Link href="/app" />} className="theme-button-primary h-11 rounded-full px-5 text-sm font-semibold">
            {siteConfig.primaryCta}
          </Button>
          <Button
            render={<Link href="/theme-preview" />}
            variant="outline"
            className="theme-button-secondary h-11 rounded-full border px-5 text-sm font-semibold"
          >
            {siteConfig.secondaryCta}
            <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
