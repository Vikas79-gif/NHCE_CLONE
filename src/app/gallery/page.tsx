"use client";

import { useState } from "react";
import { Camera, Image as ImageIcon } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
    title: "Main Campus Architectural Center",
    category: "Campus",
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
    title: "Annual Convocation & Graduation",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df9010be1f4?w=600&h=400&fit=crop",
    title: "Central Digital Library & Study Hub",
    category: "Facilities",
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
    title: "Interactive Smart Classrooms",
    category: "Academics",
  },
  {
    src: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=600&h=400&fit=crop",
    title: "AICTE IDEA & Robotics Lab",
    category: "Labs",
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop",
    title: "Sports Stadium & Outdoor Arena",
    category: "Sports",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    title: "Sargam International Auditorium",
    category: "Facilities",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    title: "Cloud Computing & Data Science Center",
    category: "Labs",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    title: "Hackathons & Student Technical Clubs",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
    title: "Conference & Executive Seminar Hall",
    category: "Facilities",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    title: "Sargam Cultural Fest Highlights",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=600&h=400&fit=crop",
    title: "Advanced VLSI & Automation Lab",
    category: "Labs",
  },
];

const categories = ["All", "Campus", "Events", "Facilities", "Labs", "Sports", "Academics"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-semibold mb-6 border border-cyan-400/20">
            Life at NHCE
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Campus
            <span className="block gradient-text">Moments & Highlights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience our vibrant campus culture, state-of-the-art infrastructure, sports arenas,
            and memorable student festivals.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 tech-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-400 to-purple-600 text-white shadow-lg shadow-cyan-400/20"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] glass-card cursor-pointer border border-white/10 hover:border-cyan-400/50 transition-all"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center space-x-2 text-cyan-400 mb-2">
                    <Camera className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">{image.category}</span>
                  </div>
                  <h3 className="text-white font-bold text-base leading-tight">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
