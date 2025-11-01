"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function FloatingNature() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random floating particles (leaves/nature elements)
    const newParticles: Particle[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      size: 20 + Math.random() * 30,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute opacity-20"
          style={{
            left: `${particle.left}%`,
            top: "-10%",
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(particle.id) * 50],
            rotate: [0, 360],
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Leaf SVG */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M12 2C12 2 7 6 7 12C7 15.866 9.134 19 12 19C14.866 19 17 15.866 17 12C17 6 12 2 12 2Z"
              fill="#c58b62"
              opacity="0.6"
            />
            <path
              d="M12 2C12 2 14 4 16 8C17 10 17.5 11.5 17 12C16.5 12.5 15 12 13 11C11 10 12 2 12 2Z"
              fill="#a16207"
              opacity="0.4"
            />
          </svg>
        </motion.div>
      ))}

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-800/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
    </div>
  );
}
