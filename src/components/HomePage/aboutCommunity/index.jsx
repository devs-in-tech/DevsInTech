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
    <div className="px-5 sm:mt-10 mt-16" id="aboutCommunity">
      <Header name="What is DevsInTech Community?" />
      <p className="my-7 text-justify font-secondary text-white">
        At DevsInTech, we believe in the power of community. We know that when
        developers come together, amazing things can happen. That is why we are
        dedicated to creating a space where everyone feels welcome and
        supported. Whether you are looking for a new job, seeking advice on a
        tricky coding problem, or just want to meet some new friends, DevsInTech
        is the place for you. Our community is open to developers of all levels
        and backgrounds. Whether you are a beginner just starting out on your
        coding journey or an experienced developer looking to learn new skills,
        DevsInTech is the place for you. We offer a variety of events and
        activities designed to help you grow your skills and connect with other
        like-minded individuals.
      </p>
      <Stats stats={stats} />
      <Introductionvideo embedLink="https://www.youtube.com/embed/d3xoKUDSY_A" />
    </div>
  );
};

export default AboutCommunity;
