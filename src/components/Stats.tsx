"use client";

import { useRef, useState, useEffect } from "react";
import { Users, Award, Building2, TrendingUp, FileText, Star, GraduationCap, Lightbulb } from "lucide-react";
import { motion, useInView } from "framer-motion";

const stats = [
  { icon: Users, number: 15000, suffix: "+", label: "Students", description: "Active enrollment across all programs" },
  { icon: Award, number: 95, suffix: "%", label: "Placement Rate", description: "Annual placement success rate" },
  { icon: Building2, number: 200, suffix: "+", label: "Industry Partners", description: "Corporate collaborations" },
  { icon: TrendingUp, number: 500, suffix: "+", label: "Research Papers", description: "Published annually" },
  { icon: FileText, number: 50, suffix: "+", label: "Patents Filed", description: "Innovation & research output" },
  { icon: Star, number: 25, suffix: "+", label: "Years of Excellence", description: "Legacy of quality education" },
  { icon: GraduationCap, number: 25000, suffix: "+", label: "Alumni Network", description: "Global alumni community" },
  { icon: Lightbulb, number: 100, suffix: "+", label: "Innovative Projects", description: "Student-led initiatives" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [hasAnimated, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-400/20">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Two decades of excellence in engineering education and research
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-8 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-cyan-400/30 group-hover:to-purple-600/30 transition-all">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-5xl font-black text-white mb-2">
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-xl font-semibold text-cyan-400 mb-2">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
