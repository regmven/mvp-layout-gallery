import Link from "next/link";

import { AuthPageShell } from "@/components/auth/auth-page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignUpPage() {
  return (
    <AuthPageShell
      title="Sign up placeholder"
      description="Keep auth routes in the starter without locking the repo to any specific provider too early."
    >
      <Card className="border-white/10 bg-black/20 py-0 text-white">
        <CardHeader>
          <CardTitle className="text-white">Create an account</CardTitle>
          <CardDescription className="text-slate-400">Replace this shell with your auth provider UI later.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">Name input placeholder</div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">Email input placeholder</div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">Password input placeholder</div>
          <Button render={<Link href="/sign-in" />} className="w-full justify-center bg-white text-slate-950 hover:bg-cyan-100">
            Already have an account?
          </Button>
        </CardContent>
      </Card>
    </AuthPageShell>
  );
}
