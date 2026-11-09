"use client";

import { Phone, MapPin, Mail, Globe, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { topBarLinks } from "@/data/content";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="bg-slate-900 border-b border-cyan-400/20 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          {/* Contact Info */}
          <div className="flex items-center space-x-6">
            <a href="tel:+919880534935" className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91-98805 34935</span>
            </a>
            <a href="tel:+918066297777" className="hidden md:flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91-80-6629-7777</span>
            </a>
            <a href="mailto:admissionsnhce@newhorizonindia.edu" className="hidden md:flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-xs">admissionsnhce@newhorizonindia.edu</span>
            </a>
          </div>

          {/* Top Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {topBarLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center space-x-1 py-1"
                >
                  <span>{link.name}</span>
                  {link.dropdown && <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />}
                </a>
                {link.dropdown && openDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="glass-card p-2 min-w-[140px]">
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors ml-2" aria-label="Language selection">
              <Globe className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Top Nav */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-white/10">
            <div className="grid grid-cols-2 gap-2">
              {topBarLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
