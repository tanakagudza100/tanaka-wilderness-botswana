// components/ToursGrid.tsx
"use client";

import { useState } from "react";
import TourCard from "./TourCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

interface Tour {
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
  category?: string;
}

interface ToursGridProps {
  tours: Tour[];
}

export default function ToursGrid({ tours }: ToursGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = ["all", "safari", "luxury", "adventure", "cultural"];

  const filteredTours = tours.filter((tour) => {
    const matchesSearch =
      tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || tour.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-4">
            <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Curated Experiences</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Explore Our Tours
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Discover unforgettable journeys through Africa&apos;s most pristine
            wilderness
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <Input
              type="text"
              placeholder="Search tours..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:ring-cyan-400/20 backdrop-blur-sm"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                variant={selectedFilter === filter ? "default" : "outline"}
                className={`relative capitalize transition-all duration-300 ${
                  selectedFilter === filter
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 border-0 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                    : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-cyan-400/50"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Tours Grid */}
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-4">
              <Filter className="w-10 h-10 text-white/30" />
            </div>
            <h3 className="text-2xl font-bold text-white/80 mb-2">
              No tours found
            </h3>
            <p className="text-white/50">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Load More Button */}
        {filteredTours.length > 0 && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              Load More Tours
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
