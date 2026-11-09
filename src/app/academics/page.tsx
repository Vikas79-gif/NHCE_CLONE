import Link from "next/link";
import { BookOpen, GraduationCap, Microscope, Award, ArrowRight, Sparkles } from "lucide-react";

const ugPrograms = [
  { id: "computer-science", code: "CSE", full: "Computer Science & Engineering", semesters: 8, color: "from-cyan-400 to-blue-500" },
  { id: "ai-ml", code: "AI&ML", full: "Artificial Intelligence & Machine Learning", semesters: 8, color: "from-purple-400 to-pink-500" },
  { id: "electronics", code: "ECE", full: "Electronics & Communication", semesters: 8, color: "from-green-400 to-teal-500" },
  { id: "electrical", code: "EEE", full: "Electrical & Electronics", semesters: 8, color: "from-amber-400 to-orange-500" },
  { id: "mechanical", code: "ME", full: "Mechanical Engineering", semesters: 8, color: "from-red-400 to-pink-500" },
  { id: "civil", code: "CE", full: "Civil Engineering", semesters: 8, color: "from-indigo-400 to-purple-500" },
  { id: "ai-ds", code: "AI&DS", full: "AI & Data Science", semesters: 8, color: "from-sky-400 to-blue-500" },
  { id: "bca", code: "BCA", full: "Bachelor of Computer Applications", semesters: 6, color: "from-emerald-400 to-cyan-500" },
];

const pgPrograms = [
  { id: "mtech-cse", code: "M.Tech CSE", full: "M.Tech Computer Science & Engineering", duration: "2 Years", color: "from-cyan-400 to-blue-500" },
  { id: "mtech-vlsi", code: "M.Tech VLSI", full: "M.Tech VLSI Design & Embedded Systems", duration: "2 Years", color: "from-purple-400 to-pink-500" },
  { id: "mtech-structural", code: "M.Tech Structural", full: "M.Tech Structural Engineering", duration: "2 Years", color: "from-indigo-400 to-purple-500" },
  { id: "mba-program", code: "MBA", full: "Master of Business Administration", duration: "2 Years", color: "from-amber-400 to-orange-500" },
  { id: "mca-program", code: "MCA", full: "Master of Computer Applications", duration: "2 Years", color: "from-emerald-400 to-teal-500" },
];

const departments = [
  { name: "Computer Science & Engineering", count: "8 Labs • 45 Faculty" },
  { name: "Artificial Intelligence & Machine Learning", count: "6 Labs • 28 Faculty" },
  { name: "Electronics & Communication", count: "10 Labs • 38 Faculty" },
  { name: "Electrical & Electronics", count: "7 Labs • 24 Faculty" },
  { name: "Mechanical Engineering", count: "12 Labs • 32 Faculty" },
  { name: "Civil Engineering", count: "8 Labs • 20 Faculty" },
  { name: "Basic Sciences & Humanities", count: "6 Labs • 30 Faculty" },
  { name: "Management Studies (MBA)", count: "4 Centers • 22 Faculty" },
];

export default function Academics() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-semibold mb-6 border border-cyan-400/20">
            Academic Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Future-Ready
            <span className="block gradient-text">Engineering Education</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Autonomous curriculum benchmarked with top global universities, designed in collaboration
            with leading industry tech giants.
          </p>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 bg-slate-900 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, label: "UG Programs", value: "8+", color: "text-cyan-400" },
              { icon: GraduationCap, label: "PG Programs", value: "5", color: "text-purple-400" },
              { icon: Microscope, label: "Ph.D. Centers", value: "6", color: "text-emerald-400" },
              { icon: Award, label: "NBA Accredited", value: "5 Depts", color: "text-amber-400" },
            ].map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="glass-card p-6 text-center">
                  <Icon className={`w-8 h-8 ${card.color} mx-auto mb-3`} />
                  <div className="text-3xl font-black text-white mb-1">{card.value}</div>
                  <div className="text-gray-400 text-sm">{card.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UG Programs */}
      <section id="ug-programs" className="py-20 bg-slate-950 relative overflow-hidden" style={{ scrollMarginTop: "80px" }}>
        <div className="absolute inset-0 tech-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20">
              <BookOpen className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Undergraduate Programs (B.Tech)</h2>
              <p className="text-gray-400 text-sm">4-Year Autonomous Degree Programs affiliated with VTU</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ugPrograms.map((program) => (
              <div
                key={program.code}
                id={program.id}
                className="glass-card p-6 flex flex-col justify-between hover:border-cyan-400/50 transition-all group"
                style={{ scrollMarginTop: "90px" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-cyan-400 group-hover:neon-glow transition-all">
                      {program.code}
                    </span>
                    <span className="text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {program.semesters} Semesters
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {program.full}
                  </h3>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-cyan-400 font-medium">B.Tech Honors Available</span>
                  <Link
                    href="/admissions"
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PG Programs */}
      <section id="pg-programs" className="py-20 bg-slate-900 relative overflow-hidden" style={{ scrollMarginTop: "80px" }}>
        <div className="absolute inset-0 grid-bg opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center border border-purple-400/20">
              <GraduationCap className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Postgraduate Programs</h2>
              <p className="text-gray-400 text-sm">M.Tech, MBA & MCA Advanced Degrees</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pgPrograms.map((program) => (
              <div
                key={program.code}
                id={program.id}
                className="glass-card p-6 flex flex-col justify-between hover:border-purple-400/50 transition-all group"
                style={{ scrollMarginTop: "90px" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-purple-400">{program.code}</span>
                    <span className="text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {program.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {program.full}
                  </h3>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-purple-400 font-medium">Industry Aligned</span>
                  <Link
                    href="/admissions"
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-white hover:text-purple-400 transition-colors"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ph.D. & Research Section */}
      <section id="phd-program" className="py-20 bg-slate-950 relative overflow-hidden" style={{ scrollMarginTop: "80px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card p-8 md:p-12 border-cyan-400/30">
            <div className="flex items-center space-x-3 mb-6">
              <Microscope className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-white">Ph.D. & Research Programs</h2>
            </div>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl leading-relaxed">
              NHCE is recognized as a premier Research Centre by Visvesvaraya Technological University (VTU).
              Our research scholars and faculty work on cutting-edge problems funded by DST, AICTE, and multinational partners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <span className="text-cyan-400 font-black text-3xl block mb-2">120+</span>
                <span className="text-gray-300 font-semibold block">Patents Filed</span>
                <span className="text-gray-500 text-xs">National and international patents</span>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <span className="text-cyan-400 font-black text-3xl block mb-2">1,500+</span>
                <span className="text-gray-300 font-semibold block">Research Papers</span>
                <span className="text-gray-500 text-xs">Published in Scopus & IEEE indexed journals</span>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <span className="text-cyan-400 font-black text-3xl block mb-2">₹10 Cr+</span>
                <span className="text-gray-300 font-semibold block">Research Grants</span>
                <span className="text-gray-500 text-xs">Funded by government and industry bodies</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all"
            >
              <span>Research Admissions Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section id="departments" className="py-20 bg-slate-900 relative overflow-hidden" style={{ scrollMarginTop: "80px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Academic Departments</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Equipped with modern laboratories, smart classrooms, and dedicated research facilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <div key={index} className="glass-card p-5 hover:border-cyan-400/50 transition-all cursor-pointer group">
                <h3 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {dept.name}
                </h3>
                <p className="text-xs text-gray-500">{dept.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Sparkles className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join NHCE?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards your high-impact engineering career. Admissions open for 2025-26.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="px-8 py-3.5 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-cyan-400/30 transition-all"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white/5 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
