"use client";

import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/content";

type FilterKey = "All" | "B.Tech" | "M.Tech" | "MBA" | "MCA";

const filterOptions: FilterKey[] = ["All", "B.Tech", "M.Tech", "MBA", "MCA"];

export default function Testimonials() {
  const ref = useRef(null);
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredTestimonials = testimonials.filter((t) => {
    if (activeFilter === "All") return true;
    return t.role.startsWith(activeFilter);
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 tech-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-pink-500/10 text-pink-400 rounded-full text-sm font-semibold mb-4 border border-pink-500/20">
            Student Voices
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Hear from our <span className="gradient-text">Alumni</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Success stories from our graduates making impact worldwide
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => { setActiveFilter(filter); setCurrentIndex(0); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-cyan-400 text-slate-950"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter + currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
            >
              <Quote className="w-12 h-12 text-purple-400/50 mb-6" />
              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-8 italic">
                "{filteredTestimonials[currentIndex]?.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={filteredTestimonials[currentIndex]?.image}
                  alt={filteredTestimonials[currentIndex]?.name}
                  className="w-16 h-16 rounded-full border-2 border-cyan-400/30"
                />
                <div>
                  <h4 className="font-bold text-white text-lg">
                    {filteredTestimonials[currentIndex]?.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {filteredTestimonials[currentIndex]?.role}
                  </p>
                  <p className="text-cyan-400 text-sm font-medium">
                    {filteredTestimonials[currentIndex]?.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {filteredTestimonials.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-cyan-400/20 hover:bg-cyan-400/30 rounded-full flex items-center justify-center transition-colors hidden md:flex"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-cyan-400" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-cyan-400/20 hover:bg-cyan-400/30 rounded-full flex items-center justify-center transition-colors hidden md:flex"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-cyan-400" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-cyan-400"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
