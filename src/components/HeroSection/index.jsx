import { FaDiscord, FaTwitter } from "react-icons/fa";
import Button from "../button";

const HeroSection = () => {
  return (
    <div className="min-h-[calc(100vh-115px)] flex items-center bg-black">
      <div className="flex items-center justify-center text-center md:items-start md:text-left md:justify-start px-7">
        <div className="flex flex-col items-center md:items-start gap-12 md:w-2/3 w-full">
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-primary font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#AF7AF2] via-[#A5F7A8] to-[#AF7AF2]">
            Devs In Tech Community
          </h1>
          <p className="md:text-2xl font-secondary sm:text-xl text-lg text-white sm:text-start text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. . Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start">
            <Button
              name="Join Discord"
              url="https://discord.com/invite/g7FmxB9uZp "
              Icon={FaDiscord}
            />
            <Button
              name="Follow on Twitter"
              url="https://twitter.com/devs_in_tech"
              Icon={FaTwitter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
