"use client";

import { useRef } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { latestNews } from "@/data/content";

export default function LatestNews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <span className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold mb-4 border border-amber-500/20">
              <Newspaper className="w-4 h-4" />
              <span>Latest News</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Campus Updates & Events
            </h2>
          </div>
          <Link href="/about" className="hidden md:flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors">
            <span>View All Highlights</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card overflow-hidden cursor-pointer group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500/80 text-white text-xs rounded-full font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-400 text-sm">{item.date}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-4 leading-tight group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-2 text-cyan-400 text-sm font-medium">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/about" className="inline-flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors">
            <span>View All Highlights</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
