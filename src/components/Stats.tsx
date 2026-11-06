"use client";

import { useEffect, useState } from "react";
import { Users, Award, Building2, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: 15000,
    suffix: "+",
    label: "Students",
    description: "Active enrollment across all programs",
  },
  {
    icon: Award,
    number: 95,
    suffix: "%",
    label: "Placement Rate",
    description: "Annual placement success rate",
  },
  {
    icon: Building2,
    number: 50,
    suffix: "+",
    label: "Industry Partners",
    description: "Corporate collaborations",
  },
  {
    icon: TrendingUp,
    number: 500,
    suffix: "+",
    label: "Research Papers",
    description: "Published annually",
  },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-blue-900 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-xl font-semibold text-amber-400 mb-2">
                  {stat.label}
                </div>
                <div className="text-blue-200 text-sm">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
