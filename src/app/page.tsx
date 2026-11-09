import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import About from "@/components/About";
import Accreditation from "@/components/Accreditation";
import Programs from "@/components/Programs";
import PlacementPartners from "@/components/PlacementPartners";
import LatestNews from "@/components/LatestNews";
import CampusView from "@/components/CampusView";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsTicker />
      <About />
      <Accreditation />
      <Programs />
      <PlacementPartners />
      <CampusView />
      <LatestNews />
      <CTA />
    </>
  );
}