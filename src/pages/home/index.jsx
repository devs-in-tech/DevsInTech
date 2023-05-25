import { AboutCommunity, HeroSection } from "@/components";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import Cards from "@/components/HomePage/Events_Cards";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const Home = () => {
  return (
    <div className="dark:bg-white bg-black">
      <Navbar />
      <HeroSection />
      <ScrollToTop />
      <AboutCommunity />
      <Cards />
      <FaqAccordion />
      <Footer />
    </div>
  );
};

export default Home;
