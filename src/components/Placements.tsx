import { Building2, TrendingUp, Award, Users } from "lucide-react";

const companies = [
  "TCS", "Infosys", "Wipro", "Accenture", "Amazon",
  "Microsoft", "Google", "Deloitte", "Cognizant", "HCL",
  "Tech Mahindra", "Capgemini", "IBM", "Oracle", "Adobe",
];

const highlights = [
  {
    icon: TrendingUp,
    number: "₹50 LPA",
    label: "Highest Package",
    description: "Offered in 2024 placements",
  },
  {
    icon: Award,
    number: "₹6 LPA",
    label: "Average Package",
    description: "Across all branches",
  },
  {
    icon: Building2,
    number: "350+",
    label: "Companies Visited",
    description: "For campus recruitment",
  },
  {
    icon: Users,
    number: "2,500+",
    label: "Offers Made",
    description: "In the last placement drive",
  },
];

export default function Placements() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-4">
            Placements & Careers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Your Gateway to
            <span className="text-blue-900"> Top Careers</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our dedicated placement cell ensures every student gets the opportunity
            to connect with leading companies across the globe.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-amber-400" />
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  {item.number}
                </div>
                <div className="text-lg font-semibold text-slate-900 mb-2">
                  {item.label}
                </div>
                <div className="text-slate-600 text-sm">{item.description}</div>
              </div>
            );
          })}
        </div>

        {/* Companies */}
        <div className="bg-slate-900 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Our Recruiters
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {companies.map((company, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-amber-500 hover:text-white transition-all duration-200 cursor-pointer"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
