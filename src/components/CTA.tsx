"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { contactCards } from "@/data/content";
import { getIcon } from "@/data/icons";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="admissions" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" ref={ref} style={{ scrollMarginTop: "80px" }}>
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-semibold mb-6 border border-cyan-400/20">
            Get Started
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Begin Your Journey
            <span className="block gradient-text">At NHCE</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Admissions are now open for UG, PG, and research programs. Secure your seat at one of Bengaluru's premier engineering colleges.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href="/admissions"
              className="group px-10 py-5 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-cyan-400/30 flex items-center space-x-2 hover:-translate-y-1"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919880534935"
              className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-lg transition-all duration-200 border border-white/20 backdrop-blur-sm hover:border-cyan-400/50 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>+91-98805 34935</span>
            </a>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {contactCards.map((card, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all"
              >
                <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {getIcon(card.icon, "w-6 h-6 text-cyan-400")}
                </div>
                <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.info}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
