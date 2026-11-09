"use client";

import { useRef } from "react";
import {
  Library,
  Dumbbell,
  Utensils,
  Bus,
  Monitor,
  Hospital,
  TreePine,
  Wifi,
  Building,
  Home,
  Camera,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const facilities = [
  { icon: Library, title: "Central Library", desc: "50,000+ books, digital resources & reading rooms" },
  { icon: Dumbbell, title: "Sports Complex", desc: "Indoor & outdoor facilities for multiple sports" },
  { icon: Utensils, title: "Cafeteria", desc: "Spacious dining with hygienic multi-cuisine food" },
  { icon: Bus, title: "Transport", desc: "20+ buses covering all major routes in Bangalore" },
  { icon: Monitor, title: "Smart Classrooms", desc: "AV-enabled classrooms with e-learning tools" },
  { icon: Hospital, title: "Health Center", desc: "On-campus medical facility with trained staff" },
  { icon: TreePine, title: "Green Campus", desc: "Set amidst halcyon surroundings on Bellandur Main Road" },
  { icon: Wifi, title: "Wi-Fi Enabled", desc: "Campus-wide high-speed internet connectivity" },
  { icon: Building, title: "Hostels", desc: "Separate residential facilities for boys & girls" },
  { icon: Home, title: "Auditorium", desc: "State-of-the-art 2000+ seater auditorium" },
  { icon: Camera, title: "Photo Studio", desc: "Professional photography & video production" },
  { icon: Library, title: "Innovation Hub", desc: "Incubation center for student startups" },
];

const campusImages = [
  { src: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop", title: "Main Campus", category: "Campus" },
  { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop", title: "Graduation Day", category: "Events" },
  { src: "https://images.unsplash.com/photo-1523050854058-8df9010be1f4?w=600&h=400&fit=crop", title: "Library", category: "Facilities" },
  { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop", title: "Classroom", category: "Academics" },
  { src: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=600&h=400&fit=crop", title: "Science Lab", category: "Labs" },
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop", title: "Sports Ground", category: "Sports" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop", title: "Seminar Hall", category: "Facilities" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop", title: "Computer Lab", category: "Labs" },
];

export default function Campus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="campus" className="section bg-slate-900 relative overflow-hidden" ref={ref} style={{ scrollMarginTop: "80px" }}>
      <div className="absolute inset-0 tech-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="inline-block px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-semibold mb-4 border border-green-500/20">
            Campus Life
          </span>
          <h2 className="section-title">World-Class Infrastructure</h2>
          <p className="section-subtitle">
            Our campus is set amidst halcyon surroundings, enveloped by fresh air and greenery
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20"
        >
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{facility.title}</h3>
                <p className="text-gray-500 text-xs">{facility.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Campus Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {campusImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-bold">{image.title}</h4>
                    <span className="text-cyan-400 text-sm">{image.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
