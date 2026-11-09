import Link from "next/link";
import { Award, Building2, Users, BookOpen, Globe, CheckCircle, Target, TrendingUp, Sparkles, Trophy, Music } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      {/* Overview Hero */}
      <section id="overview" className="hero-gradient py-20 relative overflow-hidden" style={{ scrollMarginTop: "80px" }}>
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-semibold mb-6 border border-cyan-400/20">
            About NHCE
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Our Legacy of
            <span className="block gradient-text">Engineering Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            For over 55 years, New Horizon Educational Institutions (NHEI) has spearheaded transformative education,
            empowering thousands of technological leaders across the globe.
          </p>
        </div>
      </section>

      {/* College Overview & Accreditations */}
      <section id="infrastructure" className="py-20 bg-slate-950 relative overflow-hidden" style={{ scrollMarginTop: "80px" }}>
        <div className="absolute inset-0 tech-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider block mb-2">Institution Profile</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Autonomous Premier Campus in Bengaluru</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                New Horizon College of Engineering (NHCE) is an autonomous college permanently affiliated with
                Visvesvaraya Technological University (VTU), approved by the All India Council for Technical
                Education (AICTE) and University Grants Commission (UGC).
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Accredited with an 'A' grade by NAAC and multiple departments accredited by NBA, NHCE is located
                in Bengaluru's major IT corridor along the Outer Ring Road, surrounded by multinational tech giants such as
                Intel, Cisco, JPMorgan Chase, and Adobe.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, title: "NAAC 'A' Grade", desc: "National Assessment & Accreditation Council" },
                  { icon: Building2, title: "AICTE & UGC", desc: "Statutory central approval" },
                  { icon: Globe, title: "VTU Affiliated", desc: "Permanently affiliated to VTU" },
                  { icon: CheckCircle, title: "NBA Accredited", desc: "Programmatic excellence" },
                ].map((acc, index) => {
                  const Icon = acc.icon;
                  return (
                    <div key={index} className="glass-card p-4 flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{acc.title}</h4>
                        <p className="text-gray-500 text-xs">{acc.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="glass-card p-8 md:p-10 border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Sparkles className="w-6 h-6 text-cyan-400 mr-2" />
                Key Institutional Metrics
              </h3>
              <div className="space-y-6">
                {[
                  { number: "55+", label: "Years of Educational Legacy", note: "Founded in 1970" },
                  { number: "15,000+", label: "Active Student Community", note: "Undergraduate & Graduate" },
                  { number: "500+", label: "Distinguished Faculty Members", note: "Ph.D. holders & Researchers" },
                  { number: "95%+", label: "Placement Success Track Record", note: "350+ corporate recruiting partners" },
                  { number: "₹50 LPA", label: "Highest Placement Package", note: "Leading international tech firms" },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <div>
                      <span className="text-gray-300 font-medium text-sm block">{stat.label}</span>
                      <span className="text-gray-500 text-xs">{stat.note}</span>
                    </div>
                    <span className="text-cyan-400 font-black text-2xl">{stat.number}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section id="journey" className="py-20 bg-slate-900 relative overflow-hidden" style={{ scrollMarginTop: "80px" }}>
        <div className="absolute inset-0 grid-bg opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Milestones & History</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Over five decades of constant evolution, technological innovation, and societal impact
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full"></div>
            {[
              { year: "1970", event: "New Horizon Educational Institutions established with visionary leadership" },
              { year: "1998", event: "NHCE campus established in Bangalore with initial engineering departments" },
              { year: "2005", event: "Rapid expansion to 10+ tech departments and specialized research labs" },
              { year: "2010", event: "Attained prestigious NAAC 'A' Grade and NBA programmatic accreditations" },
              { year: "2016", event: "Conferred autonomous status by VTU and UGC, enabling custom industry curricula" },
              { year: "2024", event: "Over 15,000 learners, AICTE IDEA Lab ranking #1, and global MNC tie-ups" },
            ].map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="glass-card p-6 inline-block">
                    <span className="text-cyan-400 font-black text-2xl">{milestone.year}</span>
                    <p className="text-gray-300 text-sm mt-2">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-950"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Infrastructure, Hostels, Sports, Library */}
      <section id="campus" className="py-20 bg-slate-950 relative overflow-hidden" style={{ scrollMarginTop: "80px" }}>
        <div className="absolute inset-0 tech-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">World-Class Campus Infrastructure</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Modern academic facilities designed to foster intellectual growth and balanced student well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div id="hostels" className="glass-card p-8 text-center" style={{ scrollMarginTop: "90px" }}>
              <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl flex items-center justify-center border border-cyan-400/30">
                <Building2 className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Residential Hostels</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Separate on-campus residential facilities for boys and girls with high-speed Wi-Fi, 24/7 security,
                gymnasium, and hygienic multi-cuisine dining options.
              </p>
            </div>

            <div id="sports" className="glass-card p-8 text-center" style={{ scrollMarginTop: "90px" }}>
              <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-2xl flex items-center justify-center border border-purple-400/30">
                <Trophy className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sports Complex & Arena</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Comprehensive indoor and outdoor sports complexes featuring basketball courts, cricket turf, football grounds,
                badminton arena, and athletic tracks.
              </p>
            </div>

            <div id="library" className="glass-card p-8 text-center" style={{ scrollMarginTop: "90px" }}>
              <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-2xl flex items-center justify-center border border-emerald-400/30">
                <BookOpen className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Central Digital Library</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Over 50,000 reference books, subscribed access to IEEE, ScienceDirect, Springer, and digital multimedia centers
                available for students and researchers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Campus Life */}
      <section id="events" className="py-20 bg-slate-900 relative overflow-hidden" style={{ scrollMarginTop: "80px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card p-8 md:p-12 border-purple-400/30">
            <div className="flex items-center space-x-3 mb-6">
              <Music className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">Sargam & QuantumX Festivities</h2>
            </div>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl leading-relaxed">
              NHCE hosts "Sargam", one of South India's largest state-level intercollegiate cultural festivals,
              attracting over 30,000 participants from across the nation, alongside "QuantumX", our annual flagship technology symposium.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <span className="text-purple-400 font-black text-3xl block mb-2">30,000+</span>
                <span className="text-white font-bold block">Annual Fest Footfall</span>
                <span className="text-gray-400 text-xs">Students from 250+ colleges</span>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <span className="text-cyan-400 font-black text-3xl block mb-2">40+</span>
                <span className="text-white font-bold block">Student Clubs</span>
                <span className="text-gray-400 text-xs">Technical, robotics, drama, music, dance</span>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <span className="text-emerald-400 font-black text-3xl block mb-2">₹15 Lakhs+</span>
                <span className="text-white font-bold block">Prizes & Grants</span>
                <span className="text-gray-400 text-xs">Awarded at national hackathons & fests</span>
              </div>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all"
            >
              <span>View Fest & Campus Photo Gallery</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose NHCE */}
      <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose NHCE?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "NAAC 'A' Grade", desc: "Top recognized autonomous accreditation" },
              { icon: Globe, title: "Strategic IT Corridor", desc: "Located directly in Bengaluru's tech hub" },
              { icon: TrendingUp, title: "95%+ Placement Record", desc: "350+ multinational hiring corporations" },
              { icon: Target, title: "AICTE IDEA Lab", desc: "Ranked #1 for prototyping & tech innovation" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="glass-card p-6 text-center hover:border-cyan-400/40 transition-all">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
