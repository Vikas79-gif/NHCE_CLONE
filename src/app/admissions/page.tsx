import { CheckCircle, FileText, Calendar, Users, Award } from "lucide-react";

export default function Admissions() {
  const requirements = [
    "Valid entrance exam score (COMEDK / KCET / JEE Main / CAT / PGCET)",
    "10+2 completion with Physics, Chemistry, Mathematics",
    "Minimum 50% aggregate in qualifying examination",
    "Domicile certificate (for state quota)",
    "Character & transfer certificates",
    "Migration certificate from previous institution",
  ];

  const steps = [
    { num: "01", title: "Register Online", desc: "Create an account on our admission portal" },
    { num: "02", title: "Fill Application", desc: "Complete the application form with details" },
    { num: "03", title: "Submit Documents", desc: "Upload required documents and certificates" },
    { num: "04", title: "Entrance Exam", desc: "Appear for the required entrance examination" },
    { num: "05", title: "Counseling", desc: "Participate in counseling & seat allocation" },
    { num: "06", title: "Enrollment", desc: "Complete fee payment & confirm admission" },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 text-amber-400 rounded-full text-sm font-semibold mb-6 border border-white/20">
            Admissions 2025-26
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Start Your
            <span className="block text-amber-400">Journey Today</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Admissions are now open for all UG and PG programs. Secure your seat
            at one of Bangalore's top engineering colleges.
          </p>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-amber-400 font-bold text-lg flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Eligibility Criteria
              </h2>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Important Dates</h3>
              <div className="space-y-6">
                {[
                  { event: "Application Start", date: "1st March 2025" },
                  { event: "Application End", date: "30th June 2025" },
                  { event: "Entrance Exam", date: "July 2025" },
                  { event: "Counseling", date: "August 2025" },
                  { event: "Admission Confirmation", date: "September 2025" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-white/20 pb-4">
                    <span className="text-blue-100">{item.event}</span>
                    <span className="font-semibold text-amber-400">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
              <button className="mt-10 w-full py-4 bg-amber-500 hover:bg-amber-600 rounded-xl font-bold text-lg transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Scholarships & Financial Aid
            </h2>
            <p className="text-xl text-slate-600">
              We believe in making quality education accessible to all
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Merit Scholarship",
                desc: "Up to 100% tuition waiver for top performers",
                amount: "Up to ₹2 Lakhs",
              },
              {
                icon: Users,
                title: "Need-Based Aid",
                desc: "Financial assistance for economically disadvantaged students",
                amount: "50-75% Waiver",
              },
              {
                icon: FileText,
                title: "Sports Scholarship",
                desc: "For distinguished athletes at national/international level",
                amount: "Up to 75% Waiver",
              },
            ].map((scholarship, index) => {
              const Icon = scholarship.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-10 h-10 text-blue-900 mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {scholarship.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{scholarship.desc}</p>
                  <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-semibold">
                    {scholarship.amount}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
