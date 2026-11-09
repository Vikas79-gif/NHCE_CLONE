"use client";

import { useState, useEffect } from "react";
import { X, ChevronRight, LayoutGrid, Search, Menu, User, Briefcase, Building2, BookOpen } from "lucide-react";

interface MenuItem {
  name: string;
  href: string;
  description?: string;
  icon?: string;
  subItems?: MenuItem[];
}

interface MegaMenuSection {
  title: string;
  icon?: string;
  items: MenuItem[];
}

export default function MegaMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);
  const [mobileSubItem, setMobileSubItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const menuSections: MegaMenuSection[] = [
    {
      title: "Home",
      items: [
        { name: "NHCE Home", href: "/" },
        { name: "NHEI Home", href: "#" },
      ],
    },
    {
      title: "About",
      icon: "Building2",
      items: [
        { name: "Overview", href: "/about#overview", description: "College overview and history" },
        { name: "Why Join NHCE", href: "/about", description: "Reasons to choose NHCE" },
        { name: "Leadership", href: "/about", description: "College leadership team" },
        { name: "Governance", href: "/about", description: "Governance structure" },
        { name: "Key Executives", href: "/about", description: "Key executives" },
        { name: "Accreditation/Affiliation/Rating", href: "/about", description: "NAAC, AICTE, NBA accreditation" },
        { name: "Academic Rules & Regulations", href: "/about", description: "Academic policies" },
        { name: "Calendar of Events", href: "/about", description: "Upcoming events calendar" },
        { name: "Achievements", href: "/about", description: "College achievements" },
        { name: "Social Outreach", href: "/about", description: "Community outreach programs" },
      ],
    },
    {
      title: "Programs",
      icon: "BookOpen",
      items: [
        {
          name: "B.Tech Programs",
          href: "/academics#ug-programs",
          description: "Undergraduate engineering programs",
          subItems: [
            { name: "Computer Science & Engineering", href: "/academics#computer-science" },
            { name: "Artificial Intelligence & Machine Learning", href: "/academics#ai-ml" },
            { name: "Electronics & Communication", href: "/academics#electronics" },
            { name: "Electrical & Electronics", href: "/academics#electrical" },
            { name: "Mechanical Engineering", href: "/academics#mechanical" },
            { name: "Civil Engineering", href: "/academics#civil" },
            { name: "AI & Data Science", href: "/academics#ai-ds" },
          ],
        },
        {
          name: "M.Tech Programs",
          href: "/academics#pg-programs",
          description: "Postgraduate engineering programs",
          subItems: [
            { name: "M.Tech Computer Science", href: "/academics#mtech-cse" },
            { name: "M.Tech VLSI Design", href: "/academics#mtech-vlsi" },
            { name: "M.Tech Structural Engineering", href: "/academics#mtech-structural" },
          ],
        },
        { name: "MBA Program", href: "/academics#mba-program", description: "Master of Business Administration" },
        { name: "MCA Program", href: "/academics#mca-program", description: "Master of Computer Applications" },
        { name: "Ph.D. & Research", href: "/academics#phd-program", description: "Doctoral research programs" },
      ],
    },
    {
      title: "Departments",
      icon: "Briefcase",
      items: [
        { name: "Alumni Association", href: "#" },
        { name: "Admissions", href: "/admissions" },
        { name: "Entrepreneurship Development", href: "#" },
        { name: "Industry Institute Interaction Cell", href: "#" },
        { name: "NHCIIE", href: "#" },
        { name: "Administration", href: "#" },
        { name: "Library", href: "/about#library" },
        { name: "Placements", href: "/placements" },
        { name: "Professional Counselling", href: "#" },
      ],
    },
    {
      title: "Admissions",
      icon: "User",
      items: [
        { name: "Campus Life", href: "/about#sports", description: "Campus life information" },
        { name: "Undergraduate", href: "/admissions#steps", description: "UG admission process" },
        { name: "Postgraduate", href: "/admissions#steps", description: "PG admission process" },
        { name: "PhD & M.Sc(Engg) by Research", href: "/admissions", description: "Research admission" },
        { name: "Minor Degree", href: "#" },
        { name: "Scholarships", href: "/admissions#scholarships", description: "Scholarship opportunities" },
        { name: "Study Abroad Program", href: "#" },
        { name: "Dress Code", href: "#" },
      ],
    },
    {
      title: "Campus Life",
      items: [
        { name: "IEEE", href: "#" },
        { name: "Experience with a Twist", href: "#" },
        { name: "Sargam Fest", href: "#" },
        { name: "QuantumX", href: "#" },
        { name: "Celebrity Diaries", href: "#" },
        { name: "Video Gallery", href: "/gallery" },
        { name: "Ragging Free Campus", href: "#" },
        { name: "Student Clubs", href: "#" },
        { name: "Sports", href: "/about#sports" },
        { name: "Infrastructure", href: "/about#infrastructure" },
        { name: "Hostels", href: "/about#hostels" },
        { name: "Transport", href: "#" },
        { name: "Newsletter", href: "#" },
        { name: "Feedback", href: "#" },
      ],
    },
    {
      title: "Sponsored Labs",
      items: [
        { name: "Industry Skill Labs (COE)", href: "#" },
        { name: "AICTE Idea Lab", href: "#" },
      ],
    },
    {
      title: "R&D",
      items: [
        { name: "Research Publications", href: "#" },
        { name: "Projects", href: "#" },
        { name: "Patents", href: "#" },
      ],
    },
    {
      title: "IQAC",
      items: [
        { name: "Internal Quality Assurance Cell", href: "#" },
        { name: "NAAC Reports", href: "#" },
      ],
    },
  ];

  const filteredSections = menuSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.items.some(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subItems?.some(sub => sub.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  );

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl transition-opacity duration-300 opacity-100"
        onClick={onClose}
      />

      {/* Desktop Mega Menu */}
      <div className="hidden lg:block absolute top-0 left-0 w-full z-50 border-t border-cyan-400/20 shadow-2xl bg-slate-950/98 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            {/* Quick Actions Row */}
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <div className="flex items-center space-x-2 text-cyan-400">
                <LayoutGrid className="w-5 h-5" />
                <span className="font-bold text-sm uppercase tracking-wider">Mega Menu</span>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {filteredSections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <div className="flex items-center gap-2">
                    {section.icon && (
                      section.icon === "Building2" ? <Building2 className="w-5 h-5 text-cyan-400" /> :
                      section.icon === "BookOpen" ? <BookOpen className="w-5 h-5 text-cyan-400" /> :
                      section.icon === "Briefcase" ? <Briefcase className="w-5 h-5 text-cyan-400" /> :
                      section.icon === "User" ? <User className="w-5 h-5 text-cyan-400" /> : null
                    )}
                    <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-wider">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.name} className="group">
                        <a
                          href={item.href}
                          onClick={onClose}
                          className={`block px-3 py-2 text-sm transition-all duration-200 rounded-lg group-hover:bg-white/5 ${
                            item.subItems ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                          }`}
                        >
                          <div className="flex justify-between">
                            <span>{item.name}</span>
                            {item.subItems && <ChevronRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />}
                          </div>
                        </a>
                        {item.description && (
                          <p className="ml-6 text-xs text-gray-500 mt-1">{item.description}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quick Links Row */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center space-x-3 mb-4">
                <Search className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300 font-medium">Quick Links</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["CAREER@NEWHORIZON", "Placements", "Blog", "ARIIA", "IIC", "E-BROCHURES", "Events", "News", "IQAC", "E-resources", "Contact", "R&D", "Parent Portal"].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={onClose}
                    className="px-3 py-1 bg-white/5 hover:bg-cyan-400/20 text-gray-300 hover:text-cyan-400 rounded-full text-xs transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Mega Menu */}
      <div className="lg:hidden fixed inset-0 z-[100] bg-slate-950/98">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-sm text-white uppercase tracking-wider">Mega Menu</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search */}
        <div className="px-6 py-4 border-b border-white/10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Menu List */}
        <div className="overflow-y-auto max-h-[calc(100vh-200px)] px-6 py-4">
          {filteredSections.map((section) => {
            const isSectionOpen = mobileOpenSection === section.title;
            return (
              <div key={section.title} className="mb-6 border-b border-white/10 pb-4 last:mb-0 last:border-0 last:pb-0">
                <button
                  onClick={() => setMobileOpenSection(isSectionOpen ? null : section.title)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="flex items-center gap-2 text-cyan-400 font-medium text-sm uppercase tracking-wider">
                    {section.icon === "Building2" && <Building2 className="w-4 h-4 text-cyan-400" />}
                    {section.icon === "BookOpen" && <BookOpen className="w-4 h-4 text-cyan-400" />}
                    {section.icon === "Briefcase" && <Briefcase className="w-4 h-4 text-cyan-400" />}
                    {section.icon === "User" && <User className="w-4 h-4 text-cyan-400" />}
                    {section.title}
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isSectionOpen ? "rotate-90" : ""}`} />
                </button>

                {isSectionOpen && (
                  <div className="mt-3 space-y-2 ml-2">
                    {section.items.map((item) => {
                      const hasSubItems = item.subItems && item.subItems.length > 0;
                      const isSubItemOpen = mobileSubItem === item.name;

                      if (hasSubItems) {
                        return (
                          <div key={item.name}>
                            <button
                              onClick={() => setMobileSubItem(mobileSubItem === item.name ? null : item.name)}
                              className={`flex justify-between items-center w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                                isSubItemOpen ? "bg-white/5 text-cyan-400" : "text-gray-400 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              <span>{item.name}</span>
                              <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${isSubItemOpen ? "rotate-90" : ""}`} />
                            </button>
                            {isSubItemOpen && (
                              <div className="ml-6 mt-2 space-y-1">
                                {item.subItems!.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={onClose}
                                    className="px-4 py-1.5 text-xs text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg block"
                                  >
                                    {subItem.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      }

                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={onClose}
                          className="flex justify-between items-center px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                        >
                          <span>{item.name}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}