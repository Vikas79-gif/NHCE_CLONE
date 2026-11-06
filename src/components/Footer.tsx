import { MapPin, Phone, Mail, GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* College Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-amber-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">NH</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">New Horizon</h3>
                <p className="text-slate-400 text-sm">College of Engineering</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A premier engineering institution affiliated to VTU, Bangalore,
              accredited by NAAC with A++ grade and approved by AICTE.
            </p>
            <div className="flex space-x-4">
              {["FB", "TW", "IN", "YT"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-sm font-semibold transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "About NHCE",
                "Academic Programs",
                "Admissions",
                "Placements",
                "Research & Innovation",
                "Campus Life",
                "Notices",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Programs</h4>
            <ul className="space-y-3">
              {[
                "B.Tech (4 Years)",
                "M.Tech (2 Years)",
                "MBA",
                "MCA",
                "Ph.D.",
                "Diploma",
              ].map((program) => (
                <li key={program}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  1st Phase, JP Nagar, Bangalore - 560078, Karnataka, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="tel:+918026632000"
                  className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
                >
                  +91-80-2663 2000
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:info@nhce.ac.in"
                  className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
                >
                  info@nhce.ac.in
                </a>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-slate-800 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <GraduationCap className="w-5 h-5 text-amber-400" />
                <span className="font-semibold text-sm">NAAC Accredited</span>
              </div>
              <p className="text-slate-400 text-xs">
                Grade: A++ | Accredited by NAAC, Approved by AICTE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">
              © 2026 New Horizon College of Engineering. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Use", "Sitemap"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-slate-500 hover:text-amber-400 text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
