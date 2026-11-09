"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { placementPartners } from "@/data/content";

export default function PlacementPartners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 bg-slate-950 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Our Placement Partners
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leading companies that recruit from NHCE campus
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={isInView ? { x: "-50%" } : {}}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex space-x-6 w-max"
          >
            {[...placementPartners, ...placementPartners].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="glass-card flex flex-col items-center justify-center p-6 min-w-[140px] h-[120px] cursor-pointer group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-3 group-hover:from-cyan-400/30 group-hover:to-purple-600/30 transition-all">
                  <span className="text-3xl font-black text-cyan-400">{partner.initial}</span>
                </div>
                <span className="text-gray-300 text-sm font-medium text-center">{partner.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
