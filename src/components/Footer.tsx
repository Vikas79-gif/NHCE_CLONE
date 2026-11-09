"use client";

import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className="bg-slate-950 border-t border-white/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-black text-sm">NH</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white">New Horizon</h3>
                <p className="text-xs text-cyan-400">College of Engineering</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A premier autonomous engineering college in Bengaluru, affiliated to VTU and accredited by NAAC with 'A' Grade. Committed to excellence in education since 1998.
            </p>
            <div className="flex space-x-3">
              {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-cyan-400/20 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="text-gray-400 hover:text-cyan-400 text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About NHCE", href: "/about" },
                { name: "Admissions", href: "/admissions" },
                { name: "Academics", href: "/academics" },
                { name: "Placements", href: "/placements" },
                { name: "Campus Life", href: "/about#campus" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-6">Programs</h4>
            <ul className="space-y-3">
              {[
                { name: "B.Tech Programs", href: "/academics#ug-programs" },
                { name: "M.Tech Programs", href: "/academics#pg-programs" },
                { name: "MBA Program", href: "/academics#mba-program" },
                { name: "MCA Program", href: "/academics#mca-program" },
                { name: "Ph.D. & Research", href: "/academics#phd-program" },
                { name: "Academic Departments", href: "/academics#departments" },
              ].map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">
                  New Horizon College of Engineering,
                  <br />
                  Bellandur, Sarjapur Road,
                  <br />
                  Bengaluru - 560103, Karnataka, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <a href="tel:+919880534935" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors block">
                    +91-98805 34935
                  </a>
                  <a href="tel:+918066297777" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors block">
                    +91-80-6629-7777
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <a href="mailto:info@nhce.ac.in" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  info@nhce.ac.in
                </a>
              </div>
            </div>

            {/* Accreditation Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["NAAC 'A'", "NBA", "AICTE", "VTU"].map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © 2024 New Horizon College of Engineering. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-500 hover:text-cyan-400 text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
