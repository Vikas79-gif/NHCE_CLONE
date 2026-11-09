"use client";

import { useRef } from "react";
import Link from "next/link";
import { Clock, Users, GraduationCap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { programs } from "@/data/content";

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const ugPrograms = programs.filter(p => p.duration === "4 Years");
  const pgPrograms = programs.filter(p => p.duration === "2 Years");

  return (
    <section id="programs" className="py-20 bg-slate-900 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 tech-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-400/20">
            Academic Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Programs Offered <span className="gradient-text">at NHCE</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choice-based credit system and flexible curriculum designed to meet industry demands
          </p>
        </motion.div>

        {/* UG Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 text-cyan-400 mr-3" />
            Undergraduate Programs (B.Tech)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ugPrograms.map((prog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${prog.color} flex items-center justify-center mb-4 text-2xl shadow-lg`}>
                  {prog.logo}
                </div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                  {prog.code}
                </h4>
                <p className="text-gray-400 text-sm mb-4">{prog.name}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center"><Clock className="w-3 h-3 mr-1" />{prog.duration}</span>
                  <span className="flex items-center"><Users className="w-3 h-3 mr-1" />{prog.seats} Seats</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PG Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
            Postgraduate Programs (M.Tech / MBA / MCA)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pgPrograms.map((prog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${prog.color} flex items-center justify-center mb-4 text-2xl shadow-lg`}>
                  {prog.logo}
                </div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                  {prog.code}
                </h4>
                <p className="text-gray-400 text-sm mb-4">{prog.name}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center"><Clock className="w-3 h-3 mr-1" />{prog.duration}</span>
                  <span className="flex items-center"><Users className="w-3 h-3 mr-1" />{prog.seats} Seats</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/academics"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-xl font-bold transition-all hover:shadow-2xl hover:shadow-cyan-400/30 hover:-translate-y-1"
          >
            View All Programs
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
