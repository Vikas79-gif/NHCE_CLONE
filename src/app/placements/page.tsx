import Link from "next/link";
import { TrendingUp, Building2, Award, Users, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

const placementStats = [
  { icon: TrendingUp, number: "₹50 LPA", label: "Highest Package", desc: "Top tech tier placements" },
  { icon: Building2, number: "₹8.5 LPA", label: "Average Package", desc: "Across all engineering disciplines" },
  { icon: Award, number: "350+", label: "Partner Recruiters", desc: "Top Fortune 500 & MNC companies" },
  { icon: Users, number: "95%+", label: "Placement Rate", desc: "Consistent track record year after year" },
];

const companyLogos = [
  { name: "Google", sector: "Cloud & AI", tier: "Dream" },
  { name: "Microsoft", sector: "Software & Cloud", tier: "Dream" },
  { name: "Amazon", sector: "E-Commerce & AWS", tier: "Dream" },
  { name: "Adobe", sector: "Creative Cloud & AI", tier: "Dream" },
  { name: "Intel", sector: "Semiconductors & VLSI", tier: "Dream" },
  { name: "Samsung", sector: "R&D & Hardware", tier: "Tier-1" },
  { name: "Flipkart", sector: "E-Commerce & Supply Chain", tier: "Tier-1" },
  { name: "Deloitte", sector: "Technology Consulting", tier: "Tier-1" },
  { name: "TCS", sector: "IT Services & Digital", tier: "Mass" },
  { name: "Infosys", sector: "Enterprise Solutions", tier: "Mass" },
  { name: "Wipro", sector: "Cloud & Cybersecurity", tier: "Mass" },
  { name: "Capgemini", sector: "Consulting & Tech", tier: "Mass" },
];

export default function Placements() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-semibold mb-6 border border-cyan-400/20">
            Career & Placement Cell
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Industry Placements &
            <span className="block gradient-text">Career Success</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connecting aspiring engineers with global technology leaders through structured industry training,
            hackathons, and on-campus recruitment drives.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-20 bg-slate-950 relative overflow-hidden border-b border-white/10" style={{ scrollMarginTop: "80px" }}>
        <div className="absolute inset-0 tech-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-8 text-center hover:border-cyan-400/50 transition-all group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="text-4xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-lg font-bold text-gray-200 mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section id="recruiters" className="py-20 bg-slate-900 relative overflow-hidden" style={{ scrollMarginTop: "80px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Top Corporate Recruiters
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our graduates are employed by world-renowned technology companies and multinational innovators
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="glass-card p-6 flex flex-col justify-between hover:border-cyan-400/40 transition-all cursor-pointer group"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {company.name}
                    </h3>
                    <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                      {company.tier}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">{company.sector}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center text-xs text-gray-500 group-hover:text-cyan-400 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-cyan-400" />
                  <span>Verified Campus Recruiter</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Structured Placement Roadmap
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From day one, our comprehensive training equips students with both technical proficiency and professional acumen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Technical Bootcamps",
                desc: "DSA, full-stack, cloud computing, AI tools, and competitive programming workshops.",
              },
              {
                step: "02",
                title: "Pre-Placement Training",
                desc: "Mock interviews, resume clinics, communication coaching, and behavioral assessments.",
              },
              {
                step: "03",
                title: "Campus Drives",
                desc: "Dedicated placement weeks with 350+ recruiting organizations conducting on-campus tests.",
              },
              {
                step: "04",
                title: "Offer & Transition",
                desc: "Offer letter onboarding, corporate readiness transition, and high-impact internship commencement.",
              },
            ].map((item, index) => (
              <div key={index} className="glass-card p-8 text-center relative group">
                <div className="text-5xl font-black text-cyan-400/20 group-hover:text-cyan-400/40 mb-3 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-16 h-16 bg-cyan-400/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-400/20">
            <Phone className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Corporate Relations & Placement Office
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Are you a recruiter looking to hire talented engineers? Connect with our Training and Placement Cell today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918066297777"
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-xl font-bold transition-all hover:shadow-xl hover:shadow-cyan-400/30 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>+91-80-6629-7777</span>
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all border border-white/20 flex items-center justify-center space-x-2"
            >
              <span>Contact Placement Office</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
