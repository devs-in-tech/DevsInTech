import { AboutCommunity } from "@/components";
import Cards from "@/components/Events_Cards/Cards";
import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <HeroSection />
      <AboutCommunity />
      <Cards />
    </div>
  );
};

export default Home;
