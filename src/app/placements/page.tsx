import { TrendingUp, Building2, Award, Users, Phone } from "lucide-react";

const placementStats = [
  { icon: TrendingUp, number: "₹50 LPA", label: "Highest Package", desc: "2024 Placements" },
  { icon: Building2, number: "₹6 LPA", label: "Average Package", desc: "All branches" },
  { icon: Award, number: "350+", label: "Companies", desc: "Campus recruitment" },
  { icon: Users, number: "95%", label: "Placement Rate", desc: "Consistent record" },
];

const topRecruiters = [
  "Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro",
  "Accenture", "Deloitte", "Cognizant", "HCL", "Tech Mahindra",
  "Capgemini", "IBM", "Oracle", "Adobe", "Flipkart", "Paytm",
  "Zomato", "Myntra", "PhonePe",
];

const companyLogos = [
  { name: "TCS", sector: "IT Services" },
  { name: "Infosys", sector: "IT Services" },
  { name: "Amazon", sector: "E-Commerce" },
  { name: "Microsoft", sector: "Software" },
  { name: "Google", sector: "Technology" },
  { name: "Wipro", sector: "IT Services" },
  { name: "Accenture", sector: "Consulting" },
  { name: "Deloitte", sector: "Consulting" },
  { name: "Cognizant", sector: "IT Services" },
  { name: "HCL", sector: "IT Services" },
  { name: "Tech Mahindra", sector: "IT Services" },
  { name: "Capgemini", sector: "IT Services" },
];

export default function Placements() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 text-amber-400 rounded-full text-sm font-semibold mb-6 border border-white/20">
            Placement Cell
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Career
            <span className="block text-amber-400">Success Stories</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our dedicated Training & Placement Cell ensures every student gets
            the platform to showcase their potential to top companies worldwide.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100"
                >
                  <Icon className="w-10 h-10 text-blue-900 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-blue-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-slate-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-slate-600 text-sm">{stat.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Top Recruiters
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="text-2xl font-bold text-slate-400 group-hover:text-blue-900 transition-colors">
                  {company.name}
                </div>
                <div className="text-xs text-slate-500 mt-2">{company.sector}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Our Placement Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Training",
                desc: "Skill development programs, aptitude training, and mock interviews",
              },
              {
                step: "02",
                title: "Pre-placement",
                desc: "Resume building, communication skills, and personality development",
              },
              {
                step: "03",
                title: "Recruitment Drive",
                desc: "Campus interviews, online tests, and group discussions",
              },
              {
                step: "04",
                title: "Selection",
                desc: "Offer letters, joining formalities, and career launching",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-blue-100 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="w-12 h-12 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Placement Assistance?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Our placement cell is here to help you land your dream job. Contact
            us for guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918026632000"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-colors"
            >
              Call: +91-80-2663 2000
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-colors border border-white/30"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
