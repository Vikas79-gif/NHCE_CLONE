import {
  Library,
  Dumbbell,
  Utensils,
  Bus,
  Monitor,
  Hospital,
  TreePine,
  Wifi
} from "lucide-react";

const facilities = [
  { icon: Library, title: "Central Library", desc: "50,000+ books, digital resources & reading rooms" },
  { icon: Dumbbell, title: "Sports Complex", desc: "Indoor & outdoor facilities for multiple sports" },
  { icon: Utensils, title: "Cafeteria", desc: "Spacious dining with hygienic multi-cuisine food" },
  { icon: Bus, title: "Transport", desc: "20+ buses covering all major routes in Bangalore" },
  { icon: Monitor, title: "Smart Classrooms", desc: "AV-enabled classrooms with e-learning tools" },
  { icon: Hospital, title: "Health Center", desc: "On-campus medical facility with trained staff" },
  { icon: TreePine, title: "Green Campus", desc: "25-acre lush green campus with gardens" },
  { icon: Wifi, title: "Wi-Fi Enabled", desc: "Campus-wide high-speed internet connectivity" },
];

export default function Campus() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold mb-4">
            Campus Life
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            World-Class
            <span className="text-blue-900"> Infrastructure</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our 25-acre campus provides everything students need for an enriching
            academic and personal experience.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-900 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-blue-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900">
                  {facility.title}
                </h3>
                <p className="text-slate-600 text-sm">{facility.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Campus Image Gallery Preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1523050854058-8df9010be1f4?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop",
          ].map((img, i) => (
            <div
              key={i}
              className="relative h-48 rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt={`Campus ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
