import Header from "../header";
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
    <>
      <Header name="What is DevsInTech Community?" />
      <p className="my-10 text-justify font-secondary">
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
    </>
  );
};

export default AboutCommunity;
