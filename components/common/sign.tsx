// app/signin/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to Auth0 login
    router.push("/auth/login");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <div className="text-white text-center">
        <p className="text-xl">Redirecting to login...</p>
      </div>
    </div>
  );
}
