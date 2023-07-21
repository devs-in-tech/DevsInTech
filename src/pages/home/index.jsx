import { AboutCommunity, HeroSection } from "@/components";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import Cards from "@/components/HomePage/Events_Cards";
import Letter from "@/components/Letter";
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
  // useEffect(() => {
  //   console.log("render");
  //   const AlanAIProjectKey = "f9b22abe4b61e7c364a5a62bdae65be32e956eca572e1d8b807a3e2338fdd0dc/stage";
  //   // Load Alan AI script asynchronously when the component mounts on the client side
  //   const alanScript = document.createElement('script');
  //   alanScript.type = 'text/javascript';
  //   alanScript.src = 'https://studio.alan.app/web/lib/alan_lib.min.js';
  //   document.head.appendChild(alanScript);
  //   const additionalStyles = `
  //   .alanBtn-root {
  //     right: 46px !important;
  //     bottom: 150px !important;
  //   }
  // `;

  // const styleTag = document.createElement('style');
  // styleTag.innerHTML = additionalStyles;
  // document.head.appendChild(styleTag);

  //   // Initialize Alan AI and handle commands once the script is loaded
  //   alanScript.onload = () => {
  //     /* global alanBtn */
  //     window.alanBtnInstance = alanBtn({
  //       key: AlanAIProjectKey,
  //       onCommand: function (commandData) {
  //         if (commandData && commandData.command === 'openURL') {
  //           if (commandData.target === '_blank') {
  //             window.open(commandData.url, '_newtab' + Math.floor(Math.random() * 999999));
  //           } else {
  //             window.location.href = commandData.url;
  //           }
  //         }
  //       }
  //     });
  //   };
  // }, []);
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
          <Letter />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
