"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FloatingNature from "@/components/common/FloatingNature";
import { Phone, Mail, MapPin, Globe, MessageCircle, Send } from "lucide-react";

const camps = [
  "Wilderness Pelo",
  "Wilderness Savuti",
  "Wilderness Chitabe",
  "Wilderness Kings Pool",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    topic: "",
    camp: "",
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          topic: "",
          camp: "",
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        setError(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("Contact form error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <FloatingNature />
      
      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://tanaka-images.s3.us-east-1.amazonaws.com/Wilderness_King_s_Pool+(1)/Images/kingspool-e-1.jpg"
              alt="Wilderness Contact"
              fill
              className="object-cover brightness-[0.4]"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mb-6"
            >
              <MessageCircle className="w-16 h-16 mx-auto text-amber-400" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-4xl md:text-6xl text-amber-50 mb-4"
            >
              Let&apos;s Connect with the Wild
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Have a question or want to plan your safari? We&apos;re here to help.
            </motion.p>
          </div>
        </section>

        {/* Smart Contact Form */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 md:p-12"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="font-serif text-2xl md:text-3xl text-amber-100 mb-2">
                      Tell Us About Your Inquiry
                    </h2>
                    <p className="text-sm text-gray-400">
                      Fill out the form below and we&apos;ll get back to you soon
                    </p>
                    {error && (
                      <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                        {error}
                      </div>
                    )}
                  </div>

                  {/* Topic Selection */}
                  <div>
                    <label className="block text-sm font-medium text-amber-200 mb-2">
                      What can we help you with? *
                    </label>
                    <select
                      required
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-amber-500/30 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="">Select a topic...</option>
                      <option value="bookings">Bookings</option>
                      <option value="pricing">Pricing</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  {/* Camp Selection */}
                  <div>
                    <label className="block text-sm font-medium text-amber-200 mb-2">
                      Which camp interests you?
                    </label>
                    <select
                      value={formData.camp}
                      onChange={(e) => setFormData({ ...formData, camp: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-amber-500/30 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="">Select a camp...</option>
                      {camps.map((camp) => (
                        <option key={camp} value={camp}>
                          {camp}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-amber-200 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-amber-500/30 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-200 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-amber-500/30 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="+267 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-200 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-amber-500/30 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-amber-200 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-amber-500/30 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      placeholder="Tell us about your safari plans..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-amber-100 mb-3">
                    Thanks for reaching out!
                  </h3>
                  <p className="text-gray-300">
                    Our team will contact you soon.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

      {/* Direct Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12"
        >
          <h2 className="font-serif text-3xl text-amber-100 mb-8 text-center">
            Reach Us Directly
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <a
              href="tel:+26778489172"
              className="flex flex-col items-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 rounded-lg hover:border-amber-500/50 transition-all duration-300 group"
            >
              <Phone className="w-10 h-10 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-100 font-medium mb-2">Call</h3>
              <p className="text-gray-400 text-sm text-center">+267 78 489 1725</p>
            </a>

            <a
              href="https://wa.me/267779639139"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 rounded-lg hover:border-amber-500/50 transition-all duration-300 group"
            >
              <MessageCircle className="w-10 h-10 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-100 font-medium mb-2">WhatsApp</h3>
              <p className="text-gray-400 text-sm text-center">+267 77 963 9139</p>
            </a>

            <a
              href="mailto:info@wildernessbotswana.com"
              className="flex flex-col items-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 rounded-lg hover:border-amber-500/50 transition-all duration-300 group"
            >
              <Mail className="w-10 h-10 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-100 font-medium mb-2">Email</h3>
              <p className="text-gray-400 text-sm text-center">info@wildernessbotswana.com</p>
            </a>

            <a
              href="https://www.safariculture.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 rounded-lg hover:border-amber-500/50 transition-all duration-300 group"
            >
              <Globe className="w-10 h-10 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-100 font-medium mb-2">Website</h3>
              <p className="text-gray-400 text-sm text-center">www.safariculture.com</p>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl text-amber-100 mb-8 text-center">
            Find Us in Botswana
          </h2>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-500/20 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15247.289044762425!2d23.64661655!3d-19.31165115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1947b4011e49aa9f%3A0x61d9d93e45467810!2sWilderness%20Safaris%20Maun!5e0!3m2!1sen!2sbw!4v1635764422044!5m2!1sen!2sbw"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-center text-gray-400 mt-4 text-sm">
            📍 Explore our camps across the Okavango Delta, Savuti, and Linyanti regions
          </p>
        </motion.div>
      </section>
      </div>
    </main>
  );
}
