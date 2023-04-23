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
      <Stats stats={stats} />
    </>
  );
};

export default AboutCommunity;
