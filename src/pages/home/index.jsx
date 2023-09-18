import { AboutCommunity, HeroSection } from "@/components";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import Cards from "@/components/HomePage/Events_Cards";
import Letter from "@/components/Letter";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import TestimonialCarousel from "@/components/testimonial";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ScrollToTop />
      <AboutCommunity />
      <Cards />
      <TestimonialCarousel />
      <FaqAccordion />
      <Letter />
      <Footer />

    </>
  );
};

export default Home;
