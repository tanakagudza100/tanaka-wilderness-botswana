"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FloatingNature from "@/components/common/FloatingNature";
import ActivityBookingModal from "@/components/booking/ActivityBookingModal";
import { Compass, Calendar } from "lucide-react";

const activities = [
  {
    title: "Boating Safaris",
    description:
      "Glide through Botswana's still waters surrounded by hippos and elephants. Experience the delta from a unique aquatic perspective.",
    imageUrl:
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/jao_reserve_2015-06-197e.jpg`,
    icon: "🚤",
  },
  {
    title: "Guided Nature Walks",
    description:
      "Follow expert trackers into the wild, step by step. Learn to read animal signs and discover the smaller wonders of the bush.",
    imageUrl:
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Savuti/Images/1756723752182sleep-outsavuti-botswana-07-25-tc-42.jpg`,
    icon: "🥾",
  },
  {
    title: "Fishing Adventures",
    description:
      "Cast your line in the Okavango's sparkling lagoons. Target the legendary tigerfish in pristine wilderness waters.",
    imageUrl:
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/pelo_2015-06-33e.jpg`,
    icon: "🎣",
  },
  {
    title: "Mokoro Excursions",
    description:
      "Sail silently through reed-lined waterways in traditional canoes. Discover hidden channels and intimate wildlife encounters.",
    imageUrl:
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/pelo_2015-06-14e.jpg`,
    icon: "🛶",
  },
  {
    title: "Game Drives",
    description:
      "Venture into the heart of the wilderness in open 4x4 vehicles. Track lions, leopards, and elephants with expert guides.",
    imageUrl:
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Chitabe/Images/Wilderness+Chitabe_2.jpg`,
    icon: "🦁",
  },
  {
    title: "Bird Watching",
    description:
      "Discover over 400 bird species in their natural habitat. From fish eagles to lilac-breasted rollers, every moment is spectacular.",
    imageUrl:
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Chitabe/Images/Wilderness+Chitabe_3.jpg`,
    icon: "🦅",
  },
  {
    title: "Sundowner Cruises",
    description:
      "Toast to the African sunset as the sky ignites in brilliant hues. Enjoy drinks and snacks as wildlife gathers at the water's edge.",
    imageUrl:
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_King_s_Pool/Images/5_kingspool_bushbreakfast_004.jpg`,
    icon: "🌅",
  },
  {
    title: "Cultural Encounters",
    description:
      "Meet local communities, learn traditional crafts, and enjoy authentic cultural performances. Connect with Botswana's rich heritage.",
    imageUrl:
      `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_3.jpg`,
    icon: "🎭",
  },
];

export default function ActivitiesPage() {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = (activityTitle: string) => {
    setSelectedActivity(activityTitle);
    setIsBookingModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <FloatingNature />
      <div className="relative z-10">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool+(1)/Images/wilderness-safari-kingspool-botswana-0450.jpg"
            alt="Wilderness Activities"
            fill
            className="object-cover brightness-[0.4]"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-6xl mb-6"
          >
            <Compass className="w-16 h-16 mx-auto text-amber-400" />
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-amber-50 mb-6 tracking-wide"
          >
            Activities
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Discover unforgettable experiences in the heart of Botswana&apos;s wilderness
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 text-amber-400 text-xs md:text-sm"
          >
            8 Unique Experiences • Expert Guides • Unforgettable Memories
          </motion.div>
        </div>
      </motion.section>

      {/* Activities Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-serif text-amber-100 mb-3">
            Curated Experiences
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Each activity is carefully designed to immerse you in the natural beauty and wildlife of Botswana
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={activity.imageUrl}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-amber-600/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {activity.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl md:text-2xl text-amber-100 mb-3 group-hover:text-amber-200 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {activity.description}
                </p>

                {/* Book Now Button */}
                <button
                  onClick={() => handleBookNow(activity.title)}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-sm font-semibold py-3 rounded-lg shadow-lg hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <Calendar className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  Book Now
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-800/0 group-hover:from-amber-600/5 group-hover:to-amber-800/5 pointer-events-none transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-500/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-serif text-amber-100 mb-3">
              Ready for Your Adventure?
            </h3>
            <p className="text-sm md:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact our team to create a personalized itinerary that combines your favorite activities
            </p>
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold px-6 py-3 text-sm rounded-lg shadow-lg hover:shadow-amber-500/40 transition-all duration-300">
              Plan Your Safari
            </button>
          </div>
        </motion.div>
      </section>
      </div>

      {/* Booking Modal */}
      {selectedActivity && (
        <ActivityBookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          activityName={selectedActivity}
        />
      )}
    </main>
  );
}
