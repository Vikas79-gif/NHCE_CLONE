"use client";

import { useEffect, useRef } from "react";
import { Award, Building2, Users, Lightbulb, Globe, BookOpen, TrendingUp, Target } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const accreditations = [
    { icon: Award, name: "NAAC 'A' Grade", desc: "Accredited by NAAC", color: "from-cyan-400 to-blue-500" },
    { icon: Building2, name: "AICTE & UGC", desc: "Approved by All India Council", color: "from-purple-400 to-pink-500" },
    { icon: Globe, name: "VTU Affiliated", desc: "Visvesvaraya Technological University", color: "from-green-400 to-teal-500" },
    { icon: Lightbulb, name: "Autonomous College", desc: "Permanently affiliated to VTU", color: "from-amber-400 to-orange-500" },
  ];

  const features = [
    { icon: Users, title: "15,000+ Students", desc: "Diverse student body from across India" },
    { icon: BookOpen, title: "500+ Faculty", desc: "Experienced and dedicated professors" },
    { icon: Target, title: "State-of-the-Art Labs", desc: "Modern equipment and facilities" },
    { icon: TrendingUp, title: "95% Placements", desc: "Consistent placement record" },
  ];

  const milestones = [
    { year: "1970", event: "NHEI established as a group of premier institutions" },
    { year: "1998", event: "NHCE founded as an engineering college" },
    { year: "2005", event: "Expanded to 10+ departments" },
    { year: "2010", event: "NAAC Accredited with 'A' Grade" },
    { year: "2015", event: "Introduced MBA & MCA programs" },
    { year: "2024", event: "10+ departments, 500+ faculty, 200+ industry partners" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section bg-slate-950 relative overflow-hidden" ref={ref} style={{ scrollMarginTop: "80px" }}>
      <div className="absolute inset-0 tech-pattern opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="inline-block px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-400/20">
            About NHCE
          </span>
          <h2 className="section-title">Our Legacy of Excellence</h2>
          <p className="section-subtitle">
            For over 55 years, New Horizon Educational Institutions Group has been at the forefront of technical education
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Mission & Vision */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass-card p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                To provide quality technical education that empowers students with knowledge, skills, and values
                to become innovative leaders and responsible citizens in a globalized world. We are committed to
                fostering an environment of academic excellence, research, and holistic development.
              </p>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                To be recognized as a premier institution of technical education and research, known for producing
                competent engineers and managers who contribute meaningfully to society and drive technological
                advancement globally.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="glass-card p-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Accreditations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Accreditations & Affiliations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {accreditations.map((acc, index) => {
              const Icon = acc.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 text-center cursor-pointer"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${acc.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">{acc.name}</h4>
                  <p className="text-gray-500 text-sm">{acc.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="relative"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="glass-card p-6 inline-block">
                    <span className="text-cyan-400 font-black text-2xl">{milestone.year}</span>
                    <p className="text-gray-400 mt-2">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-950 shadow-lg shadow-cyan-400/50"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
