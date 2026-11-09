"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, LayoutGrid } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "programs", "campus", "placements", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".navbar-root")) {
        setMegaOpen(false);
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar-root relative w-full transition-all duration-300" role="navigation" aria-label="Main navigation">
      <div className={`w-full ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl shadow-2xl border-b border-cyan-400/10"
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group" aria-label="NHCE Home">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-black text-lg relative z-10">NH</span>
                </div>
              </div>
              <div>
                <h1 className="font-black text-lg leading-tight text-white">
                  New Horizon
                </h1>
                <p className="text-xs text-cyan-400 font-medium">
                  College of Engineering
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <button
                onClick={() => setMegaOpen(!megaOpen)}
                className={`nav-link flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  megaOpen ? "text-cyan-400" : "text-gray-300 hover:text-white"
                }`}
                aria-expanded={megaOpen}
                aria-controls="mega-menu"
              >
                <LayoutGrid className="w-4 h-4 mr-1" />
                Menu
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
              </button>

              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.dropdown && setDropdownOpen(link.name)}
                  onMouseLeave={() => link.dropdown && setDropdownOpen(null)}
                >
                  {link.dropdown ? (
                    <button
                      onClick={() => {
                        setActiveSection(link.section || "");
                        setDropdownOpen(dropdownOpen === link.name ? null : link.name);
                      }}
                      className={`nav-link flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                        activeSection === link.section
                          ? "text-cyan-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen === link.name}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                          dropdownOpen === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setActiveSection(link.section || "")}
                      className={`nav-link flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeSection === link.section
                          ? "text-cyan-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {link.dropdown && dropdownOpen === link.name && (
                    <div
                      className="absolute top-full left-0 pt-2 opacity-100 visible z-50"
                      id={`${link.name.toLowerCase()}-dropdown`}
                    >
                      <div className="glass-card p-2 min-w-[200px]">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setDropdownOpen(null)}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/admissions"
                className="ml-6 px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/25 hover:-translate-y-0.5"
              >
                Apply Now
              </Link>
            </div>

            {/* Mega Menu Container */}
            <div className="relative">
              <MegaMenu isOpen={megaOpen} onClose={() => setMegaOpen(false)} />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden mobile-menu transition-all duration-300 ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          role="menu"
        >
          <div className="px-4 py-4 space-y-2">
            <button
              onClick={() => { setMegaOpen(!megaOpen); setIsOpen(false); }}
              className="w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors"
              role="menuitem"
            >
              <LayoutGrid className="w-4 h-4 mr-2" />
              Full Menu
            </button>
            {navLinks.map((link) => (
              <div key={link.name} role="menuitem">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.section
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/admissions"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 mt-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-lg font-semibold text-center"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
