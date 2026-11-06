"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Placements", href: "/placements" },
    { name: "Admissions", href: "/admissions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">NH</span>
            </div>
            <div>
              <h1
                className={`font-bold text-lg leading-tight ${
                  scrolled ? "text-blue-900" : "text-white"
                }`}
              >
                New Horizon
              </h1>
              <p
                className={`text-xs ${
                  scrolled ? "text-slate-600" : "text-blue-100"
                }`}
              >
                College of Engineering
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-800/10 ${
                  scrolled
                    ? "text-slate-700 hover:text-blue-900"
                    : "text-white hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/admissions"
              className="ml-4 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? "text-blue-900" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-blue-900" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl border-t">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-900 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/admissions"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 mt-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold text-center transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
