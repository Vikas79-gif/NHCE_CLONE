"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Building2, CheckCircle, Globe } from "lucide-react";

export default function Accreditation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const badges = [
    { icon: Building2, title: "Autonomous College", desc: "Permanently Affiliated to VTU", color: "from-cyan-400 to-blue-500" },
    { icon: CheckCircle, title: "AICTE & UGC", desc: "Approved by All India Council", color: "from-purple-400 to-pink-500" },
    { icon: Award, title: "NBA Accredited", desc: "National Board of Accreditation", color: "from-green-400 to-teal-500" },
    { icon: Globe, title: "NAAC 'A' Grade", desc: "Accredited by NAAC", color: "from-amber-400 to-orange-500" },
  ];

  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 tech-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Accreditations & Affiliations
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            The College Campus is set amidst halcyon surroundings, enveloped by fresh air and greenery
            on the outer ring road of Bangalore, away from the hustle and bustle of the city.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center cursor-pointer"
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{badge.title}</h3>
                <p className="text-gray-500 text-sm">{badge.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}