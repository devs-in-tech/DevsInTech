import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import logo from "../../public/Images/logo.jpg";

const Footer = () => {


  let year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-black font-primary body-font">
        <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col" bis_skin_checked={1}>
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left" bis_skin_checked={1}>
            <Link href="/" className="flex flex-col title-font font-medium items-center md:flex-row md:justify-start justify-center text-white">
              <Image
                src={logo}
                alt="DevsInTech"
                width={140}
                height={140}
                className="w-40 h-40 md:w-32 md:h-32 text-white rounded-full"
              />
              <span className="text-xl font-medium text-center justify-items-center">DevsInTech</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500">Write what describes you the most.</p>
          </div>
          <div id="dash" className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left justify-end text-center" bis_skin_checked={1}>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4" bis_skin_checked={1}>
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Community</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">Collaborate</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">Community</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">Courses</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">Webinars</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">Meetups</Link>
                </li>
              </nav>
            </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4" bis_skin_checked={1}>
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Events</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">Company</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">About Us</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">Support</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">Blogs</Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">Team</Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-black font-primary bg-opacity-75" bis_skin_checked={1}>
          <div className="container mx-auto py-10 px-5 flex flex-wrap flex-col sm:flex-row" bis_skin_checked={1}>
            <p className="text-gray-400 text-sm text-center sm:text-left">© {year} DevsInTech —
              <Link href="/" rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank">@DevsInTech</Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 pl-2transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-100/90"
                >
                  <FaFacebookF size={20} />
                </Link>
                <Link
                  href="https://twitter.com/devs_in_tech"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 pl-2 transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-100/90"
                >
                  <FaTwitter size={20} />
                </Link>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 pl-2 transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-100/90"
                >
                  <FaInstagram size={20} />
                </Link>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 pl-2 transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-100/90"
                >
                  <FaLinkedinIn size={20} />
                </Link>
                <Link
                  href="https://discord.com/invite/g7FmxB9uZp"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 pl-2 transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-100/90"
                >
                  <FaDiscord size={20} />
                </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
