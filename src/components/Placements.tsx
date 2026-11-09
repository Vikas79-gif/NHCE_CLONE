"use client";

import { useRef } from "react";
import { TrendingUp, Award, Building2, Users, Briefcase } from "lucide-react";
import { motion, useInView } from "framer-motion";

const placementHighlights = [
  { icon: TrendingUp, number: "₹50 LPA", label: "Highest Package", desc: "Offered in recent placements" },
  { icon: Award, number: "₹6 LPA", label: "Average Package", desc: "Across all branches" },
  { icon: Building2, number: "350+", label: "Companies Visited", desc: "For campus recruitment" },
  { icon: Users, number: "2,500+", label: "Offers Made", desc: "In the last placement drive" },
  { icon: Briefcase, number: "95%", label: "Placement Rate", desc: "Consistent track record" },
];

const companies = [
  "Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro",
  "Accenture", "Deloitte", "Cognizant", "HCL", "Tech Mahindra",
  "Capgemini", "IBM", "Oracle", "Adobe", "Flipkart", "Paytm",
  "Zomato", "Myntra", "PhonePe",
];

const process = [
  { step: "01", title: "Training", desc: "Skill development, aptitude training & mock interviews" },
  { step: "02", title: "Pre-Placement", desc: "Resume building, communication skills & personality development" },
  { step: "03", title: "Recruitment", desc: "Campus interviews, online tests & group discussions" },
  { step: "04", title: "Selection", desc: "Offer letters, joining formalities & career launch" },
];

export default function Placements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="placements" className="section bg-slate-950 relative overflow-hidden" ref={ref} style={{ scrollMarginTop: "80px" }}>
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-semibold mb-4 border border-amber-500/20">
            Placements & Careers
          </span>
          <h2 className="section-title">Your Gateway to Top Careers</h2>
          <p className="section-subtitle">
            Our dedicated Training & Placement Cell ensures every student gets the opportunity
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20"
        >
          {placementHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>
                <div className="text-3xl font-black text-white mb-2">{item.number}</div>
                <div className="text-lg font-bold text-cyan-400 mb-1">{item.label}</div>
                <div className="text-gray-500 text-sm">{item.desc}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Companies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="glass-card p-10 mb-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Our Placement Partners</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {companies.map((company, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2.5 bg-white/5 text-gray-300 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-950 transition-all duration-200 cursor-pointer text-sm"
              >
                {company}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">Placement Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-6xl font-black text-white/10 mb-4">{item.step}</div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
