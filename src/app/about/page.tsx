import { CheckCircle, Award, Building2, Users, BookOpen, Globe } from "lucide-react";

export default function About() {
  const accreditations = [
    { icon: Award, name: "NAAC A++", desc: "Highest accreditation grade" },
    { icon: CheckCircle, name: "AICTE Approved", desc: "Approved by All India Council" },
    { icon: Building2, name: "VTU Affiliated", desc: "Visvesvaraya Technological University" },
    { icon: Globe, name: "ISO Certified", desc: "Quality management certified" },
  ];

  const milestones = [
    { year: "1998", event: "Founded with 3 engineering branches" },
    { year: "2005", event: "Expanded to 8 departments" },
    { year: "2010", event: "NAAC Accredited with A Grade" },
    { year: "2015", event: "Introduced MBA & MCA programs" },
    { year: "2018", event: "NAAC upgraded to A++ Grade" },
    { year: "2024", event: "15,000+ students & 95% placements" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-white/10 text-amber-400 rounded-full text-sm font-semibold mb-6 border border-white/20">
              About NHCE
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Legacy of
              <span className="block text-amber-400">Excellence</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              For over 25 years, New Horizon College of Engineering has been at
              the forefront of technical education, nurturing minds and building
              futures.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-100">
              <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-amber-400" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Mission
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To provide quality technical education that empowers students
                with knowledge, skills, and values to become innovative leaders
                and responsible citizens in a globalized world. We are committed
                to fostering an environment of academic excellence, research,
                and holistic development.
              </p>
            </div>
            <div className="p-10 bg-gradient-to-br from-amber-50 to-white rounded-3xl border border-amber-100">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Vision
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be recognized as a premier institution of technical education
                and research, known for producing competent engineers and
                managers who contribute meaningfully to society and drive
                technological advancement globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Accreditations & Affiliations
            </h2>
            <p className="text-xl text-slate-600">
              Recognized and accredited by leading educational bodies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {accreditations.map((acc, index) => {
              const Icon = acc.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {acc.name}
                  </h3>
                  <p className="text-slate-600 text-sm">{acc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "25+", label: "Years of Excellence" },
              { number: "15,000+", label: "Students" },
              { number: "500+", label: "Faculty Members" },
              { number: "100+", label: "Courses Offered" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold text-amber-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-slate-50 p-6 rounded-2xl inline-block">
                    <span className="text-amber-500 font-bold text-2xl">
                      {milestone.year}
                    </span>
                    <p className="text-slate-700 mt-2">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-900 rounded-full border-4 border-white shadow"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
