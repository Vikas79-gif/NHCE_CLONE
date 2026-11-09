import Link from "next/link";
import { CheckCircle, FileText, Calendar, Users, Award, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

export default function Admissions() {
  const requirements = [
    "Valid entrance examination score (KCET / COMEDK UGET / JEE Main / PGCET / KMAT / GATE)",
    "10+2 / Pre-University course completion with Physics and Mathematics as compulsory subjects",
    "Chemistry / Biotechnology / Biology / Computer Science as optional technical subjects",
    "Minimum 45% aggregate (40% for reserved categories) in optional qualifying subjects",
    "Karnataka domicile certificate (applicable for state quota seats)",
    "Transfer certificate, conduct certificate, and migration certificate from previous institution",
  ];

  const steps = [
    { num: "01", title: "Online Application", desc: "Submit your basic candidate details and choice of engineering stream on our portal" },
    { num: "02", title: "Document Upload", desc: "Upload 10th & 12th marks cards, entrance test scorecard, and identification proof" },
    { num: "03", title: "Counseling & Evaluation", desc: "Attend the seat allocation counseling session either via KCET/COMEDK or management quota" },
    { num: "04", title: "Offer & Fee Payment", desc: "Receive provisional admission letter and complete the initial term fee settlement" },
    { num: "05", title: "Document Verification", desc: "In-person verification of original certificates at the NHCE Admissions Office" },
    { num: "06", title: "Orientation & Induction", desc: "Join the Student Induction Program (SIP) and commence classes on campus" },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-semibold mb-6 border border-cyan-400/20">
            Admissions 2025-26 • CET Code: E099
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Begin Your
            <span className="block gradient-text">Engineering Journey</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Applications are officially open for Autonomous B.Tech, M.Tech, MBA, MCA, and Doctoral programs.
            Shape tomorrow with New Horizon.
          </p>
        </div>
      </section>

      {/* Application Steps */}
      <section id="steps" className="py-20 bg-slate-950 relative overflow-hidden" style={{ scrollMarginTop: "80px" }}>
        <div className="absolute inset-0 tech-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Step-by-Step Admission Process
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Clear, transparent, and guided admissions from application to your first day in class
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="glass-card p-6 flex flex-col justify-between hover:border-cyan-400/40 transition-all">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-400/10 border border-cyan-400/20 rounded-xl flex items-center justify-center text-cyan-400 font-black text-lg shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Important Dates */}
      <section id="eligibility" className="py-20 bg-slate-900 relative overflow-hidden" style={{ scrollMarginTop: "80px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-cyan-400" />
                <h2 className="text-3xl font-bold text-white">Eligibility Criteria</h2>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                As per the regulatory guidelines established by AICTE and Visvesvaraya Technological University (VTU), Belagavi:
              </p>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="glass-card p-4 flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8 md:p-10 border-cyan-400/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-7 h-7 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Important Admission Dates</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { event: "Online Applications Open", date: "Currently Active", status: "Open" },
                    { event: "KCET / COMEDK Counseling", date: "June – July 2025", status: "Upcoming" },
                    { event: "Management Quota Rounds", date: "Rolling Basis", status: "Active" },
                    { event: "M.Tech / MBA / MCA Counseling", date: "July – August 2025", status: "Upcoming" },
                    { event: "Academic Session Commencement", date: "September 2025", status: "Scheduled" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                      <div>
                        <span className="text-gray-300 font-medium text-sm block">{item.event}</span>
                        <span className="text-gray-500 text-xs">{item.date}</span>
                      </div>
                      <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/contact"
                  className="w-full py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-xl font-bold text-center block transition-all hover:shadow-xl hover:shadow-cyan-400/30"
                >
                  Inquire Now for Admission Assistance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="py-20 bg-slate-950 relative overflow-hidden" style={{ scrollMarginTop: "80px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Scholarships & Financial Grants
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              New Horizon believes in nurturing outstanding talent regardless of financial constraints
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Merit Academic Scholarship",
                desc: "Full or partial tuition fee waiver for top rankers in KCET / COMEDK and national entrance examinations.",
                amount: "Up to ₹2,00,000",
              },
              {
                icon: Users,
                title: "Need-Based Financial Aid",
                desc: "Subsidized fee assistance and grant support for economically deserving meritorious students.",
                amount: "50% – 75% Waiver",
              },
              {
                icon: FileText,
                title: "Sports & National Honors",
                desc: "Special admission scholarship and training support for national or state level sports performers.",
                amount: "Up to 75% Support",
              },
            ].map((scholarship, index) => {
              const Icon = scholarship.icon;
              return (
                <div key={index} className="glass-card p-8 flex flex-col justify-between hover:border-cyan-400/40 transition-all">
                  <div>
                    <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-6 border border-cyan-400/20">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{scholarship.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{scholarship.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Benefit</span>
                    <span className="text-cyan-400 font-bold text-sm">{scholarship.amount}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
