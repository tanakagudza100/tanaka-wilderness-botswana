"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FloatingNature from "@/components/common/FloatingNature";
import TekoChatbot from "@/components/common/TekoChatbot";
import InquiryModal from "@/components/booking/InquiryModal";
import { Calendar, Users, DollarSign, Compass, ChevronDown, Star, MapPin, ArrowRight } from "lucide-react";

const lodges = [
  {
    name: "Wilderness Pelo Camp",
    location: "Okavango Delta",
    description: "Wake up to elephants crossing the Delta's mirrored waters.",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Pelo/Images/Wilderness+Pelo_14.jpg`,
    type: "water",
    pricing: [
      { period: "6 Jan – 31 Mar 2026", sharing: 658, single: 197 },
      { period: "1 Apr – 30 Apr 2026", sharing: 658, single: 197 },
      { period: "1 May – 31 May 2026", sharing: 903, single: 271 },
      { period: "1 Jun – 31 Oct 2026", sharing: 1148, single: 344 },
      { period: "1 Nov – 19 Dec 2026", sharing: 658, single: 197 },
      { period: "20 Dec – 5 Jan 2027", sharing: 1148, single: 344 },
    ],
  },
  {
    name: "Wilderness Chitabe",
    location: "Okavango Delta",
    description: "Experience the perfect blend of water and land-based safari adventures.",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Chitabe/Images/Wilderness+Chitabe_1.jpg`,
    type: "mixed",
    pricing: [
      { period: "6 Jan – 31 Mar 2026", sharing: 720, single: 216 },
      { period: "1 Apr – 30 Apr 2026", sharing: 720, single: 216 },
      { period: "1 May – 31 May 2026", sharing: 980, single: 294 },
      { period: "1 Jun – 31 Oct 2026", sharing: 1250, single: 375 },
      { period: "1 Nov – 19 Dec 2026", sharing: 720, single: 216 },
      { period: "20 Dec – 5 Jan 2027", sharing: 1250, single: 375 },
    ],
  },
  {
    name: "Wilderness Savuti",
    location: "Savuti, Chobe",
    description: "Fall asleep to lions roaring under starry skies.",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_Savuti/Images/Wilderness+Savuti.jpg`,
    type: "land",
    pricing: [
      { period: "6 Jan – 31 Mar 2026", sharing: 695, single: 209 },
      { period: "1 Apr – 30 Apr 2026", sharing: 695, single: 209 },
      { period: "1 May – 31 May 2026", sharing: 920, single: 276 },
      { period: "1 Jun – 31 Oct 2026", sharing: 1180, single: 354 },
      { period: "1 Nov – 19 Dec 2026", sharing: 695, single: 209 },
      { period: "20 Dec – 5 Jan 2027", sharing: 1180, single: 354 },
    ],
  },
  {
    name: "Wilderness King's Pool",
    location: "Linyanti",
    description: "Witness the great elephant herds along the Linyanti River.",
    image: `${process.env.NEXT_PUBLIC_S3_BASE_URL}/Wilderness_King_s_Pool/Images/Wilderness+King+s+Pool_1.jpg`,
    type: "land",
    pricing: [
      { period: "6 Jan – 31 Mar 2026", sharing: 750, single: 225 },
      { period: "1 Apr – 30 Apr 2026", sharing: 750, single: 225 },
      { period: "1 May – 31 May 2026", sharing: 1020, single: 306 },
      { period: "1 Jun – 31 Oct 2026", sharing: 1300, single: 390 },
      { period: "1 Nov – 19 Dec 2026", sharing: 750, single: 225 },
      { period: "20 Dec – 5 Jan 2027", sharing: 1300, single: 390 },
    ],
  },
];

const packages = [
  {
    name: "The Classic Delta Escape",
    duration: "5 Nights",
    camps: ["Pelo", "Jacana", "Linyanti"],
    description: "Experience the best of the Okavango Delta with water-based adventures and wildlife encounters.",
    priceRange: "$3,500 - $5,500",
    highlights: ["Mokoro excursions", "Game drives", "Bird watching", "All-inclusive"],
  },
  {
    name: "Luxury Wilderness Experience",
    duration: "4 Nights",
    camps: ["DumaTau", "King's Pool"],
    description: "Premium safari with private guide, exclusive game drives, and luxury accommodations.",
    priceRange: "$5,200 - $7,800",
    highlights: ["Private guide", "Premium camps", "Sundowner cruises", "Gourmet dining"],
  },
  {
    name: "Explorer's Journey",
    duration: "7 Nights",
    camps: ["Pelo", "Chitabe", "Savuti"],
    description: "Complete Botswana circuit mixing water-based and land-based camps for the ultimate adventure.",
    priceRange: "$4,800 - $8,000",
    highlights: ["Water & land safari", "Multiple ecosystems", "Big Five viewing", "Photography focused"],
  },
];

export default function PlanSafariPage() {
  const [filters, setFilters] = useState({
    season: "",
    budget: "",
    travelers: "",
    experience: "",
  });
  const [showResults, setShowResults] = useState(false);
  const [displayedLodges, setDisplayedLodges] = useState(2);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedLodge, setSelectedLodge] = useState("");

  const handlePlanSafari = () => {
    setShowResults(true);
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const getFilteredLodges = () => {
    if (!showResults) return [];
    
    let filtered = [...lodges];
    
    if (filters.experience === "water") {
      filtered = filtered.filter(l => l.type === "water" || l.type === "mixed");
    } else if (filters.experience === "land") {
      filtered = filtered.filter(l => l.type === "land" || l.type === "mixed");
    }
    
    return filtered;
  };

  const handleInquireNow = (lodgeName: string) => {
    setSelectedLodge(lodgeName);
    setIsInquiryModalOpen(true);
  };

  const handleLoadMore = () => {
    setDisplayedLodges(prev => Math.min(prev + 2, lodges.length));
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <FloatingNature />
      
      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool+(1)/Images/Wilderness+King+s+Pool.jpg"
              alt="Plan Your Safari"
              fill
              className="object-cover brightness-[0.3]"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900" />
            
            {/* Animated elephants */}
            <motion.div
              animate={{ x: [-100, 2000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-20 text-6xl opacity-30"
            >
              🐘🐘
            </motion.div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mb-6"
            >
              <Compass className="w-20 h-20 mx-auto text-amber-400" />
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl text-amber-50 mb-6"
            >
              Plan Your Dream Safari
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
            >
              Discover Botswana's wilderness through custom adventures crafted for your comfort, style, and budget
            </motion.p>

            <motion.button
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              onClick={() => document.getElementById('planner-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-lg font-semibold rounded-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                Plan My Safari
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.span>
              </span>
            </motion.button>
          </div>
        </section>

        {/* Smart Safari Planner */}
        <section id="planner-section" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-amber-100 mb-4">
                Let's Start Planning Your Journey
              </h2>
              <p className="text-lg text-gray-400">
                Tell us about your preferences and we'll recommend the perfect safari experience
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Travel Season */}
                <div>
                  <label className="flex items-center gap-2 text-amber-200 font-medium mb-3">
                    <Calendar className="w-5 h-5" />
                    When are you traveling?
                  </label>
                  <select
                    value={filters.season}
                    onChange={(e) => setFilters({ ...filters, season: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-amber-500/30 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="">Select travel season...</option>
                    <option value="jan-mar">January – March (Green Season)</option>
                    <option value="apr">April (Shoulder Season)</option>
                    <option value="may">May (Shoulder Season)</option>
                    <option value="jun-oct">June – October (Peak Season)</option>
                    <option value="nov-dec">November – December (Green Season)</option>
                    <option value="dec-jan">20 Dec – 5 Jan (Festive Season)</option>
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="flex items-center gap-2 text-amber-200 font-medium mb-3">
                    <DollarSign className="w-5 h-5" />
                    What's your budget range?
                  </label>
                  <select
                    value={filters.budget}
                    onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-amber-500/30 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="">Select budget...</option>
                    <option value="low">Low ($600-$800 per night)</option>
                    <option value="mid">Mid ($800-$1,000 per night)</option>
                    <option value="luxury">Luxury ($1,000+ per night)</option>
                  </select>
                </div>

                {/* Number of Travelers */}
                <div>
                  <label className="flex items-center gap-2 text-amber-200 font-medium mb-3">
                    <Users className="w-5 h-5" />
                    Number of travelers
                  </label>
                  <select
                    value={filters.travelers}
                    onChange={(e) => setFilters({ ...filters, travelers: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-amber-500/30 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="">Select travelers...</option>
                    <option value="1">Solo Traveler</option>
                    <option value="2">Couple (2 people)</option>
                    <option value="4">Small Group (4 people)</option>
                    <option value="6+">Large Group (6+ people)</option>
                  </select>
                </div>

                {/* Preferred Experience */}
                <div>
                  <label className="flex items-center gap-2 text-amber-200 font-medium mb-3">
                    <Compass className="w-5 h-5" />
                    Preferred experience
                  </label>
                  <select
                    value={filters.experience}
                    onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-amber-500/30 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="">Select experience...</option>
                    <option value="water">Water Safari (Mokoro & Boat)</option>
                    <option value="land">Game Drives & Wildlife</option>
                    <option value="bird">Bird Watching</option>
                    <option value="luxury">Luxury Camp Experience</option>
                    <option value="photo">Photography Trip</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handlePlanSafari}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-lg font-semibold py-4 rounded-lg shadow-lg hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Show Me Perfect Lodges
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </section>

        {/* Results Section - Lodge Cards */}
        {showResults && (
          <section id="results-section" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-amber-100 mb-4">
                Recommended Lodges For You
              </h2>
              <p className="text-lg text-gray-400">
                Based on your preferences, here are our top picks
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {getFilteredLodges().slice(0, displayedLodges).map((lodge, index) => (
                <motion.div
                  key={lodge.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
                >
                  {/* Lodge Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={lodge.image}
                      alt={lodge.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-amber-600/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-white fill-white" />
                      <span className="text-white text-sm font-semibold">Premium</span>
                    </div>
                  </div>

                  {/* Lodge Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-serif text-2xl text-amber-100 mb-1">{lodge.name}</h3>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <MapPin className="w-4 h-4" />
                          {lodge.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm italic mb-6">
                      "{lodge.description}"
                    </p>

                    {/* Pricing Table */}
                    <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                      <h4 className="text-amber-200 font-semibold mb-3 text-sm">Seasonal Pricing (Per Person/Night)</h4>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {lodge.pricing.map((price, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                            <span className="text-gray-400 text-xs">{price.period}</span>
                            <div className="flex gap-4">
                              <span className="text-amber-300 font-semibold">${price.sharing}</span>
                              <span className="text-gray-500">+${price.single}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleInquireNow(lodge.name)}
                      className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-sm font-semibold py-3 rounded-lg shadow-lg hover:shadow-amber-500/40 transition-all duration-300"
                    >
                      Inquire Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            {getFilteredLodges().length > displayedLodges && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-amber-500/40 transition-all duration-300"
                >
                  Show Me More Perfect Lodges
                </button>
              </motion.div>
            )}
          </section>
        )}

        {/* Safari Packages */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="text-6xl mb-6">🦁🐘🦏</div>
            <h2 className="font-serif text-4xl md:text-5xl text-amber-100 mb-4">
              Suggested Safari Packages
            </h2>
            <p className="text-lg text-gray-400">
              Curated experiences combining the best of Botswana's wilderness
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-amber-400 font-semibold">{pkg.duration}</span>
                  <span className="text-2xl text-amber-300 font-bold">{pkg.priceRange}</span>
                </div>

                <h3 className="font-serif text-2xl text-amber-100 mb-3">{pkg.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{pkg.description}</p>

                <div className="mb-6">
                  <p className="text-amber-200 text-sm font-semibold mb-2">Camps Included:</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.camps.map((camp) => (
                      <span key={camp} className="px-3 py-1 bg-amber-600/20 border border-amber-500/30 rounded-full text-xs text-amber-200">
                        {camp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-amber-200 text-sm font-semibold mb-2">Highlights:</p>
                  <ul className="space-y-1">
                    {pkg.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400 text-sm flex items-center gap-2">
                        <span className="text-amber-500">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    const chatbot = document.getElementById('teko-chatbot');
                    if (chatbot) chatbot.classList.remove('hidden');
                  }}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-sm font-semibold py-3 rounded-lg shadow-lg hover:shadow-amber-500/40 transition-all duration-300"
                >
                  Enquire Now
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Need Help Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-500/30 rounded-2xl p-12 text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-amber-100 mb-4">
              Need a Hand Planning?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our safari experts are here to help you create the perfect Botswana adventure
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <a
                href="tel:+26778489172"
                className="flex flex-col items-center gap-2 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <span className="text-2xl">📞</span>
                <span className="text-amber-200 text-sm font-semibold">Call</span>
                <span className="text-gray-400 text-xs">+267 78 489 1725</span>
              </a>
              <a
                href="https://wa.me/267779639139"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <span className="text-2xl">💬</span>
                <span className="text-amber-200 text-sm font-semibold">WhatsApp</span>
                <span className="text-gray-400 text-xs">+267 77 963 9139</span>
              </a>
              <a
                href="mailto:info@wildernessbotswana.com"
                className="flex flex-col items-center gap-2 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <span className="text-2xl">✉️</span>
                <span className="text-amber-200 text-sm font-semibold">Email</span>
                <span className="text-gray-400 text-xs">info@wildernessbotswana.com</span>
              </a>
              <a
                href="https://www.safariculture.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <span className="text-2xl">🌐</span>
                <span className="text-amber-200 text-sm font-semibold">Website</span>
                <span className="text-gray-400 text-xs">safariculture.com</span>
              </a>
            </div>

            <button
              onClick={() => {
                const chatbot = document.getElementById('teko-chatbot');
                if (chatbot) chatbot.classList.remove('hidden');
              }}
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-amber-500/40 transition-all duration-300"
            >
              Get Personalised Help
            </button>
          </motion.div>
        </section>

        {/* Final Quote */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="font-serif text-2xl md:text-3xl text-amber-200 italic max-w-3xl mx-auto">
              "In the heart of Botswana, every journey becomes a story worth telling."
            </p>
          </motion.div>
        </section>
      </div>

      <TekoChatbot />
      
      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        lodgeName={selectedLodge}
      />
    </main>
  );
}
