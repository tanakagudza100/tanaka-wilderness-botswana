"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, Mail, User, MessageSquare, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ActivityBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  activityName: string;
}

export default function ActivityBookingModal({
  isOpen,
  onClose,
  activityName,
}: ActivityBookingModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    numberOfPeople: "1",
    activityDate: "",
    bookingType: "",
    additionalNotes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/activity-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          activityName,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
          setFormData({
            fullName: "",
            email: "",
            numberOfPeople: "1",
            activityDate: "",
            bookingType: "",
            additionalNotes: "",
          });
        }, 3000);
      }
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-700/50 hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="p-6 sm:p-8">
              {!isSuccess ? (
                <>
                  <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl font-serif text-amber-100 mb-2">
                      Book Your Activity
                    </h2>
                    <p className="text-gray-400 text-sm">
                      Complete the form below to book <span className="text-amber-400 font-semibold">{activityName}</span>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Activity Name (Read-only) */}
                    <div>
                      <Label className="text-amber-200 mb-2 block">Activity</Label>
                      <Input
                        value={activityName}
                        readOnly
                        className="bg-slate-900/50 border-amber-500/30 text-white"
                      />
                    </div>

                    {/* Full Name */}
                    <div>
                      <Label htmlFor="fullName" className="text-amber-200 mb-2 block">
                        Full Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="pl-10 bg-slate-900/50 border-amber-500/30 text-white focus:border-amber-500"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-amber-200 mb-2 block">
                        Email *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="pl-10 bg-slate-900/50 border-amber-500/30 text-white focus:border-amber-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Number of People & Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="numberOfPeople" className="text-amber-200 mb-2 block">
                          Number of People *
                        </Label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="numberOfPeople"
                            type="number"
                            min="1"
                            required
                            value={formData.numberOfPeople}
                            onChange={(e) =>
                              setFormData({ ...formData, numberOfPeople: e.target.value })
                            }
                            className="pl-10 bg-slate-900/50 border-amber-500/30 text-white focus:border-amber-500"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="activityDate" className="text-amber-200 mb-2 block">
                          Date of Activity *
                        </Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="activityDate"
                            type="date"
                            required
                            value={formData.activityDate}
                            onChange={(e) =>
                              setFormData({ ...formData, activityDate: e.target.value })
                            }
                            className="pl-10 bg-slate-900/50 border-amber-500/30 text-white focus:border-amber-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Booking Type */}
                    <div>
                      <Label htmlFor="bookingType" className="text-amber-200 mb-2 block">
                        Booking Type *
                      </Label>
                      <Select
                        value={formData.bookingType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, bookingType: value })
                        }
                        required
                      >
                        <SelectTrigger className="bg-slate-900/50 border-amber-500/30 text-white focus:border-amber-500">
                          <SelectValue placeholder="Select booking type" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-amber-500/30">
                          <SelectItem value="guided-tour">Guided Tour</SelectItem>
                          <SelectItem value="self-drive">Self-Drive</SelectItem>
                          <SelectItem value="family-package">Family Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <Label htmlFor="additionalNotes" className="text-amber-200 mb-2 block">
                        Additional Notes
                      </Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Textarea
                          id="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={(e) =>
                            setFormData({ ...formData, additionalNotes: e.target.value })
                          }
                          className="pl-10 bg-slate-900/50 border-amber-500/30 text-white focus:border-amber-500 min-h-[100px]"
                          placeholder="Any special requests or dietary requirements..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-amber-500/30 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Booking Request"
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-amber-100 mb-3">
                    Booking Request Received!
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Your booking request has been received. We'll contact you soon.
                  </p>
                  <p className="text-sm text-gray-400">
                    Check your email for confirmation details.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
