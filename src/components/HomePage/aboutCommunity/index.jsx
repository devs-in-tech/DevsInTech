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
  // LottieInteractivity.create({
  //   mode : 'scroll',
  //   player : '#animation',
  //   action : [
  //     {
  //       visibility:[0,1],
  //           type: "seek",
  //           frames: [0, 150],
  //     }
  //   ]
  // })

  return (
    <div className="sm:mt-10 mt-16" id="aboutCommunity">
      <div className="md:flex md:h-[500px] justify-between p-10">
        <div className=" md:w-[700px] flex flex-col ">
      <Header name="What is DevsInTech Community?" />
      <p className="my-8 text-justify font-secondary text-white">
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
      </div>
      <iframe src="https://embed.lottiefiles.com/animation/144103" className="md:w-[500px] w-[300px]  md:h-[380px] h-[300px] rounded-lg"></iframe>
      </div>
      <div className="rounded-lg p-10 font-semibold">
      <Header name="Watch Here"/>
      <Introductionvideo embedLink="https://www.youtube.com/embed/d3xoKUDSY_A" />
      </div>
    </div>
  );
};

export default AboutCommunity;
