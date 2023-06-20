import Image from "next/image";
import Link from "next/link";
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../public/Images/logo.jpg";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer className="bg-black bottom-0 mb-6 pt-32 font-primary">
      <div className="flex flex-col gap-8 justify-between content-center md:flex-row">
        {/* Logo */}
        <div className="grid-auto">
          <div className="flex flex-col justify-center">
            <Image
              src={logo}
              alt="DevsInTech"
              width={140}
              height={140}
              className="mx-auto"
            />
            <p className="font-medium text-center justify-items-center">
              DevsInTech
            </p>
          </div>
        </div>

        {/* About Us */}

        <div className="flex flex-col content-center">
          <p className="text-center text-white text-md sm:text-lg md:text-xl md:text-left">
            <a href="https://devsintech.netlify.app/">DevsInTech</a> is a thriving and welcoming community of developers,
            tech professionals,and enthusiasts who share a common passion for technology.
            We are an Open-source project available on <a href="https://github.com/devs-in-tech/DevsInTech">GitHub</a>
          </p>
          <ul className="mt-6 flex justify-center gap-6 md:justify-start md:gap-8">
            <li>
              <Link
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-black transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-100/90"
              >
                <FaFacebookF size={20} />
              </Link>
            </li>

            <li>
              <Link
                href="https://twitter.com/devs_in_tech"
                aria-label="Visit us on Twitter" 
                title="Twitter (External Link)"
                rel="noopener noreferrer"
                target="_blank"
                className="text-black transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-100/90"
              >
                <FaTwitter size={20} />
              </Link>
            </li>

            {/* LinkedIn Icon */}

            <li>
              <Link
                href="/"
                target="_blank"
                aria-label="Visit us on Linkedin" 
                title="Linkedin (External Link)"
                rel="noopener noreferrer"
                className="text-black transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-100/90"
              >
                <FaLinkedinIn size={20} />
              </Link>
            </li>

            {/* Instagram icon */}

            <li>
              <Link
                href="/"
                aria-label="Visit us on Instagram" 
                title="Instagram (External Link)"
                rel="noopener noreferrer"
                target="_blank"
                className="text-black transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-100/90"
              >
                <FaInstagram size={20} />
              </Link>
            </li>

            {/* Discord icon */}

            <li>
              <Link
                href="https://discord.com/invite/g7FmxB9uZp"
                aria-label="Join with us on Discord" 
                title="Discord (External Link)"
                rel="noopener noreferrer"
                target="_blank"
                className="text-black transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-100/90"
              >
                <FaDiscord size={20} />
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMNS */}
        <div className="m-auto">
          <div className="flex justify-between gap-16">
            <div className="text-center font-secondary">
              <p className="text-lg font-medium text-white">Community</p>

              <nav aria-label="Footer About Nav" className="mt-4 text-center">
                <ul className="space-y-4 font-light text-xs">
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Collaborate
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Communicate
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Courses
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Webinars
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Meetups
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="text-center font-secondary">
              <p className="text-lg font-medium text-white">Events</p>

              <nav
                aria-label="Footer Services Nav"
                className="mt-4 text-center"
              >
                <ul className="space-y-4 font-light text-xs">
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Collaborate
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Events
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Courses
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Webinars
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Meetups
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 mb-0">
        <div className="text-center font-thin sm:flex sm:justify-center sm:text-center">
          <p className="mt-4 text-xl text-black dark:text-white sm:order-first sm:mt-0">
            &copy; {year} by DevsInTech Community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
