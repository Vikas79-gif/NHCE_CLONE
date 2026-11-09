"use client";

import { useRef } from "react";
import Link from "next/link";
import { Eye, Camera, MapPin, TreePine, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { campusImages } from "@/data/content";
import { getIcon } from "@/data/icons";

export default function CampusView() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 tech-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-semibold mb-4 border border-green-500/20">
              Campus Tour
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              NHCE Campus
              <span className="block gradient-text">At a Glance</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              NHCE has an impressive history of providing innovative education, with a vision and mission
              to impart holistic education to all its students. The campus is designed to inspire
              creativity and foster academic excellence.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "Eye", title: "360° View", desc: "Virtual campus tour" },
                { icon: "Camera", title: "Photo Gallery", desc: "Campus moments" },
                { icon: "MapPin", title: "Location", desc: "Bellandur, Bengaluru" },
                { icon: "TreePine", title: "Green Campus", desc: "Eco-friendly environment" },
              ].map((item, index) => (
                <div key={index} className="glass-card p-4 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                    {getIcon(item.icon, "w-5 h-5 text-cyan-400")}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-xl font-bold transition-all duration-200 hover:shadow-2xl hover:shadow-cyan-400/30 hover:-translate-y-0.5"
            >
              <span>Explore Campus Moments</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {campusImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group ${img.span || ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
