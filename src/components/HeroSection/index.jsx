import Button from "../button";

const HeroSection = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center bg-black mt-20">
      <div className="flex items-center justify-center text-center md:items-start md:text-left md:justify-start">
        <div className="flex flex-col gap-12 md:w-2/3 w-full">
          <h1 className="hero-heading md:text-7xl text-6xl font-medium">
            Devs In Tech Community
          </h1>
          <p className="md:text-2xl text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. . Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-8 items-center justify-center md:justify-start">
            <Button name="Join Discord" url="https://discord.gg/kpN7ZnPv" />
            <Button
              name="Follow on Twitter"
              url="https://twitter.com/devs_in_tech"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
