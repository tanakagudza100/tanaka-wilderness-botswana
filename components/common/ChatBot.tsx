"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "👋 Hi there! Planning a trip to Botswana?",
      type: "bot",
    },
  ]);

  const handleQuickReply = (reply: string) => {
    setMessages((prev) => [
      ...prev,
      { text: reply, type: "user" },
      {
        text:
          reply === "Check Pricing"
            ? "I'd be happy to help you with pricing information! Would you like to:"
            : "Great! Let me help you with your booking. Would you like to:",
        type: "bot",
      },
    ]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-neutral-900/95 backdrop-blur-lg rounded-xl shadow-2xl mb-4 w-80 overflow-hidden"
          >
            <div className="p-4 bg-amber-900/20 border-b border-amber-800/30">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/images/teko-bot.jpg"
                    alt="Teko"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-amber-100">Teko</h3>
                  <p className="text-sm text-gray-400">Wilderness Bot</p>
                </div>
              </div>
            </div>
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === "user"
                        ? "bg-amber-700 text-white"
                        : "bg-white/10 text-gray-200"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="p-4 border-t border-amber-800/30 space-y-2">
              <Button
                onClick={() => handleQuickReply("Check Pricing")}
                variant="outline"
                className="w-full bg-white/5 hover:bg-white/10 border-amber-800/50"
              >
                Check Pricing
              </Button>
              <Button
                onClick={() => handleQuickReply("Make a Booking")}
                variant="outline"
                className="w-full bg-white/5 hover:bg-white/10 border-amber-800/50"
              >
                Make a Booking
              </Button>
              <Button
                onClick={() =>
                  (window.location.href = "mailto:info@wildernessbotswana.com")
                }
                className="w-full bg-amber-700 hover:bg-amber-600"
              >
                Email Our Team
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-amber-700 hover:bg-amber-600 text-white rounded-full p-4 shadow-lg"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
