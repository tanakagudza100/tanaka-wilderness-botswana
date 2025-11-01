// components/TourCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Star, ArrowRight } from "lucide-react";

interface TourCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  duration: string;
  location: string;
  capacity: number;
  rating: number;
  featured?: boolean;
}

export default function TourCard({
  id,
  title,
  description,
  imageUrl,
  price,
  duration,
  location,
  capacity,
  rating,
  featured = false,
}: TourCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/tours/${id}`}>
      <Card
        className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-sm border-white/10 hover:border-[rgba(197,139,98,0.5)] transition-all duration-500 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

        {/* Featured Badge */}
        {featured && (
          <Badge className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 border-0 shadow-[0_0_20px_rgba(234,179,8,0.5)]">
            Featured
          </Badge>
        )}

        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />

          <Image
            src={imageUrl}
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />

          {/* Floating Price Tag */}
          <div className="absolute top-4 right-4 z-20 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <div className="text-sm text-white/70">From</div>
            <div className="text-xl font-bold text-white">
              ${price.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 space-y-4">
          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-600"
                }`}
              />
            ))}
            <span className="text-sm text-white/60 ml-2">
              {rating.toFixed(1)}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white group-hover:text-[var(--accent)] transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/70 line-clamp-2">{description}</p>

          {/* Details Grid */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-white/60">
              <MapPin className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-sm">{location}</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Clock className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-sm">{duration}</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Users className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-sm">{capacity}</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="w-full bg-gradient-to-r from-[rgba(161,98,7,0.08)] to-[rgba(122,62,26,0.08)] hover:from-[var(--accent)] hover:to-[var(--primary)] border border-[rgba(197,139,98,0.25)] text-white transition-all duration-300 group/btn shadow-[0_0_20px_rgba(197,139,98,0.12)] hover:shadow-[0_0_30px_rgba(197,139,98,0.26)]">
            <span className="flex items-center justify-center gap-2">
              View Details
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent animate-[shimmer_2s_infinite]" />
        </div>
      </Card>
    </Link>
  );
}
