// NHCE Website Dynamic Content Management Layer
// Centralized content for easy updates without touching components

export interface NavLink {
  name: string;
  href: string;
  section?: string;
  dropdown?: { label: string; href: string }[];
}

export interface HeroSlide {
  titleLines: string[];
  subtitle: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
}

export interface StatItem {
  icon: any;
  number: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ProgramItem {
  code: string;
  name: string;
  duration: string;
  seats: number;
  logo: string;
  color: string;
}

export interface NewsItem {
  headline: string;
  link: string;
  badge: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface CampusImage {
  src: string;
  alt: string;
  span?: 'col-span-2' | 'row-span-2';
}

export interface ContactCard {
  icon: any;
  title: string;
  info: string;
}

// Navigation Links
export const navLinks: NavLink[] = [
  { name: "Home", href: "/", section: "home" },
  { name: "About", href: "/about", section: "about" },
  {
    name: "Programs",
    href: "/academics",
    section: "programs",
    dropdown: [
      { label: "B.Tech Programs", href: "/academics#ug-programs" },
      { label: "M.Tech Programs", href: "/academics#pg-programs" },
      { label: "MBA", href: "/academics#mba-program" },
      { label: "MCA", href: "/academics#mca-program" },
      { label: "Ph.D. Programs", href: "/academics#phd-program" },
    ]
  },
  {
    name: "Campus Life",
    href: "/about#campus",
    section: "campus",
    dropdown: [
      { label: "Infrastructure", href: "/about#infrastructure" },
      { label: "Hostels", href: "/about#hostels" },
      { label: "Sports", href: "/about#sports" },
      { label: "Library", href: "/about#library" },
      { label: "Events", href: "/about#events" },
    ]
  },
  { name: "Placements", href: "/placements", section: "placements" },
  { name: "Contact", href: "/contact", section: "contact" },
];

// Top Bar Links
export const topBarLinks = [
  { name: "Examination", href: "#" },
  { name: "Proforma for Annual Return", href: "#" },
  { name: "NIRF/ARIIA/IIC", href: "#", dropdown: ["NIRF", "ARIIA", "IIC"] },
  { name: "News", href: "#" },
  { name: "Events", href: "#" },
  { name: "E-Resources", href: "#" },
  { name: "Placements", href: "/placements" },
  { name: "Careers@NH", href: "#" },
];

// Hero Slides
export const heroSlides: HeroSlide[] = [
  {
    titleLines: ["Shaping the", "Future of Engineering"],
    subtitle: "of Engineering Excellence",
    ctaPrimary: { text: "Apply for Admission", href: "/admissions" },
    ctaSecondary: { text: "Explore Campus", href: "/about" },
  },
  {
    titleLines: ["Innovation First", "Research & Development"],
    subtitle: "Driving Innovation Through Research",
    ctaPrimary: { text: "Explore Research", href: "/about" },
    ctaSecondary: { text: "Our Programs", href: "/academics" },
  },
  {
    titleLines: ["Industry Ready", "100% Placement Support"],
    subtitle: "Industry Ready Graduates",
    ctaPrimary: { text: "View Placements", href: "/placements" },
    ctaSecondary: { text: "Contact Us", href: "/contact" },
  },
];

// Stats Data
export const heroStats = [
  { number: "55+", label: "Years of Excellence" },
  { number: "15,000+", label: "Students Enrolled" },
  { number: "500+", label: "Expert Faculty" },
  { number: "95%", label: "Placement Rate" },
  { number: "350+", label: "Partner Companies" },
  { number: "50L", label: "Highest Package" },
];

// Programs Data
export const programs: ProgramItem[] = [
  { code: "CSE", name: "Computer Science & Engineering", duration: "4 Years", seats: 180, logo: "💻", color: "from-cyan-400 to-blue-500" },
  { code: "AI&ML", name: "Artificial Intelligence & Machine Learning", duration: "4 Years", seats: 120, logo: "🤖", color: "from-purple-400 to-pink-500" },
  { code: "ECE", name: "Electronics & Communication", duration: "4 Years", seats: 180, logo: "📡", color: "from-green-400 to-teal-500" },
  { code: "EEE", name: "Electrical & Electronics", duration: "4 Years", seats: 90, logo: "⚡", color: "from-amber-400 to-orange-500" },
  { code: "ME", name: "Mechanical Engineering", duration: "4 Years", seats: 120, logo: "⚙️", color: "from-red-400 to-pink-500" },
  { code: "CE", name: "Civil Engineering", duration: "4 Years", seats: 60, logo: "🏗️", color: "from-indigo-400 to-purple-500" },
  { code: "AI&DS", name: "AI & Data Science", duration: "4 Years", seats: 60, logo: "📊", color: "from-sky-400 to-blue-500" },
  { code: "MBA", name: "Master of Business Administration", duration: "2 Years", seats: 90, logo: "💼", color: "from-emerald-400 to-teal-500" },
  { code: "MCA", name: "Master of Computer Applications", duration: "2 Years", seats: 60, logo: "🖥️", color: "from-violet-400 to-purple-500" },
];

// News Ticker Data
export const newsItems: NewsItem[] = [
  {
    headline: "Smart Horizon: Grand Finale Winners Declared!",
    link: "#",
    badge: "View Results",
  },
  {
    headline: "NHCE – AICTE IDEA LAB ranked 1st position for March – June 2026",
    link: "#",
    badge: "Achievement",
  },
  {
    headline: "Admissions Open (CET Code: E099) – UG & PG Programs",
    link: "#",
    badge: "Admissions",
  },
  {
    headline: "Sargam 2026 – Cultural Fest Highlights",
    link: "#",
    badge: "Events",
  },
  {
    headline: "QuantumX-25 – National Level Tech Fest",
    link: "#",
    badge: "Events",
  },
];

// Testimonials Data
export const testimonials: TestimonialItem[] = [
  {
    name: "Aarav Sharma",
    role: "B.Tech CSE 2024",
    company: "Software Engineer at Google",
    quote: "NHCE provided me with the perfect blend of theoretical knowledge and practical exposure. The faculty mentorship and industry interactions helped me secure my dream job.",
    image: "https://ui-avatars.com/api/?name=Aarav+Sharma&background=0b2a5e&color=fff",
  },
  {
    name: "Priya Patel",
    role: "M.Tech CSE 2023",
    company: "Data Scientist at Amazon",
    quote: "The research opportunities and state-of-the-art labs at NHCE gave me the edge I needed. The placement cell was incredibly supportive throughout my journey.",
    image: "https://ui-avatars.com/api/?name=Priya+Patel&background=0b2a5e&color=fff",
  },
  {
    name: "Rohan Mehta",
    role: "B.Tech ECE 2022",
    company: "Robotics Engineer at Boston Dynamics",
    quote: "The hands-on learning approach and extracurricular activities at NHCE shaped me into a well-rounded engineer. I'm grateful for the foundation I built here.",
    image: "https://ui-avatars.com/api/?name=Rohan+Mehta&background=0b2a5e&color=fff",
  },
  {
    name: "Ananya Reddy",
    role: "B.Tech AI&ML 2024",
    company: "Machine Learning Engineer at Microsoft",
    quote: "The AI labs and industry projects at NHCE prepared me exceptionally well. I landed my dream role straight out of graduation thanks to the practical training.",
    image: "https://ui-avatars.com/api/?name=Ananya+Reddy&background=0b2a5e&color=fff",
  },
  {
    name: "Karthik Nair",
    role: "MBA 2023",
    company: "Product Manager at Flipkart",
    quote: "The MBA program at NHCE combined business acumen with technology focus. The case studies and live projects gave me real-world experience.",
    image: "https://ui-avatars.com/api/?name=Karthik+Nair&background=0b2a5e&color=fff",
  },
  {
    name: "Sneha Gupta",
    role: "M.Tech VLSI 2024",
    company: "Design Engineer at Intel",
    quote: "NHCE's VLSI lab with cutting-edge equipment gave me hands-on experience that set me apart in interviews. The faculty guidance was exceptional.",
    image: "https://ui-avatars.com/api/?name=Sneha+Gupta&background=0b2a5e&color=fff",
  },
];

// Campus Images
export const campusImages: CampusImage[] = [
  { src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop", alt: "Main Campus Building", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop", alt: "Library" },
  { src: "https://images.unsplash.com/photo-1523050854058-8df9010be1f4?w=400&h=300&fit=crop", alt: "Science Lab" },
  { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop", alt: "Auditorium", span: "col-span-2" },
];

// Latest News Items
export const latestNews = [
  {
    title: "NHCE Ushers in Sargam 2026 with 'Mahadevi: The Cosmic Symphony'",
    date: "December 2026",
    category: "Sargam Fest",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=300&fit=crop",
  },
  {
    title: "Sargam 2026 Highlights: Mega Event Fashion Show and Shakti Dance-Drama",
    date: "December 2026",
    category: "Sargam Fest",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
  },
  {
    title: "Navaratri – 2026 Celebration at NHCE",
    date: "October 2026",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=300&fit=crop",
  },
  {
    title: "NHCE Signs MoU with Google Cloud for AI Research Center",
    date: "November 2026",
    category: "Partnership",
    image: "https://images.unsplash.com/photo-1517245386807-b049d4d19171?w=500&h=300&fit=crop",
  },
  {
    title: "Annual Technical Festival QuantumX-25 Concludes Successfully",
    date: "September 2026",
    category: "Tech Fest",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
  },
  {
    title: "NHCE Students Win National Hackathon on Sustainable Technology",
    date: "August 2026",
    category: "Achievement",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop",
  },
];

// Placement Partners
export const placementPartners = [
  { name: "TCS", initial: "T" },
  { name: "Infosys", initial: "I" },
  { name: "Wipro", initial: "W" },
  { name: "Accenture", initial: "A" },
  { name: "Amazon", initial: "A" },
  { name: "Microsoft", initial: "M" },
  { name: "Google", initial: "G" },
  { name: "Deloitte", initial: "D" },
  { name: "Cognizant", initial: "C" },
  { name: "HCL", initial: "H" },
  { name: "Tech Mahindra", initial: "T" },
  { name: "Capgemini", initial: "C" },
  { name: "IBM", initial: "I" },
  { name: "Oracle", initial: "O" },
  { name: "Adobe", initial: "A" },
  { name: "Samsung", initial: "S" },
  { name: "Intel", initial: "I" },
  { name: "Flipkart", initial: "F" },
];

// Contact Cards
export const contactCards: ContactCard[] = [
  { icon: "Mail", title: "Email Us", info: "admissionsnhce@newhorizonindia.edu" },
  { icon: "Phone", title: "Call Us", info: "+91-98805 34935" },
  { icon: "MapPin", title: "Visit Campus", info: "Bellandur Main Road, Bengaluru" },
];
