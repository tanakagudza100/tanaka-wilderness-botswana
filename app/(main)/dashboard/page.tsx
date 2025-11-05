'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { User, Calendar, MapPin, Settings, LogOut } from 'lucide-react';

interface UserData {
  email: string;
  name: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);



  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-500 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950">
      {/* Header */}
      <header className="border-b border-amber-500/20 bg-slate-900/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif text-amber-500">
              Wilderness Botswana
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-gray-300">Welcome, {user?.name}</span>
              <Link href="/api/auth/logout">
                <Button variant="outline" className="border-amber-500/30 text-amber-500 hover:bg-amber-500/10">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-serif text-amber-50 mb-8">Dashboard</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/80 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl">
                  <Calendar className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Upcoming Trips</p>
                  <p className="text-3xl font-bold text-amber-50">0</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/80 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Destinations Visited</p>
                  <p className="text-3xl font-bold text-amber-50">0</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/80 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl">
                  <User className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Member Since</p>
                  <p className="text-xl font-bold text-amber-50">2025</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <div className="bg-slate-900/80 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-serif text-amber-50 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/activities">
                <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600">
                  Browse Activities
                </Button>
              </Link>
              <Link href="/bookings">
                <Button variant="outline" className="w-full border-amber-500/30 text-amber-500 hover:bg-amber-500/10">
                  My Bookings
                </Button>
              </Link>
              <Link href="/profile">
                <Button variant="outline" className="w-full border-amber-500/30 text-amber-500 hover:bg-amber-500/10">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full border-amber-500/30 text-gray-300 hover:bg-slate-800">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>

          {/* User Profile Card */}
          <div className="bg-slate-900/80 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-serif text-amber-50 mb-6">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm">Name</label>
                <p className="text-amber-50 text-lg">{user?.name}</p>
              </div>
              <div>
                <label className="text-gray-400 text-sm">Email</label>
                <p className="text-amber-50 text-lg">{user?.email}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
