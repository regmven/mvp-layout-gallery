import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { pipeline } from "@/data/dashboard-data";

export function PipelinePanel() {
  return (
    <Card className="border-white/10 bg-[#0d1b2f]/90 py-0 text-white shadow-2xl shadow-fuchsia-950/20">
      <CardContent className="p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">Pipeline snapshot</p>
            <h2 className="mt-1 text-xl font-semibold text-white">Executive overview</h2>
          </div>
          <Badge className="bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-400/20">updated now</Badge>
        </div>

        <div className="mt-8 space-y-5">
          {pipeline.map((item) => (
            <div key={item.name}>
              <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                <span>{item.name}</span>
                <span>{item.value}</span>
              </div>
              <div className="h-3 rounded-full bg-white/8">
                <div className={`h-3 rounded-full bg-gradient-to-r ${item.colors}`} style={{ width: item.width }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <Card className="border-white/10 bg-black/20 py-0 text-white ring-0">
            <CardContent className="p-4">
              <p className="text-sm text-slate-400">Forecast confidence</p>
              <p className="mt-2 text-2xl font-semibold">92%</p>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-black/20 py-0 text-white ring-0">
            <CardContent className="p-4">
              <p className="text-sm text-slate-400">Net retention</p>
              <p className="mt-2 text-2xl font-semibold">118%</p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
