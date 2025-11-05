// app/profile/page.tsx
"use client";

import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Save,
  Camera,
  Heart,
  Clock,
} from "lucide-react";

export default function ProfilePage() {
  const { user, isLoading } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "John Doe",
    email: user?.email || "john@example.com",
    phone: "+267 123 4567",
    location: "Gaborone, Botswana",
  });

  const handleSave = () => {
    // Handle save logic here
    setIsEditing(false);
  };

  const bookings = [
    {
      id: "1",
      tour: "Okavango Delta Safari",
      date: "2025-12-15",
      status: "confirmed",
      image: "/tour1.jpg",
    },
    {
      id: "2",
      tour: "Chobe River Experience",
      date: "2026-01-20",
      status: "pending",
      image: "/tour2.jpg",
    },
  ];

  const favorites = [
    { id: "1", name: "Luxury Bush Camp", image: "/property1.jpg" },
    { id: "2", name: "Savanna Lodge", image: "/property2.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mb-12">
          <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900/50 to-blue-900/30 backdrop-blur-xl border-white/10 p-8">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <Avatar className="relative w-32 h-32 border-4 border-white/10">
                  <AvatarImage src="/avatar.jpg" />
                  <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white text-3xl">
                    {formData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg hover:scale-110 transition-transform">
                  <Camera className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    {formData.name}
                  </span>
                </h1>
                <p className="text-white/60 mb-4">{formData.email}</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    {formData.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    Joined Oct 2025
                  </div>
                </div>
              </div>

              {/* Edit Button */}
              <Button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all"
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="info" className="space-y-8">
          <TabsList className="grid w-full md:w-auto grid-cols-3 bg-slate-900/50 border border-white/10 p-1">
            <TabsTrigger
              value="info"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500"
            >
              <User className="w-4 h-4 mr-2" />
              Info
            </TabsTrigger>
            <TabsTrigger
              value="bookings"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500"
            >
              <Clock className="w-4 h-4 mr-2" />
              Bookings
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500"
            >
              <Heart className="w-4 h-4 mr-2" />
              Favorites
            </TabsTrigger>
          </TabsList>

          {/* Personal Info Tab */}
          <TabsContent value="info">
            <Card className="bg-slate-900/50 backdrop-blur-xl border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/80">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    disabled={!isEditing}
                    className="bg-white/5 border-white/10 text-white disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    disabled={!isEditing}
                    className="bg-white/5 border-white/10 text-white disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white/80">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    disabled={!isEditing}
                    className="bg-white/5 border-white/10 text-white disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-white/80">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    disabled={!isEditing}
                    className="bg-white/5 border-white/10 text-white disabled:opacity-50"
                  />
                </div>
              </div>
              {isEditing && (
                <div className="flex gap-4 mt-8">
                  <Button
                    onClick={handleSave}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button
                    onClick={() => setIsEditing(false)}
                    variant="outline"
                    className="border-white/10 text-white hover:bg-white/5"
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </Card>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings">
            <div className="space-y-4">
              {bookings.map((booking) => (
                <Card
                  key={booking.id}
                  className="bg-slate-900/50 backdrop-blur-xl border-white/10 p-6 hover:border-cyan-400/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {booking.tour}
                      </h3>
                      <p className="text-white/60">
                        Date: {new Date(booking.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div
                      className={`px-4 py-2 rounded-full ${
                        booking.status === "confirmed"
                          ? "bg-green-500/20 text-green-400 border border-green-400/50"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-400/50"
                      }`}
                    >
                      {booking.status}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favorites.map((fav) => (
                <Card
                  key={fav.id}
                  className="bg-slate-900/50 backdrop-blur-xl border-white/10 p-6 hover:border-cyan-400/50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-cyan-400 fill-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {fav.name}
                      </h3>
                      <p className="text-white/60 text-sm">Saved property</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
