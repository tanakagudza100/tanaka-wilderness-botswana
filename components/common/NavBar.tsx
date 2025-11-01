// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="relative group">
            <h1 className="relative text-xl font-semibold text-amber-100 hover:text-amber-200 transition-colors duration-200">
              Wilderness Botswana
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/camps"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-amber-200 hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              Camps
            </Link>
            <Link
              href="/experiences"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-amber-200 hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              Experiences
            </Link>
            <Link
              href="/activities"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-amber-200 hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              Activities
            </Link>
            <Link
              href="/offers"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-amber-200 hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              Offers
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-amber-200 hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              About
            </Link>

            {status === "authenticated" ? (
              <div className="flex items-center space-x-2 ml-4">
                <Link href="/profile">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-300 hover:text-amber-200 hover:bg-white/5"
                  >
                    <User className="w-4 h-4 mr-1.5" />
                    Profile
                  </Button>
                </Link>
                <Button
                  onClick={() => signOut()}
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-amber-200 hover:bg-white/5"
                >
                  <LogOut className="w-4 h-4 mr-1.5" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 ml-4">
                <Link href="/signin">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-300 hover:text-amber-200 hover:bg-white/5"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button 
                    size="sm"
                    className="bg-amber-600 hover:bg-amber-700 text-white shadow-md"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-900/98 backdrop-blur-md border-b border-white/10 shadow-xl">
            <div className="p-4 space-y-2">
            <Link
              href="/camps"
              className="block px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-amber-200 hover:bg-white/5 rounded-lg transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Camps
            </Link>
            <Link
              href="/experiences"
              className="block px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-amber-200 hover:bg-white/5 rounded-lg transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experiences
            </Link>
            <Link
              href="/activities"
              className="block px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-amber-200 hover:bg-white/5 rounded-lg transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Activities
            </Link>
            <Link
              href="/offers"
              className="block px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-amber-200 hover:bg-white/5 rounded-lg transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Offers
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-amber-200 hover:bg-white/5 rounded-lg transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            {status === "authenticated" ? (
              <>
                <Link
                  href="/profile"
                  className="block px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-amber-200 hover:bg-white/5 rounded-lg transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-amber-200 hover:bg-white/5 rounded-lg transition-all"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button variant="ghost" size="sm" className="w-full justify-start text-gray-300 hover:text-amber-200 hover:bg-white/5">
                    Sign In
                  </Button>
                </Link>
                <Link
                  href="/signup"
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
