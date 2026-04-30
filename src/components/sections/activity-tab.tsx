import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { activity } from "@/data/dashboard-data";

export function ActivityTab() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {activity.map((item) => (
        <Card key={item.title} className="border-white/10 bg-white/[0.04] py-0 text-white ring-0">
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="mt-2 text-xs text-slate-400">
                  {item.source} • {item.time}
                </p>
              </div>
              <Badge variant="outline" className="border-white/10 bg-white/5 text-slate-300">
                {item.status}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
