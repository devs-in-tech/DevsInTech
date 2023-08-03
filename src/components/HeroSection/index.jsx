import { FaDiscord, FaTwitter } from "react-icons/fa";
import Button from "../button";

const HeroSection = () => {
  return (
    <div className="min-h-[calc(90vh-80px)] flex items-center bg-black">
      <div className="flex items-center justify-center text-center md:items-start md:text-left md:justify-start px-7">
        <div className="flex flex-col items-center md:items-start gap-8 md:w-2/3 w-full">
          <h1 className="md:text-6xl sm:text-7xl text-4xl font-primary font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#AF7AF2] via-[#A5F7A8] to-[#AF7AF2]">
            Devs In Tech Community
          </h1>
          <p className="text-left md:text-xl font-secondary sm:text-xl text-lg text-white">
            Welcome to DevsInTech, an all inclusive community where developers
            come to learn, grow, and create together. Whether you&apos;re a
            beginner or an experienced developer, you&apos;ll find a place here
            to connect, collaborate, and build new skills. With weekly coffee
            chats, movie nights, expert sessions, and more, we offer endless
            opportunities to improve your craft and connect with like-minded
            individuals. Join us today and become a part of a community
            that&apos;s all about helping you succeed.
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
