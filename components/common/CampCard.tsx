"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";

interface Camp {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  location: string;
  rating: number;
  featured?: boolean;
}

export default function CampCard({
  id,
  name,
  description,
  image,
  price,
  location,
  rating,
  featured = false,
}: Camp) {
  const [hasError, setHasError] = useState(false);

  return (
    <Link href={`/camps/${id}`} className="block h-full">
      <Card className="group overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 bg-gradient-to-br from-slate-900/80 to-slate-800/60 border-white/10 hover:border-amber-500/30 backdrop-blur-sm h-full flex flex-col">
        {featured && (
          <Badge className="absolute top-4 left-4 z-20 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold shadow-lg">
            ⭐ Featured
          </Badge>
        )}
        
        <div className="relative h-64 md:h-72 w-full bg-slate-800 overflow-hidden">
          {/* Gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* animated panning blurred background for live feel */}
          <div
            className="absolute inset-0 bg-center filter blur-md opacity-40 scale-110 pan-bg"
            style={{
              backgroundImage: `url(${
                hasError ? "/images/wilderness-placeholder.svg" : image
              })`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          
          <Image
            src={hasError ? "/images/wilderness-placeholder.svg" : image}
            alt={name}
            fill
            className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={featured}
            onError={() => setHasError(true)}
          />
        </div>

        <div className="p-5 md:p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-serif font-bold text-amber-50 mb-2 group-hover:text-amber-200 transition-colors">
              {name}
            </h3>
            
            <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium">{location}</span>
            </div>
            
            <p className="text-gray-300 text-sm line-clamp-2 mb-4 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="space-y-4 mt-auto">
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl md:text-2xl font-bold text-amber-400">${price}</span>
                  <span className="text-xs text-gray-400">USD</span>
                </div>
                <span className="text-xs text-gray-500">per person/night</span>
              </div>
              
              <div className="flex items-center gap-1.5 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-sm text-amber-100 font-semibold">{rating.toFixed(1)}</span>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-sm font-semibold py-5 rounded-lg shadow-lg hover:shadow-amber-500/30 transition-all duration-300 group-hover:scale-[1.02]">
              Explore Camp
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
}
