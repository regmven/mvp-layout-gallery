"use client";

import dynamic from "next/dynamic";
import { ArrowUpRight, CircleAlert, Zap } from "lucide-react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { statuses, trendData } from "@/data/dashboard-data";

const ResponsiveContainer = dynamic(
  () => import("recharts").then((mod) => mod.ResponsiveContainer),
  { ssr: false }
);

export function OverviewTab() {
  return (
    <div className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
      <Card className="border-white/10 bg-white/[0.04] py-0 text-white ring-0">
        <CardHeader>
          <CardTitle className="text-xl text-white">ARR growth vs efficiency</CardTitle>
          <CardDescription className="text-slate-400">
            Elegant mock analytics ready to swap for real business data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="revenueFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#67e8f9" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#67e8f9" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="efficiencyFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#c084fc" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#c084fc" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#08111f",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "16px",
                    color: "#fff",
                  }}
                />
                <Area type="monotone" dataKey="efficiency" stroke="#c084fc" fill="url(#efficiencyFill)" strokeWidth={2} />
                <Area type="monotone" dataKey="revenue" stroke="#67e8f9" fill="url(#revenueFill)" strokeWidth={2.5} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="border-white/10 bg-white/[0.04] py-0 text-white ring-0">
          <CardHeader>
            <CardTitle className="text-white">System status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {statuses.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-2xl bg-black/20 px-4 py-3">
                <span className="text-sm text-slate-300">{item.label}</span>
                <span className="text-sm font-medium text-white">{item.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/[0.04] py-0 text-white ring-0">
          <CardHeader>
            <CardTitle className="text-white">Launch checklist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-300">
            <div className="flex items-center gap-3 rounded-2xl bg-black/20 px-4 py-3">
              <Zap className="size-4 text-cyan-300" />
              Replace mock data with typed API adapters
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-black/20 px-4 py-3">
              <ArrowUpRight className="size-4 text-emerald-300" />
              Connect auth and per-role dashboard views
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-black/20 px-4 py-3">
              <CircleAlert className="size-4 text-amber-300" />
              Add onboarding, settings, and billing surfaces
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
