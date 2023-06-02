import { AboutCommunity, HeroSection } from "@/components";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import Cards from "@/components/HomePage/Events_Cards";
import Navbar from "@/components/Navbar";
import TestimonialCarousel from "@/components/testimonial";
import ScrollToTop from "@/components/ScrollToTop";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ScrollToTop />
      <AboutCommunity />
      <Cards />
      <FaqAccordion />
      <TestimonialCarousel />
      <Footer />
    </>
  );
};

export default Home;
