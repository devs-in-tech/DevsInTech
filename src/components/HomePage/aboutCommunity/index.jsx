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
    <div className="sm:mt-10 mt-16 scroll-my-32" id="aboutCommunity">
      <Header name="What is DevsInTech Community?" />
      <p className="my-7 text-justify font-secondary text-white">
        <a href="https://devsintech.netlify.app/">DevsInTech</a> is an inclusive and professional network that brings together developers 
          of all levels to foster growth, learning, collaboration, and creativity. Our mission through DevsInTech is to create a 
          supportive environment where individuals can connect, enhance their skills, and engage with like-minded professionals.
      </p>
      <Stats stats={stats} />
      <Introductionvideo embedLink="https://www.youtube.com/embed/d3xoKUDSY_A" />
    </div>
  );
};

export default AboutCommunity;
