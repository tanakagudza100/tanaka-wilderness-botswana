"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageCarousel from "@/components/common/ImageCarousel";
import BookingForm from "@/components/booking/BookingForm";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Star, 
  Users, 
  Wifi, 
  Coffee, 
  Utensils,
  Bed,
  Droplets,
  Trees,
  Binoculars,
  Camera,
  Heart,
  Award,
  Shield,
  Sparkles,
  ArrowLeft
} from "lucide-react";

type Camp = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  location: string;
  rating: number;
  featured?: boolean;
  images?: string[];
  story?: string;
  activities?: string[];
};

const CAMPS: Camp[] = [
  {
    id: "pelo",
    name: "Wilderness Pelo",
    description:
      "Intimate camp with prime wildlife viewing and traditional service.",
    image: "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/Wilderness+Pelo_14.jpg",
    price: 450,
    location: "Okavango Delta",
    rating: 4.8,
    featured: true,
    story: "Nestled in the heart of the Okavango Delta, Wilderness Pelo offers an intimate safari experience where water and land meet. This exclusive camp provides front-row seats to one of Africa's most spectacular wildlife theaters. Wake to the gentle sounds of the delta, where elephants wade through crystal waters and lions patrol the floodplains at dawn.",
    activities: ["Game Drives", "Mokoro Excursions", "Sunset Cruises", "Birdwatching", "Nature Walks"],
    images: [
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/Wilderness+Pelo_14.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/pelo_2015-06-33e.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/pelo_2015-06-14e.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/jao_reserve_2015-06-197e.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/jao_reserve_2015-06-199e.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/jao_reserve_2015-06-200e.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/jao_reserve_2015-06-206e.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/Wilderness+Pelo.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/Wilderness+Pelo_26.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Pelo/Images/Wilderness+Pelo_13.jpg",
    ],
  },
  {
    id: "savuti",
    name: "Wilderness Savuti",
    description: "Savuti's rich predator sightings and floodplain dynamics.",
    image:
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/Wilderness+Savuti.jpg",
    price: 550,
    location: "Savuti",
    rating: 4.9,
    featured: true,
    story: "Famous for its predator concentrations and dramatic landscapes, Wilderness Savuti sits in one of Africa's most dynamic ecosystems. Here, the ancient Savuti Channel creates a stage for nature's greatest dramas. Witness lion prides hunting in coordinated precision, hyenas patrolling at dusk, and wild dogs on the chase across open plains.",
    activities: ["Game Drives", "Predator Tracking", "Star-lit Sleep-outs", "Birdwatching", "Cultural Tours"],
    images: [
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/Wilderness+Savuti.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/1756723752182sleep-outsavuti-botswana-07-25-tc-42.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/1756723752183sleep-outsavuti-botswana-07-25-tc-37.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/1756724173303tent-savuti-botswana-07-25tc-39.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/1756724555221untamed-botswana-07-25-tc-15.JPG",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/1756817733916gamedrive-savuti-botswana-07-25-tc-62.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/Wilderness+Savuti_3.JPG",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/Wilderness+Savuti_1.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Savuti/Images/Savuti051e.jpg",
    ],
  },
  {
    id: "chitabe",
    name: "Wilderness Chitabe",
    description: "Classic big-game viewing with exclusive access.",
    image: "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/Wilderness+Chitabe_1.jpg",
    price: 500,
    location: "Chitabe",
    rating: 4.7,
    featured: false,
    story: "Set in a private concession in the eastern Okavango Delta, Wilderness Chitabe combines the best of both worlds - permanent water channels and seasonal floodplains. This classic safari destination offers exceptional big-game viewing year-round, with frequent leopard sightings and large elephant herds that traverse the landscape.",
    activities: ["Game Drives", "Guided Bush Walks", "Sundowners", "Photography Tours", "Nature Walks"],
    images: [
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/Wilderness+Chitabe_1.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/Wilderness+Chitabe_2.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/Wilderness+Chitabe_3.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/Wilderness+Chitabe_4.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/Wilderness+Chitabe_5.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/Wilderness+Chitabe.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/127_chitabe__sundowners_tcunniffe.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_Chitabe/Images/1745569748991_Chitabe-Interiors-Okavango-Botswana-04-25-S.dePina-7_resize.jpg",
    ],
  },
  {
    id: "kings-pool",
    name: "Wilderness Kings Pool",
    description: "Waterhole sightings and private-guided walks.",
    image:
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_1.jpg",
    price: 620,
    location: "Linyanti",
    rating: 4.9,
    featured: true,
    story: "Perched on the banks of the Linyanti River, Wilderness Kings Pool offers a front-row seat to one of Africa's greatest wildlife spectacles. During the dry season, massive elephant herds converge at the waterholes, creating unforgettable viewing opportunities. The camp's elevated position provides panoramic views of the floodplain, where predators and prey engage in the eternal dance of survival.",
    activities: ["Game Drives", "Waterhole Wildlife Viewing", "Spa Treatments", "Bush Breakfast", "Private Guided Walks"],
    images: [
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_1.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_2.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_3.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool/Images/11_kingspool_massage_0031.jpg",
      "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool/Images/5_kingspool_bushbreakfast_004.jpg",
    ],
  },
];

function getCamp(id: string) {
  return CAMPS.find((c) => c.id === id);
}

