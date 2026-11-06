import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "B.Tech CSE 2024",
    company: "Software Engineer at Google",
    quote:
      "NHCE provided me with the perfect blend of theoretical knowledge and practical exposure. The faculty mentorship and industry interactions helped me secure my dream job.",
    image: "https://ui-avatars.com/api/?name=Aarav+Sharma&background=0a2463&color=fff",
  },
  {
    name: "Priya Patel",
    role: "M.Tech AI/ML 2023",
    company: "Data Scientist at Amazon",
    quote:
      "The research opportunities and state-of-the-art labs at NHCE gave me the edge I needed. The placement cell was incredibly supportive throughout my journey.",
    image: "https://ui-avatars.com/api/?name=Priya+Patel&background=0a2463&color=fff",
  },
  {
    name: "Rohan Mehta",
    role: "B.Tech ECE 2022",
    company: "Robotics Engineer at Boston Dynamics",
    quote:
      "The hands-on learning approach and extracurricular activities at NHCE shaped me into a well-rounded engineer. I'm grateful for the foundation I built here.",
    image: "https://ui-avatars.com/api/?name=Rohan+Mehta&background=0a2463&color=fff",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-900 rounded-full text-sm font-semibold mb-4">
            Student Voices
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Hear from our
            <span className="text-blue-900"> Alumni</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-amber-400 mb-6" />
              <p className="text-slate-700 text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
