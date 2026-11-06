import { Camera } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
    title: "Main Campus Building",
    category: "Campus",
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
    title: "Graduation Ceremony",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df9010be1f4?w=600&h=400&fit=crop",
    title: "Library",
    category: "Facilities",
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
    title: "Classroom Setup",
    category: "Academics",
  },
  {
    src: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=600&h=400&fit=crop",
    title: "Science Laboratory",
    category: "Labs",
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop",
    title: "Sports Ground",
    category: "Sports",
  },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    title: "Seminar Hall",
    category: "Facilities",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    title: "Computer Lab",
    category: "Labs",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    title: "Student Activities",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
    title: "Auditorium",
    category: "Facilities",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    title: "Annual Day Celebration",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=600&h=400&fit=crop",
    title: "Engineering Workshop",
    category: "Labs",
  },
];

const categories = ["All", "Campus", "Events", "Facilities", "Labs", "Sports", "Academics"];

export default function Gallery() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 text-amber-400 rounded-full text-sm font-semibold mb-6 border border-white/20">
            Gallery
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Campus
            <span className="block text-amber-400">Moments</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore snapshots of life at New Horizon College of Engineering
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  cat === "All"
                    ? "bg-blue-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Camera className="w-6 h-6 text-amber-400 mb-2" />
                    <h3 className="text-white font-bold text-lg">
                      {image.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs rounded-full mt-2">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
