import { BookOpen, GraduationCap, Microscope, Award, Clock } from "lucide-react";

const ugPrograms = [
  { code: "CSE", full: "Computer Science & Engineering", semesters: 8 },
  { code: "AI&ML", full: "Artificial Intelligence & Machine Learning", semesters: 8 },
  { code: "ECE", full: "Electronics & Communication", semesters: 8 },
  { code: "EEE", full: "Electrical & Electronics", semesters: 8 },
  { code: "ME", full: "Mechanical Engineering", semesters: 8 },
  { code: "CE", full: "Civil Engineering", semesters: 8 },
  { code: "AIDS", full: "AI & Data Science", semesters: 8 },
  { code: "BCA", full: "Bachelor of Computer Applications", semesters: 6 },
];

const pgPrograms = [
  { code: "M.Tech CSE", full: "M.Tech Computer Science", duration: "2 Years" },
  { code: "M.Tech VLSI", full: "M.Tech VLSI Design", duration: "2 Years" },
  { code: "M.Tech_structural", full: "M.Tech Structural Engineering", duration: "2 Years" },
  { code: "MBA", full: "Master of Business Administration", duration: "2 Years" },
  { code: "MCA", full: "Master of Computer Applications", duration: "2 Years" },
];

const departments = [
  "Computer Science & Engineering",
  "Artificial Intelligence & Machine Learning",
  "Electronics & Communication",
  "Electrical & Electronics",
  "Mechanical Engineering",
  "Civil Engineering",
  "Basic Sciences & Humanities",
  "Management Studies",
];

export default function Academics() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 text-amber-400 rounded-full text-sm font-semibold mb-6 border border-white/20">
            Academics
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Academic
            <span className="block text-amber-400">Excellence</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive programs designed to meet industry demands and
            prepare students for successful careers.
          </p>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                label: "UG Programs",
                value: "8+",
                color: "blue",
              },
              {
                icon: GraduationCap,
                label: "PG Programs",
                value: "5",
                color: "amber",
              },
              { icon: Microscope, label: "Ph.D. Centers", value: "6", color: "green" },
              {
                icon: Award,
                label: "NBA Accredited",
                value: "5 Depts",
                color: "purple",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl text-center shadow-sm"
              >
                <card.icon className="w-8 h-8 text-blue-900 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900">
                  {card.value}
                </div>
                <div className="text-slate-600">{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UG Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <BookOpen className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-slate-900">
              Undergraduate Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ugPrograms.map((prog, index) => (
              <div
                key={index}
                className="p-6 bg-slate-50 rounded-2xl hover:bg-blue-900 hover:text-white transition-all duration-300 cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-2xl font-bold text-blue-900 group-hover:text-amber-400 transition-colors">
                    {prog.code}
                  </span>
                  <Clock className="w-5 h-5 text-slate-400 group-hover:text-amber-400" />
                </div>
                <p className="text-sm text-slate-600 group-hover:text-blue-100">
                  {prog.full}
                </p>
                <p className="mt-4 text-xs text-slate-500 group-hover:text-blue-200">
                  {prog.semesters} Semesters • B.Tech
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PG Programs */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <GraduationCap className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-slate-900">
              Postgraduate Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pgPrograms.map((prog, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-xl font-bold text-blue-900 mb-2">
                  {prog.code}
                </div>
                <p className="text-slate-600 text-sm mb-3">{prog.full}</p>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                  {prog.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Departments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="p-4 bg-slate-50 rounded-xl text-center hover:bg-blue-50 hover:text-blue-900 transition-colors cursor-pointer font-medium"
              >
                {dept}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
