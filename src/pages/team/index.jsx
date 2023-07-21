import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import TeamPage from "@/components/TeamPage";
import { useEffect } from "react";
const Team = () => {
  useEffect(() => {
    const alanBtn = require("@alan-ai/alan-sdk-web");
    alanBtn({
      key: "f9b22abe4b61e7c364a5a62bdae65be32e956eca572e1d8b807a3e2338fdd0dc/stage",

      onCommand: function (commandData) {
        if (commandData && commandData.command === "openURL") {
          if (commandData.target === "_blank") {
            window.open(
              commandData.url,
              "_newtab" + Math.floor(Math.random() * 999999)
            );
          } else {
            window.location.href = commandData.url;
          }
        }
      },
    });
  }, []);

  return (
    <>
      <Navbar />
      <TeamPage />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Team;
