import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "New Horizon College of Engineering | Top Engineering College in Bangalore",
  description:
    "New Horizon College of Engineering (NHCE) is a premier autonomous engineering college in Bengaluru, permanently affiliated to VTU, accredited by NAAC with 'A' Grade and approved by AICTE. Offering B.Tech, M.Tech, MBA, MCA and Ph.D. programs.",
  keywords: [
    "New Horizon College of Engineering",
    "NHCE",
    "engineering college Bangalore",
    "VTU affiliated college",
    "NAAC A Grade college",
    "autonomous engineering college",
    "B.Tech Bangalore",
    "engineering admission 2025",
  ],
  authors: [{ name: "New Horizon College of Engineering" }],
  openGraph: {
    title: "New Horizon College of Engineering",
    description:
      "Premier autonomous engineering college in Bengaluru, affiliated to VTU, NAAC 'A' Grade accredited. Join us to shape the future of technology.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Horizon College of Engineering",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <header className="sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-xl border-b border-cyan-400/10 shadow-2xl">
          <TopBar />
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}