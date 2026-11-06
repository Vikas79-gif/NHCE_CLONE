import { BookOpen, Microscope, Briefcase, GraduationCap, Lightbulb } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "B.Tech Programs",
    description:
      "4-year undergraduate programs in 10+ specializations including Computer Science, AI/ML, Civil, Mechanical, and Electronics.",
    tags: ["10+ Specializations", "VTU Affiliated", "NBA Accredited"],
  },
  {
    icon: Microscope,
    title: "M.Tech Programs",
    description:
      "Advanced 2-year postgraduate programs with specialized tracks in cutting-edge technologies and research domains.",
    tags: ["Research Focused", "Industry Projects", "Thesis Based"],
  },
  {
    icon: Briefcase,
    title: "MBA Program",
    description:
      "2-year management program designed to develop leadership skills with industry-integrated curriculum and live projects.",
    tags: ["AICTE Approved", "Industry Connect", "Leadership Focus"],
  },
  {
    icon: GraduationCap,
    title: "Ph.D. Programs",
    description:
      "Doctoral programs across disciplines with dedicated research centers and guidance from experienced faculty.",
    tags: ["Research Centers", "Fellowship Support", "Publication Ready"],
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    description:
      "State-of-the-art research facilities, innovation labs, and collaboration with industry partners for applied research.",
    tags: ["15+ Labs", "Patents Filed", "Industry collab"],
  },
];

export default function Programs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-900 rounded-full text-sm font-semibold mb-4">
            Academic Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            World-Class Education
            <span className="text-blue-900"> Across Disciplines</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from a range of programs designed to prepare you for the
            challenges of tomorrow, taught by distinguished faculty.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-slate-50 rounded-2xl hover:bg-blue-900 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 cursor-pointer"
              >
                <div className="w-14 h-14 bg-blue-100 group-hover:bg-amber-500 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-blue-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white mb-4 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-slate-600 group-hover:text-blue-100 mb-6 leading-relaxed transition-colors duration-300">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {program.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white group-hover:bg-amber-500 text-slate-600 group-hover:text-white text-sm rounded-full transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