export default function CampPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { id } = use(params);
  const camp = getCamp(id);

  if (!camp) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Camp not found</h2>
          <p className="text-white/70 mt-2">We couldn&apos;t find that camp.</p>
          <div className="mt-4">
            <Link href="/camps" className="underline">
              Back to camps
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const amenities = [
    { icon: Wifi, label: "WiFi Available" },
    { icon: Coffee, label: "Premium Dining" },
    { icon: Utensils, label: "All Meals Included" },
    { icon: Bed, label: "Luxury Suites" },
    { icon: Droplets, label: "Private Plunge Pool" },
    { icon: Binoculars, label: "Game Drives" },
    { icon: Camera, label: "Photography Tours" },
    { icon: Trees, label: "Nature Walks" },
  ];

  const highlights = [
    { icon: Award, text: "Award-winning luxury safari camp" },
    { icon: Shield, text: "Expert guides with 15+ years experience" },
    { icon: Heart, text: "Conservation-focused operations" },
    { icon: Sparkles, text: "Exclusive wildlife encounters" },
  ];

  return (
    <>
      <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-end overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src={camp.images?.[0] || camp.image}
              alt={camp.name}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
            <Link
              href="/camps"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 sm:mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm sm:text-base">Back to Camps</span>
            </Link>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {camp.featured && (
                <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-xs sm:text-sm">
                  ⭐ Featured Camp
                </Badge>
              )}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-50 mb-4 sm:mb-6">
                {camp.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                  <span className="text-gray-200">{camp.location}</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400" />
                  <span className="text-amber-100 font-semibold">{camp.rating.toFixed(1)}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-8 sm:space-y-12">
              {/* Story Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-2xl sm:text-3xl font-serif text-amber-100">
                  Your African Sanctuary Awaits
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {camp.story || camp.description}
                  </p>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-4">
                    Experience intimate wildlife encounters guided by our expert trackers, 
                    indulge in world-class cuisine under starlit skies, and retreat to your 
                    private sanctuary where modern luxury meets authentic safari charm. 
                    This is more than a destination—it's a transformative journey into the 
                    soul of Africa.
                  </p>
                </div>
              </motion.section>

              {/* Activities Section */}
              {camp.activities && camp.activities.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 border border-amber-500/20 rounded-2xl p-6 sm:p-8"
                >
                  <h3 className="text-xl sm:text-2xl font-serif text-amber-100 mb-6">
                    Activities Available
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {camp.activities.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg border border-slate-700 hover:border-amber-500/30 transition-colors"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                          <span className="text-amber-400 text-lg">✓</span>
                        </div>
                        <span className="text-gray-300 text-sm sm:text-base">{activity}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Highlights */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-amber-500/20 rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-serif text-amber-100 mb-6">
                  Why Choose This Camp
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                        <highlight.icon className="w-5 h-5 text-amber-400" />
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base pt-2">{highlight.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Amenities */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl sm:text-2xl font-serif text-amber-100 mb-6">
                  Camp Amenities
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {amenities.map((amenity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center gap-3 p-4 bg-slate-800/30 border border-slate-700 rounded-xl hover:border-amber-500/30 transition-colors"
                    >
                      <amenity.icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
                      <span className="text-xs sm:text-sm text-gray-300 text-center">
                        {amenity.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Image Gallery */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl sm:text-2xl font-serif text-amber-100 mb-6">
                  Gallery
                </h3>
                <ImageCarousel
                  images={
                    camp.images && camp.images.length ? camp.images : [camp.image]
                  }
                  alt={camp.name}
                />
              </motion.section>

              {/* Experience Description */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-amber-900/20 to-slate-800/30 border border-amber-500/20 rounded-2xl p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-serif text-amber-100 mb-4">
                  The Safari Experience
                </h3>
                <div className="space-y-4 text-gray-300 text-sm sm:text-base">
                  <p className="leading-relaxed">
                    Begin each day with the golden light of dawn illuminating the savanna, 
                    as your expert guide leads you through landscapes teeming with life. 
                    From majestic elephants to elusive leopards, every game drive promises 
                    unforgettable encounters.
                  </p>
                  <p className="leading-relaxed">
                    Return to camp for gourmet meals crafted from the finest local and 
                    international ingredients, served in stunning settings—from intimate 
                    bush dinners to elegant poolside lunches. As evening falls, gather 
                    around the fire to share stories under a canopy of stars.
                  </p>
                  <p className="leading-relaxed">
                    Your luxury suite offers a private haven with panoramic views, 
                    premium amenities, and thoughtful touches that ensure every moment 
                    of your stay is extraordinary. This is safari reimagined—where 
                    adventure meets sophistication.
                  </p>
                </div>
              </motion.section>
            </div>

            {/* Right Column - Booking Card (Sticky) */}
            <aside className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="sticky top-24 space-y-6"
              >
                {/* Pricing Card */}
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
                  <div className="flex items-baseline justify-between mb-6">
                    <div>
                      <div className="text-3xl sm:text-4xl font-bold text-amber-400">
                        ${camp.price}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400 mt-1">
                        per person / night
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-sm font-semibold text-amber-100">
                        {camp.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-slate-700">
                      <span className="text-gray-400 text-sm">Location</span>
                      <span className="text-white font-medium text-sm">{camp.location}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-slate-700">
                      <span className="text-gray-400 text-sm">Accommodation</span>
                      <span className="text-white font-medium text-sm">Luxury Suite</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-400 text-sm">Meals</span>
                      <span className="text-white font-medium text-sm">All Inclusive</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-[1.02]"
                  >
                    Book Now
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Free cancellation up to 48 hours before arrival
                  </p>
                </div>

                {/* Contact Card */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
                  <h4 className="font-semibold text-amber-100 mb-4 text-base sm:text-lg">
                    Need Help Planning?
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4">
                    Our safari specialists are here to create your perfect African adventure.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-amber-500/30 text-amber-100 hover:bg-amber-500/10 hover:border-amber-500/50 transition-colors"
                  >
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            </aside>
          </div>
        </main>

        <Footer />
      </div>

      {/* Booking Form Modal */}
      <BookingForm
        campName={camp.name}
        campPrice={camp.price}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
