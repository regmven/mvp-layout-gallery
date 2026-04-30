import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { billingItems, teamMembers } from "@/data/dashboard-data";

export function TeamBillingPanel() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <Card className="border-white/10 bg-white/[0.04] py-0 text-white">
        <CardHeader>
          <CardTitle className="text-white">Team access</CardTitle>
          <CardDescription className="text-slate-400">Example members block for workspace permissions and roles.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-white">{member.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{member.role}</p>
                </div>
                <Badge variant="outline" className="border-white/10 bg-white/5 text-slate-300">
                  {member.access}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-white/10 bg-white/[0.04] py-0 text-white">
        <CardHeader>
          <CardTitle className="text-white">Billing snapshot</CardTitle>
          <CardDescription className="text-slate-400">Starter panel for subscriptions, renewals, and usage tracking.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {billingItems.map((item) => (
            <div key={item.plan} className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-white">{item.plan}</p>
                  <p className="mt-1 text-sm text-slate-400">Renews {item.renewal}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-white">{item.amount}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.status}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
