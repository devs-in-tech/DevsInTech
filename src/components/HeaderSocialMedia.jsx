import Link from "next/link";
import { FaDiscord, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const HeaderSocialMedia = () => {
  return (
    <>
      <div>
        <Link
          href="https://discord.com/invite/g7FmxB9uZp"
          aria-label="Join with us on Discord"
          title="Discord (External Link)"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaDiscord
            size={30}
            className="hover:scale-110 duration-300 hover:fill-[#5865F2] dark:fill-white transition-all duration-200 ease-in-out"
            // className=" hover:fill-[#5865F2] dark:fill-white transition-all duration-200 ease-in-out"
          />
        </Link>
      </div>
      <div>
        <Link
          href="https://github.com/devs-in-tech/DevsInTech"
          aria-label="Visit us on Twitter"
          title="Github (External Link)"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub
            size={30}
            className="hover:scale-110 duration-300 dark:fill-white hover:fill-[#7a7272] transition-all duration-200 ease-in-out"
          />
        </Link>
      </div>
      <div>
        <Link
          href="https://twitter.com/devs_in_tech"
          aria-label="Visit us on Twitter"
          title="Twitter (External Link)"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTwitter
            size={30}
            className="hover:scale-110 duration-300 dark:fill-white hover:fill-[#1DA1F2] transition-all duration-200 ease-in-out"
          />
        </Link>
      </div>
      <div>
        <Link
          href="/"
          target="_blank"
          aria-label="Visit us on Linkedin"
          title="Linkedin (External Link)"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn
            size={30}
            className="hover:scale-110 duration-300 hover:fill-[#0072b1] dark:fill-white transition-all duration-200 ease-in-out"
          />
        </Link>
      </div>
    </>
  );
};
export default HeaderSocialMedia;
