"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, MapPin, Star } from "lucide-react";
import CampCard from "@/components/common/CampCard";
import FloatingNature from "@/components/common/FloatingNature";
import FeaturedCamps from "@/components/common/FeaturedCamps";
import Footer from "@/components/common/Footer";

interface CampItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  location: string;
  rating: number;
  featured?: boolean;
  images?: string[];
}

const CAMPS: CampItem[] = [
  {
    id: "pelo",
    name: "Wilderness Pelo",
    description:
      "Intimate camp with prime wildlife viewing and traditional service.",
    // first image will be used as the card thumbnail
    image:
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/Wilderness+Pelo_14.jpg`,
    price: 450,
    location: "Okavango Delta",
    rating: 4.8,
    featured: true,
    images: [
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/Wilderness+Pelo_14.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/pelo_2015-06-33e.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/pelo_2015-06-14e.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/jao_reserve_2015-06-197e.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/jao_reserve_2015-06-199e.jpg`,
    ],
  },
  {
    id: "savuti",
    name: "Wilderness Savuti",
    description: "Savuti's rich predator sightings and floodplain dynamics.",
    image:
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Savuti/Images/Wilderness+Savuti.jpg`,
    price: 550,
    location: "Savuti",
    rating: 4.9,
    featured: true,
    images: [
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Savuti/Images/1756723752182sleep-outsavuti-botswana-07-25-tc-42.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Savuti/Images/1756723752183sleep-outsavuti-botswana-07-25-tc-37.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Savuti/Images/1756724173303tent-savuti-botswana-07-25tc-39.jpg`,
    ],
  },
  {
    id: "chitabe",
    name: "Wilderness Chitabe",
    description: "Classic big-game viewing with exclusive access.",
    image:
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Chitabe/Images/Wilderness+Chitabe_1.jpg`,
    price: 500,
    location: "Chitabe",
    rating: 4.7,
    featured: false,
    images: [
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Chitabe/Images/Wilderness+Chitabe_1.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Chitabe/Images/Wilderness+Chitabe_2.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Chitabe/Images/Wilderness+Chitabe_3.jpg`,
    ],
  },
  {
    id: "kings-pool",
    name: "Wilderness Kings Pool",
    description: "Waterhole sightings and private-guided walks.",
    // first gallery image used as card thumbnail
    image:
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_1.jpg`,
    price: 620,
    location: "Linyanti",
    rating: 4.9,
    featured: true,
    images: [
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_1.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_2.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_3.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_King_s_Pool/Images/11_kingspool_massage_0031.jpg`,
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_King_s_Pool/Images/5_kingspool_bushbreakfast_004.jpg`,
    ],
  },
];

export default function CampsPage() {
  const featuredCamps = CAMPS.filter((c) => c.featured);

  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen overflow-hidden">
      <FloatingNature />
      <div className="relative z-10">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/Wilderness+Pelo_14.jpg`}
            alt="Wilderness Camps"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <Award className="w-16 h-16 mx-auto text-amber-400 mb-4" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-amber-50 mb-6 tracking-wide"
          >
            Wilderness Camps
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Each Wilderness camp offers an authentic safari experience rooted in
            conservation and world-class guiding. Discover luxury in the heart of Africa&apos;s untamed wilderness.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 flex flex-wrap justify-center gap-8 text-sm md:text-base"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span className="text-gray-300">4 Exclusive Locations</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400" />
              <span className="text-gray-300">Award-Winning Service</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Camps Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-amber-100 mb-3">
              Featured Camps
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              Experience our most sought-after destinations, each offering unique wildlife encounters and unparalleled luxury
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredCamps.map((camp, index) => {
              const thumb =
                camp.images && camp.images.length ? camp.images[0] : camp.image;
              return (
                <motion.div
                  key={camp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <CampCard {...camp} image={thumb} />
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* All Camps Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-amber-100 mb-3">
              All Camps
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              Browse our complete collection of wilderness camps across Botswana&apos;s most pristine regions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CAMPS.map((camp, index) => {
              const thumb =
                camp.images && camp.images.length ? camp.images[0] : camp.image;
              return (
                <motion.div
                  key={camp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <CampCard {...camp} image={thumb} />
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 py-16 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">4.8+</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">10K+</div>
              <div className="text-sm text-gray-400">Happy Guests</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">25+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>
        </motion.section>
      </main>
      </div>
    </div>
  );
}
