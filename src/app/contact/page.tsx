"use client";

import { MapPin, Phone, Mail, Clock, Send, MessageSquareCheck } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-semibold mb-6 border border-cyan-400/20">
            Connect With Us
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Get in
            <span className="block gradient-text">Touch With NHCE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about admissions, academic programs, or campus visits?
            Our admissions and counseling advisors are ready to help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 tech-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="glass-card p-8 md:p-10">
              <h2 className="text-3xl font-bold text-white mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-400 text-sm mb-8">
                Fill in the form below and an admissions counselor will reach out within 24 hours.
              </p>

              {submitted ? (
                <div className="p-8 bg-cyan-400/10 border border-cyan-400/30 rounded-2xl text-center animate-fadeIn">
                  <MessageSquareCheck className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-300 text-sm">
                    Thank you for reaching out to NHCE. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 font-medium mb-2 text-sm">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-medium mb-2 text-sm">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 font-medium mb-2 text-sm">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                        placeholder="+91 98805 XXXXX"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-medium mb-2 text-sm">
                        Inquiry Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                      >
                        <option value="">Select subject</option>
                        <option value="btech-admission">B.Tech Engineering Admission</option>
                        <option value="mtech-admission">M.Tech / PG Programs</option>
                        <option value="mba-mca">MBA / MCA Programs</option>
                        <option value="placements">Campus Placement Drive</option>
                        <option value="general">General Campus Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2 text-sm">
                      Your Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none resize-none transition-all"
                      placeholder="Tell us about the course or details you are inquiring about..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-xl font-bold transition-all hover:shadow-xl hover:shadow-cyan-400/30 flex items-center justify-center space-x-2 cursor-pointer hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Campus Coordinates
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Located along Bangalore's bustling Outer Ring Road IT corridor, directly accessible from Bellandur,
                  Marathahalli, and Sarjapur.
                </p>
              </div>

              <div className="space-y-4">
                <div className="glass-card p-5 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center shrink-0 border border-cyan-400/20">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Campus Address</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      New Horizon College of Engineering<br />
                      Bellandur Main Road, Near Marathahalli<br />
                      Bengaluru - 560103, Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="glass-card p-5 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-400/10 rounded-xl flex items-center justify-center shrink-0 border border-purple-400/20">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Admission Helplines</h3>
                    <div className="space-y-1 text-sm">
                      <a href="tel:+919880534935" className="text-gray-400 hover:text-cyan-400 transition-colors block">
                        +91 98805 34935 (Admissions)
                      </a>
                      <a href="tel:+918066297777" className="text-gray-400 hover:text-cyan-400 transition-colors block">
                        +91 80 6629 7777 (Reception)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-5 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-400/10 rounded-xl flex items-center justify-center shrink-0 border border-emerald-400/20">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Email Contacts</h3>
                    <div className="space-y-1 text-sm">
                      <a href="mailto:admissionsnhce@newhorizonindia.edu" className="text-gray-400 hover:text-cyan-400 transition-colors block">
                        admissionsnhce@newhorizonindia.edu
                      </a>
                      <a href="mailto:principal@newhorizonindia.edu" className="text-gray-400 hover:text-cyan-400 transition-colors block">
                        principal@newhorizonindia.edu
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-5 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center shrink-0 border border-amber-400/20">
                    <Clock className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Office Hours</h3>
                    <p className="text-gray-400 text-sm">
                      Monday to Friday: 9:00 AM – 5:00 PM<br />
                      Saturday: 9:00 AM – 1:30 PM (Sunday Closed)
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.480675865694!2d77.6923234!3d12.9337137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13cb00000001%3A0xab10e26281718cc2!2sNew%20Horizon%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NHCE Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
