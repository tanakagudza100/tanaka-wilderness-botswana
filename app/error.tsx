"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-white font-bold text-4xl">!</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-amber-100 mb-4">
            Oops! Something Went Wrong
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            We encountered an unexpected error. Don't worry, our team has been notified.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-amber-500/30 hover:border-amber-500/50 transition-all duration-200"
          >
            Return Home
          </Link>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
            <p className="text-sm text-red-300 font-mono">{error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
