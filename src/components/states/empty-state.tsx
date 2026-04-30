import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <Card className="border-white/10 bg-white/[0.04] py-0 text-white">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-slate-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-3xl border border-dashed border-white/10 bg-black/20 px-5 py-8 text-sm text-slate-400">
          Replace this placeholder with a project-specific empty state, first-run experience, or data onboarding flow.
        </div>
      </CardContent>
    </Card>
  );
}
