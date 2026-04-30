import Link from "next/link";

import { AuthPageShell } from "@/components/auth/auth-page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockAuthAdapter } from "@/lib/adapters/mock-adapters";

export default function SignInPage() {
  return (
    <AuthPageShell
      title="Sign in placeholder"
      description="A provider-agnostic auth entry point. Replace this with Clerk, Supabase, Auth.js, or a custom adapter later."
    >
      <Card className="border-white/10 bg-black/20 py-0 text-white">
        <CardHeader>
          <CardTitle className="text-white">Authentication adapter</CardTitle>
          <CardDescription className="text-slate-400">Current provider: {mockAuthAdapter.provider}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button render={<Link href="/app" />} className="w-full justify-center bg-white text-slate-950 hover:bg-cyan-100">
            Continue to app shell
          </Button>
          <Button render={<Link href={mockAuthAdapter.signUpPath} />} variant="outline" className="w-full justify-center border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
            Go to sign up
          </Button>
          <Button render={<Link href={mockAuthAdapter.forgotPasswordPath} />} variant="ghost" className="w-full justify-center text-slate-300 hover:text-white">
            Forgot password
          </Button>
        </CardContent>
      </Card>
    </AuthPageShell>
  );
}
