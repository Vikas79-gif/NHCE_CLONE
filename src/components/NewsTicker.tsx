"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronRight, Bell } from "lucide-react";
import { newsItems } from "@/data/content";

export default function NewsTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setOffset((prev) => {
        const totalWidth = tickerRef.current?.offsetWidth || 0;
        // Reset when we've scrolled enough to show duplicate content
        if (Math.abs(prev) >= totalWidth / 2) {
          return 0;
        }
        return prev - 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="bg-slate-900/80 backdrop-blur-md border-y border-cyan-400/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="flex items-center space-x-2 bg-cyan-500 text-slate-950 px-4 py-2 rounded-r-lg font-bold text-sm shrink-0">
            <Bell className="w-4 h-4" />
            <span>LATEST NEWS</span>
          </div>

          <div
            ref={tickerRef}
            className="overflow-hidden flex-1 cursor-pointer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex whitespace-nowrap py-2"
              style={{ transform: `translateX(${offset}px)` }}
            >
              {[...newsItems, ...newsItems].map((item, index) => (
                <div key={index} className="inline-flex items-center space-x-2 mx-8">
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                  <a href={item.link} className="text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                    {item.headline}
                  </a>
                  <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded text-xs">
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 shrink-0 pl-4">
            <a href="/admissions" className="px-3 py-1.5 bg-cyan-400/20 text-cyan-400 rounded-lg text-xs font-semibold hover:bg-cyan-400/30 transition-colors">
              Admission Enquiry
            </a>
            <a href="/admissions" className="px-3 py-1.5 bg-cyan-400/20 text-cyan-400 rounded-lg text-xs font-semibold hover:bg-cyan-400/30 transition-colors">
              Admission Form
            </a>
            <a href="#" className="px-3 py-1.5 bg-cyan-400/20 text-cyan-400 rounded-lg text-xs font-semibold hover:bg-cyan-400/30 transition-colors">
              Brochure
            </a>
            <a href="tel:9880534935" className="px-3 py-1.5 bg-amber-500/20 text-amber-400 rounded-lg text-xs font-semibold hover:bg-amber-500/30 transition-colors">
              Hotline
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
