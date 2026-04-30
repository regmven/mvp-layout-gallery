import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SettingsFormCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function SettingsFormCard({ title, description, children }: SettingsFormCardProps) {
  return (
    <Card className="border-white/10 bg-white/[0.04] py-0 text-white">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-slate-400">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
}
