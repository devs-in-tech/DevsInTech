import { AboutCommunity, HeroSection } from "@/components";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import Cards from "@/components/HomePage/Events_Cards";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import TestimonialCarousel from "@/components/testimonial";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center ">
          <HashLoader
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
            color={"#8d06d6"}
            size={68}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <ScrollToTop />
          <AboutCommunity />
          <Cards />
          <TestimonialCarousel />
          <FaqAccordion />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
