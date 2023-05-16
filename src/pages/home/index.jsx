import { AboutCommunity, HeroSection } from "@/components";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import Cards from "@/components/HomePage/Events_Cards";
import Navbar from "@/components/Navbar";
import TestimonialCarousel from "@/components/testimonial";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutCommunity />
      <Cards />
      <FaqAccordion />
      <TestimonialCarousel />
      <Footer />
    </>
  );
};

export default Home;
