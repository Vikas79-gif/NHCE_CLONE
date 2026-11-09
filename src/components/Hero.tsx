"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides, heroStats } from "@/data/content";

// Deterministic pseudo-random based on index — computed at module level
// so values are identical between SSR and client, but we skip SSR rendering
// entirely via `mounted` to avoid hydration precision mismatches.
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

// Pre-computed once at module load — same values on server and client
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  key: i,
  left: `${seededRandom(i * 3) * 100}%`,
  top: `${seededRandom(i * 3 + 1) * 100}%`,
  delay: `${seededRandom(i * 3 + 2) * 6}s`,
  duration: `${4 + seededRandom(i * 3) * 4}s`,
}));

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const slide = heroSlides[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>

      {/* Floating Particles — rendered client-only to avoid SSR/hydration mismatch */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && PARTICLES.map((p) => (
          <div
            key={p.key}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-cyan-400/30 mb-8"
        >
          <Zap className="w-4 h-4 text-cyan-400 mr-2" />
          <span className="text-cyan-400 text-sm font-medium">
            Autonomous • VTU Affiliated • AICTE Approved • NAAC 'A' Grade
          </span>
        </motion.div>

        {/* Slide Heading with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4">
              {slide.titleLines.map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <span className="gradient-text neon-glow">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>
          </motion.div>
        </AnimatePresence>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {slide.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            href={slide.ctaPrimary.href}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-cyan-400/30 flex items-center space-x-2 hover:-translate-y-1"
          >
            <span>{slide.ctaPrimary.text}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={slide.ctaSecondary.href}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all duration-200 border border-white/20 backdrop-blur-sm hover:border-cyan-400/50"
          >
            {slide.ctaSecondary.text}
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-16"
        >
          {heroStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="glass-card p-4 stat-card"
            >
              <div className="text-2xl md:text-3xl font-black text-cyan-400 mb-1">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mb-8">
          {heroSlides.map((_s, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 bg-cyan-400"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Swipe hint */}
      <div className="hidden md:block absolute bottom-20 left-4 text-gray-500 text-xs">
        ← Swipe →
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
