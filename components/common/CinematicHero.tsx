"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export default function CinematicHero() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <Image
          src="https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool+(1)/Images/Wilderness+King+s+Pool.jpg"
          alt="Wilderness Botswana - King's Pool"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Animated overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        {/* Animated particles/dust effect */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-amber-50 mb-4 tracking-wide">
              Wilderness Botswana
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6" />
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-amber-100 mb-4 font-light tracking-wide"
          >
            Discover the Soul of the Safari
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light"
          >
            Experience adventure, luxury, and the wild, reimagined
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              href="/activities"
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold rounded-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Activities
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/plan-safari"
              className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-amber-400/50 hover:border-amber-300 shadow-xl transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Plan Your Safari
              </span>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-amber-200"
            >
              <span className="text-sm font-light tracking-widest">SCROLL</span>
              <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-amber-400 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sound Control */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-8 right-8 z-20 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-amber-400/30 hover:border-amber-300 transition-all duration-300 group"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-amber-200 group-hover:text-amber-100" />
        ) : (
          <Volume2 className="w-5 h-5 text-amber-200 group-hover:text-amber-100" />
        )}
      </motion.button>
    </section>
  );
}
