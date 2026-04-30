import Link from "next/link";

import { AuthPageShell } from "@/components/auth/auth-page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ForgotPasswordPage() {
  return (
    <AuthPageShell
      title="Password recovery placeholder"
      description="This route exists so future auth providers can plug into a predictable application structure."
    >
      <Card className="border-white/10 bg-black/20 py-0 text-white">
        <CardHeader>
          <CardTitle className="text-white">Reset access</CardTitle>
          <CardDescription className="text-slate-400">Use this screen later for password reset, magic links, or invite recovery.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">Email input placeholder</div>
          <Button className="w-full justify-center bg-white text-slate-950 hover:bg-cyan-100">Send recovery link</Button>
          <Button render={<Link href="/sign-in" />} variant="ghost" className="w-full justify-center text-slate-300 hover:text-white">
            Back to sign in
          </Button>
        </CardContent>
      </Card>
    </AuthPageShell>
  );
}
