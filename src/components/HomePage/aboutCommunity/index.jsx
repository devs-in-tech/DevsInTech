import Header from "../../header";
import Introductionvideo from "../Introductionvideo";
import Stats from "../stats";

const AboutCommunity = () => {
  const stats = [
    {
      name: "Members",
      number: 600,
    },
    {
      name: "Events",
      number: 20,
    },
    {
      name: "GitHub Stars",
      number: 100,
    },
  ];
  return (
    <div className="sm:mt-32 mt-16" id="aboutCommunity">
      <Header name="What is DevsInTech Community?" />
      <p className="my-7 text-justify font-secondary text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. . Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <Stats stats={stats} />
      <Introductionvideo embedLink="https://www.youtube.com/embed/d3xoKUDSY_A" />
    </div>
  );
};

export default AboutCommunity;
