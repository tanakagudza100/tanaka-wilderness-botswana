// app/signin/page.tsx
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, Lock, Sparkles, ArrowRight } from "lucide-react";
// The project doesn't include a `use-toast` hook file; provide a tiny
// local fallback so the sign-in page can call `toast(...)` during
// development and typechecking. Replace with the app-wide toast once
// a shared toast hook/component exists.
const useToast = () => {
  return {
    toast: ({
      title,
      description,
      variant,
    }: {
      title?: string;
      description?: string;
      variant?: string;
    }) => {
      if (typeof window !== "undefined") {
        // Minimal UX fallback for now
        // eslint-disable-next-line no-alert
        window.alert(`${title ? title + "\n" : ""}${description ?? ""}`);
      } else {
        // server-side noop
        console.log("toast:", title, description, variant);
      }
    },
  };
};

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast({
          title: "Error",
          description: "Invalid credentials. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Welcome back!",
        });
        router.push("/profile");
      }
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/30 blur-[120px] top-0 left-0 animate-pulse" />
      <div className="absolute w-96 h-96 rounded-full bg-blue-500/30 blur-[120px] bottom-0 right-0 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-4">
        {/* Back to Home Link */}
        <Link
          href="/"
          className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors"
        >
          <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
          Back to Home
        </Link>

        <Card className="relative overflow-hidden bg-slate-900/50 backdrop-blur-xl border-white/10 shadow-2xl">
          {/* Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-xl" />

          <div className="relative p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-4">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400">Welcome Back</span>
              </div>
              <h1 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  Sign In
                </span>
              </h1>
              <p className="text-white/60">
                Continue your wilderness adventure
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/80">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-11 h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:ring-cyan-400/20"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white/80">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-11 h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:ring-cyan-400/20"
                  />
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <Link
                  href="/forgot-password"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] disabled:opacity-50"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-slate-900 text-white/60">Or</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-white/60">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
