"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

type EnquiryType = "bookings" | "pricing" | "packages" | "general" | null;

export default function ContactForm() {
  const [enquiryType, setEnquiryType] = useState<EnquiryType>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically handle the form submission
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center py-8"
          >
            <h3 className="text-2xl font-serif text-amber-100 mb-4">
              Thanks for reaching out!
            </h3>
            <p className="text-gray-300">
              Our team will get back to you shortly with the perfect safari
              experience.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-amber-100 mb-4">
                What can we help you with?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["bookings", "pricing", "packages", "general"].map((type) => (
                  <Button
                    key={type}
                    type="button"
                    variant={enquiryType === type ? "default" : "outline"}
                    className={`w-full capitalize ${
                      enquiryType === type
                        ? "bg-amber-700 hover:bg-amber-600"
                        : "bg-white/5 hover:bg-white/10 border-amber-800/50"
                    }`}
                    onClick={() => setEnquiryType(type as EnquiryType)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {enquiryType && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 overflow-hidden"
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-white/5 border border-amber-800/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 bg-white/5 border border-amber-800/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone number (optional)"
                      className="w-full px-4 py-3 bg-white/5 border border-amber-800/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder={
                        enquiryType === "general"
                          ? "What would you like to know today?"
                          : "Tell us more about your dream safari..."
                      }
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-amber-800/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-400 resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-amber-700 hover:bg-amber-600 text-white py-4"
                  >
                    Send Message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
