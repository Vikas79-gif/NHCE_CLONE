import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "New Horizon College of Engineering | Top Engineering College in Bangalore",
  description:
    "New Horizon College of Engineering (NHCE) is a premier engineering institution in Bangalore, Karnataka, India. Affiliated to VTU, accredited by NAAC with A++ grade. Offering UG, PG, and PhD programs in various engineering disciplines.",
  keywords: [
    "New Horizon College of Engineering",
    "NHCE",
    "engineering college Bangalore",
    "VTU affiliated college",
    "best engineering college Karnataka",
    "NAAC A++ college",
  ],
  authors: [{ name: "New Horizon College of Engineering" }],
  openGraph: {
    title: "New Horizon College of Engineering",
    description:
      "Premier engineering institution in Bangalore with NAAC A++ accreditation. Join us to shape the future of technology.",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
