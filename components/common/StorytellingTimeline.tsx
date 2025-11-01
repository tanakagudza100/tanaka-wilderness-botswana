"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timelineStories = [
  {
    title: "Every journey begins at dawn",
    description: "As the first light breaks over the Okavango Delta, the wilderness awakens. Lions return from their hunt, elephants gather at waterholes, and the symphony of nature begins anew.",
    image: "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool+(1)/Images/Wilderness+King+s+Pool.jpg",
  },
  {
    title: "Where luxury meets the wild",
    description: "Our camps blend seamlessly into their surroundings, offering unparalleled comfort without compromising the authentic safari experience. Every detail is crafted for your journey.",
    image: "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool+(1)/Images/KingsP.activities2.jpg",
  },
  {
    title: "Guided by expert trackers",
    description: "Our guides are more than experts—they're storytellers, conservationists, and your connection to the soul of Africa. Their knowledge transforms every moment into discovery.",
    image: "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool+(1)/Images/wilderness-safari-kingspool-botswana-0450.jpg",
  },
  {
    title: "Conservation is our legacy",
    description: "Every safari supports wildlife protection and community development. Your adventure helps preserve these pristine wilderness areas for generations to come.",
    image: "https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool+(1)/Images/kingspool-e-1.jpg",
  },
];

function TimelineItem({ story, index }: { story: typeof timelineStories[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center mb-20 lg:mb-32`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full lg:w-1/2 relative group"
      >
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Decorative element */}
        <div className={`absolute -z-10 w-full h-full ${isEven ? "-right-6" : "-left-6"} top-6 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-2xl blur-xl`} />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full lg:w-1/2 text-center lg:text-left"
      >
        <div className="inline-block mb-4">
          <span className="text-6xl sm:text-7xl font-serif text-amber-600/20">0{index + 1}</span>
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-amber-100 mb-4 leading-tight">
          {story.title}
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mb-6 mx-auto lg:mx-0" />
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
          {story.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function StorytellingTimeline() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-amber-100 mb-6">
            Your Safari Story
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Discover what makes Wilderness Botswana an unforgettable experience
          </p>
        </motion.div>

        {/* Timeline Items */}
        <div className="relative">
          {/* Vertical line (hidden on mobile) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600/50 via-amber-500/30 to-transparent -translate-x-1/2" />

          {timelineStories.map((story, index) => (
            <TimelineItem key={index} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
