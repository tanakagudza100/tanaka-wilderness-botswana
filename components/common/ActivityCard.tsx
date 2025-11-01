"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface ActivityCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function ActivityCard({
  title,
  description,
  imageUrl,
}: ActivityCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 border border-white/10 hover:border-amber-500/30 transition-all duration-500 h-full flex flex-col"
    >
      <div className="relative h-64 md:h-72 w-full overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />
        
        {/* Animated background blur */}
        <motion.div
          className="absolute inset-0 bg-center filter blur-sm opacity-30 scale-110"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            scale: isHovered ? 1.15 : 1.1,
          }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Main image */}
        <motion.div
          className="relative w-full h-full"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Hover overlay with icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-amber-600/20 backdrop-blur-[2px] z-20 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: isHovered ? 1 : 0.8, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-amber-500/90 rounded-full p-4"
          >
            <Calendar className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
      </div>

      <div className="p-6 md:p-7 flex-1 flex flex-col">
        <div className="flex-1">
          <motion.h3 
            className="font-serif text-xl md:text-2xl text-amber-100 mb-3 group-hover:text-amber-200 transition-colors"
            animate={{
              x: isHovered ? 4 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          
          <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <motion.div
          animate={{
            y: isHovered ? -4 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <Button
            className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-sm font-semibold py-5 rounded-lg shadow-lg hover:shadow-amber-500/40 transition-all duration-300 group/btn"
          >
            <span>Book This Experience</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
