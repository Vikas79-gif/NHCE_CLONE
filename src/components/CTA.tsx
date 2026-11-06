import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Begin Your Journey
          <span className="block text-amber-400">At NHCE</span>
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Join thousands of successful alumni who have shaped their careers at
          New Horizon College of Engineering. Admissions open for 2025-26.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="/admissions"
            className="group px-10 py-5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/25 flex items-center space-x-2"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:+918026632000"
            className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold text-lg transition-all duration-200 border border-white/30 flex items-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>+91-80-2663 2000</span>
          </a>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Mail,
              title: "Email Us",
              info: "admissions@nhce.ac.in",
            },
            {
              icon: Phone,
              title: "Call Us",
              info: "+91-80-2663 2000",
            },
            {
              icon: ArrowRight,
              title: "Visit Campus",
              info: "JP Nagar, Bangalore - 560078",
            },
          ].map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              >
                <Icon className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                <p className="text-blue-100 text-sm">{card.info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
