import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-amber-500/20 text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-amber-100">Wilderness Botswana</h3>
                <p className="text-xs text-amber-400/70">Soul of the Safari</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Protecting wildlife and creating lifelong safari memories through sustainable luxury tourism.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-amber-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/camps" className="text-sm text-gray-400 hover:text-amber-300 transition-colors">
                  Our Camps
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-sm text-gray-400 hover:text-amber-300 transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-amber-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-amber-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-amber-100 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+26778489172" className="flex items-center gap-2 text-sm text-gray-400 hover:text-amber-300 transition-colors group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  +267 78 489 1725
                </a>
              </li>
              <li>
                <a href="https://wa.me/267779639139" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-amber-300 transition-colors group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  +267 77 963 9139 (WhatsApp)
                </a>
              </li>
              <li>
                <a href="mailto:info@wildernessbotswana.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-amber-300 transition-colors group">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  info@wildernessbotswana.com
                </a>
              </li>
              <li>
                <a href="https://www.safariculture.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-amber-300 transition-colors group">
                  <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  www.safariculture.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-amber-100 mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/wildernessbotswana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-amber-600/20 border border-amber-500/20 hover:border-amber-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-amber-300 group-hover:scale-110 transition-all" />
              </a>
              <a
                href="https://www.instagram.com/wildernessbotswana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-amber-600/20 border border-amber-500/20 hover:border-amber-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-amber-300 group-hover:scale-110 transition-all" />
              </a>
              <a
                href="https://www.linkedin.com/company/wildernessbotswana"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-amber-600/20 border border-amber-500/20 hover:border-amber-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-amber-300 group-hover:scale-110 transition-all" />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Share your safari moments with<br />
              <span className="text-amber-400">#WildernessBotswana</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Wilderness Botswana. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-amber-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-amber-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
