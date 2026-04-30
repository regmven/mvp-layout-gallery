import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { opportunities } from "@/data/dashboard-data";

export function PipelineTab() {
  return (
    <Card className="mt-6 border-white/10 bg-white/[0.04] py-0 text-white ring-0">
      <CardHeader>
        <CardTitle className="text-white">Revenue opportunities</CardTitle>
        <CardDescription className="text-slate-400">
          Example table block for SaaS, services, operations, or deal pipelines.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-transparent">
              <TableHead className="text-slate-400">Account</TableHead>
              <TableHead className="text-slate-400">Stage</TableHead>
              <TableHead className="text-slate-400">Owner</TableHead>
              <TableHead className="text-right text-slate-400">Potential ARR</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {opportunities.map((row) => (
              <TableRow key={row.name} className="border-white/10 hover:bg-white/5">
                <TableCell className="font-medium text-white">{row.name}</TableCell>
                <TableCell className="text-slate-300">{row.stage}</TableCell>
                <TableCell className="text-slate-300">{row.owner}</TableCell>
                <TableCell className="text-right text-white">{row.arr}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
