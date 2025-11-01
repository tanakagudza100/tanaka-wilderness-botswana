"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone, Mail } from "lucide-react";
import Image from "next/image";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

export default function TekoChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hello, I'm Teko, your Wilderness guide! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickActions = [
    { label: "View Activities", action: "activities" },
    { label: "Book a Stay", action: "booking" },
    { label: "Safari Packages", action: "packages" },
    { label: "Getting Here", action: "directions" },
    { label: "Rates & Pricing", action: "rates" },
  ];

  const handleQuickAction = (action: string) => {
    const responses: Record<string, string> = {
      activities: "Great choice! We offer Boating Safaris, Game Drives, Guided Walks, Mokoro Excursions, and more. Would you like to see our full activities page?",
      booking: "I'd love to help you book your stay! Please contact us at +267 78 489 1725 or email info@wildernessbotswana.com",
      packages: "Our safari packages range from 3-day adventures to 7-day luxury experiences. Prices start from $450 per person per night. Would you like specific details?",
      directions: "Wilderness Botswana camps are located across the Okavango Delta, Savuti, and Linyanti regions. We arrange charter flights from Maun. Need more details?",
      rates: "Our rates vary by season and camp. Contact us for current pricing: +267 78 489 1725 or visit www.safariculture.com",
    };

    const userMessage: Message = {
      id: messages.length + 1,
      text: quickActions.find(a => a.action === action)?.label || "",
      sender: "user",
      timestamp: new Date(),
    };

    const botMessage: Message = {
      id: messages.length + 2,
      text: responses[action] || "Let me help you with that!",
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, botMessage]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    const botMessage: Message = {
      id: messages.length + 2,
      text: "Thanks for your message! For personalized assistance, please contact our team at +267 78 489 1725 or email info@wildernessbotswana.com",
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, botMessage]);
    setInputValue("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-full shadow-2xl hover:shadow-amber-500/50 flex items-center justify-center group transition-all duration-300"
          >
            <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="teko-chatbot"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-500/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🦁</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Teko</h3>
                  <p className="text-xs text-amber-100">Your Wilderness Guide</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-amber-600 text-white rounded-br-none"
                        : "bg-slate-800 text-gray-200 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Quick Actions */}
              {messages.length <= 2 && (
                <div className="space-y-2 pt-2">
                  <p className="text-xs text-gray-400 text-center">Quick actions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickActions.map((action) => (
                      <button
                        key={action.action}
                        onClick={() => handleQuickAction(action.action)}
                        className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-amber-600/20 text-gray-300 hover:text-amber-200 border border-amber-500/20 hover:border-amber-500/40 rounded-full transition-all duration-300"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Options */}
            <div className="border-t border-white/10 p-3 bg-slate-800/50">
              <p className="text-xs text-gray-400 mb-2 text-center">Or reach us directly:</p>
              <div className="flex gap-2">
                <a
                  href="tel:+26778489172"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-500 text-white text-xs rounded-lg transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  Call
                </a>
                <a
                  href="https://wa.me/267779639139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-500 text-white text-xs rounded-lg transition-colors"
                >
                  <MessageCircle className="w-3 h-3" />
                  WhatsApp
                </a>
                <a
                  href="mailto:info@wildernessbotswana.com"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs rounded-lg transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  Email
                </a>
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-white/10 p-4 bg-slate-800/30">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-slate-900 border border-amber-500/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-lg transition-all duration-300"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
