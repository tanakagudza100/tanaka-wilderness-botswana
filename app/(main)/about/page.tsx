"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FloatingNature from "@/components/common/FloatingNature";
import { Heart, Users, Leaf, Award, Shield } from "lucide-react";

const bigFive = [
  { name: "Lion", icon: "🦁", fact: "The king of the savanna, lions are social cats living in prides of up to 30 members" },
  { name: "Elephant", icon: "🐘", fact: "The largest land animal, elephants can live up to 70 years and have incredible memory" },
  { name: "Leopard", icon: "🐆", fact: "Solitary and elusive, leopards are powerful climbers and often store prey in trees" },
  { name: "Rhino", icon: "🦏", fact: "Critically endangered, rhinos are protected in Botswana's conservation areas" },
  { name: "Buffalo", icon: "🐃", fact: "Known as 'Black Death', buffalo are one of Africa's most dangerous animals" },
];

export default function AboutPage() {
  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen overflow-hidden">
      <FloatingNature />
      
      <div className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-20">
          <div className="absolute inset-0">
            <Image
              src="https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool+(1)/Images/KingsP.activities2.jpg"
              alt="About Wilderness Botswana"
              fill
              className="object-cover brightness-[0.4]"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center px-4"
          >
            <h1 className="font-serif text-5xl md:text-7xl text-amber-50 mb-6">
              The Story of Wilderness Botswana
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
          </motion.div>
        </section>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Legacy */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/Wilderness+Pelo_14.jpg`}
                  alt="Our Legacy"
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-amber-500" />
                  <h2 className="font-serif text-4xl text-amber-100">Our Legacy</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  For over 25 years, Wilderness Botswana has been at the forefront of luxury safari experiences. 
                  What began as a vision to share Africa's untamed beauty has grown into a collection of award-winning 
                  camps across Botswana's most pristine wilderness areas.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our founders believed that true luxury lies not in opulence, but in authentic connection with nature. 
                  Today, we continue that legacy, offering experiences that transform guests into conservationists and 
                  adventurers into storytellers.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Our Purpose */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-amber-500" />
                  <h2 className="font-serif text-4xl text-amber-100">Our Purpose</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  We believe that sustainable tourism is the key to wildlife conservation. Every safari with us 
                  directly supports habitat protection, anti-poaching efforts, and community development programs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Leaf className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-200 mb-1">Conservation First</h3>
                      <p className="text-gray-400">Protecting over 2 million acres of pristine wilderness</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-200 mb-1">Community Partnership</h3>
                      <p className="text-gray-400">Employing and empowering local communities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-amber-200 mb-1">Wildlife Protection</h3>
                      <p className="text-gray-400">Supporting anti-poaching and research initiatives</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Chitabe/Images/Wilderness+Chitabe_1.jpg`}
                  alt="Our Purpose"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </section>

          {/* The Big Five Experience */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-amber-100 mb-6">
                The Big Five Experience
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Encounter Africa's most iconic wildlife in their natural habitat
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {bigFive.map((animal, index) => (
                <motion.div
                  key={animal.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {animal.icon}
                  </div>
                  <h3 className="font-serif text-2xl text-amber-100 mb-2">{animal.name}</h3>
                  <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {animal.fact}
                  </p>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-800/0 group-hover:from-amber-600/10 group-hover:to-amber-800/10 rounded-2xl transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
