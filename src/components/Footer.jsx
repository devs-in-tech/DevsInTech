import Image from "next/image";
import Link from "next/link";
import {
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";
import logo from "../../public/Images/logo.jpg";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer className="bg-black  bottom-0 mb-6 pt-32 font-primary justify-center">
      <div className=" flex-col gap-8 justify-between content-center md:flex-row">
        {/* Logo */}
        <div className="grid-auto ">
          <div className=" flex-col justify-center">
            <Image
              src={logo}
              alt="DevsInTech"
              width={100}
              height={120}
              className="mx-auto"
            />
            <p className="text-green-500 text-2xl text-center justify-items-center font-mono">
              DevsInTech
            </p>
          </div>
        </div>

        {/* About Us */}

        <div className="flex flex-col justif-center">
          <p className="text-center text-white text-md sm:text-lg md:text-m md:text-center">
            <a href="https://devsintech.netlify.app/" className="text-green-500 font-mono">DevsInTech</a> is a
            thriving and welcoming community of developers, tech
            professionals,and enthusiasts who share a common passion for
            technology. We are an Open-source project available on{" "}
            <a href="https://github.com/devs-in-tech/DevsInTech" className="text-blue-500">GitHub</a>
          </p>

        </div>

        {/* COLUMNS */}
        <div className="m-6">
          <div className="flex justify-center gap-16">
            <div className="text-center font-secondary">
              <p className="text-lg font-medium text-white">Community</p>

              <nav aria-label="Footer About Nav" className="mt-4 text-center ">
                <ul className="space-y-4 font-black text-base">
                  <li>
                    <Link
                      className="text-purple-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Collaborate
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-purple-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Communicate
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-purple-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Courses
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-purple-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Webinars
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-purple-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
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
                <ul className="space-y-4 font-black text-base">
                  <li>
                    <Link
                      className="text-purple-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Collaborate
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-purple-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Events
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-purple-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Courses
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-purple-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Webinars
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-purple-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
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
      <ul className="mt-6 flex justify-center text-center gap-6 md:justify-center md:gap-8">
        <li>
          <Link
            href="/"
            rel="noreferrer"
            target="_blank"
            className="text-blue-500 transition hover:text-blue-700/75 dark:text-white dark:hover:text-gray-100/90"
          >
            <FaFacebookF size={30} />
          </Link>
        </li>

        <li>
          <Link
            href="https://twitter.com/devs_in_tech"
            aria-label="Visit us on Twitter"
            title="Twitter (External Link)"
            rel="noopener noreferrer"
            target="_blank"
            className="text-sky-500 transition hover:text-sky-700/75 dark:text-white dark:hover:text-gray-100/90"
          >
            <FaTwitter size={30} />
          </Link>
        </li>

        {/* LinkedIn Icon */}

        <li>
          <Link
            href="https://www.linkedin.com/company/devsintech-community/"
            target="_blank"
            aria-label="Visit us on Linkedin"
            title="Linkedin (External Link)"
            rel="noopener noreferrer"
            className="text-blue-800 transition hover:text-blue-900/75 dark:text-white dark:hover:text-gray-100/90"
          >
            <FaLinkedinIn size={30} />
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
            className="text-red-500 transition hover:text-red-700/75 dark:text-white dark:hover:text-gray-100/90"
          >
            <FaInstagram size={30} />
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
            className="text-blue-500 transition hover:text-blue-700/75 dark:text-white dark:hover:text-gray-100/90"
          >
            <FaDiscord size={30} />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/devs-in-tech/DevsInTech"
            aria-label="Join with us on GitHub"
            title="GitHub (External Link)"
            rel="noopener noreferrer"
            target="_blank"
            className="text-black transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-100/90"
          >
            <FaGithub size={30} />
          </Link>
        </li>
      </ul>
      <div className="mt-12 mb-0">
        <div className="text-center font-thin sm:flex sm:justify-center sm:text-center">
          <p className="mt-4 text-xl text-white dark:text-white sm:order-first sm:mt-0">
            &copy; {year} by DevsInTech Community <span className="text-red-600">&hearts;</span>

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
