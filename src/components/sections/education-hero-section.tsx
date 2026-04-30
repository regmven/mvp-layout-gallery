import { ArrowUpRight, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export function EducationHeroSection() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <Card className="theme-panel-strong border py-0 backdrop-blur">
        <CardContent className="p-7 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="theme-pill-active rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]">
              Education launch
            </span>
            <span className="theme-pill-inactive rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em]">
              Curriculum + outcomes + offer
            </span>
          </div>

          <div className="mt-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--theme-accent-cyan)" }}>
              Practical learning surfaces
            </p>
            <h1 className="theme-text mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Launch education MVPs that feel like a real program, not a repainted dashboard.
            </h1>
            <p className="theme-text-soft mt-5 max-w-2xl text-base leading-7 sm:text-lg">
              This archetype is built for curriculum-led offers, outcomes, modules, instructor trust, and course conversion momentum.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button render={<Link href="/app" />} className="theme-button-primary h-11 rounded-full px-5 text-sm font-semibold">
              {siteConfig.primaryCta}
            </Button>
            <Button render={<Link href="/theme-preview" />} variant="outline" className="theme-button-secondary h-11 rounded-full border px-5 text-sm font-semibold">
              {siteConfig.secondaryCta}
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        <Card className="theme-panel border py-0 backdrop-blur">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="theme-surface-muted flex size-12 items-center justify-center rounded-2xl border">
                <BookOpen className="size-5" style={{ color: "var(--theme-accent-cyan)" }} />
              </div>
              <div>
                <p className="theme-text text-lg font-semibold">Curriculum clarity</p>
                <p className="theme-text-muted text-sm">Modules, lessons, and progression are visible immediately.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="theme-panel border py-0 backdrop-blur">
          <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
            {[
              { icon: GraduationCap, label: "Outcome-led path", value: "6 modules" },
              { icon: Sparkles, label: "Hands-on assets", value: "58 prompts" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="theme-surface-muted rounded-3xl border p-5">
                  <Icon className="size-5" style={{ color: "var(--theme-accent-violet)" }} />
                  <p className="theme-text mt-4 text-sm">{item.label}</p>
                  <p className="theme-text mt-2 text-2xl font-semibold">{item.value}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
