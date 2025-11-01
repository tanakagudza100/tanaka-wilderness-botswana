// components/HeroSection.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />

      {/* Glowing Orbs */}
      <div
        className="absolute w-96 h-96 rounded-full bg-[#c58b62]/30 blur-[120px] animate-pulse"
        style={{
          top: "20%",
          left: "10%",
          animationDuration: "4s",
        }}
      />
      <div
        className="absolute w-96 h-96 rounded-full bg-[#7a3e1a]/30 blur-[120px] animate-pulse"
        style={{
          bottom: "20%",
          right: "10%",
          animationDuration: "6s",
        }}
      />

      {/* Mouse Follow Light */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-[#d9a97f]/10 blur-[100px] pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 shadow-[0_0_30px_rgba(197,139,98,0.2)]">
          <Sparkles className="w-4 h-4 text-[#d9a97f]" />
          <span className="text-sm text-white/80">Discover Wild Africa</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-[#f3e6d8] to-[#e8d2bf] bg-clip-text text-transparent">
            Experience the
          </span>
          <br />
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#c58b62]/50 to-[#7a3e1a]/50 blur-2xl" />
            <span className="relative bg-gradient-to-r from-[#d9a97f] to-[#7a3e1a] bg-clip-text text-transparent">
              Untamed Wilderness
            </span>
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Journey through Botswana&apos;s pristine landscapes. Where adventure
          meets luxury in Africa&apos;s last Eden.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/about?play=1">
            <Button
              size="lg"
              className="relative group overflow-hidden bg-gradient-to-r from-[#c58b62] to-[#7a3e1a] hover:from-[#a66d49] hover:to-[#5a2e12] transition-all duration-300 text-lg px-8 py-6 shadow-[0_0_40px_rgba(197,139,98,0.4)] hover:shadow-[0_0_60px_rgba(197,139,98,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                About — What is Wilderness Botswana?
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5a2e12] to-[#c58b62] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </Link>
          <Link href="/activities">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white hover:text-white transition-all duration-300 hover:border-[#d9a97f]/50 hover:shadow-[0_0_20px_rgba(197,139,98,0.3)]"
            >
              View Activities
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { value: "50+", label: "Safari Tours" },
            { value: "15+", label: "Luxury Properties" },
            { value: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div
              key={i}
              className="relative group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#d9a97f]/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c58b62]/10 to-[#7a3e1a]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#d9a97f] to-[#7a3e1a] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}
