import { FaDiscord, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <footer className=" mt-10">
      <div className="max-w-7xl mx-auto pb-14 md:py-14 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between flex-col md:flex-row">
          {/* Column 1: Brand Logo and Description */}
          <div className="w-72">
            <h3 className="text-white text-2xl font-semibold">DevsInTech</h3>
            <p className="text-gray-300 mt-1 md:mt-4 text-lg font-light">
              <a href="https://devsintech.netlify.app/">DevsInTech</a> is a
              thriving and welcoming community of developers, tech
              professionals,and enthusiasts who share a common passion for
              technology.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="mt-5 md:mt-0">
            <h3 className="text-white text-2xl font-semibold">Quick Links</h3>
            <ul className="md:mt-4 mt-1 text-xl">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:underline underline-offset-4 transition-all duration-300 font-light"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:underline underline-offset-4 transition-all duration-300 font-light"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:underline underline-offset-4 transition-all duration-300 font-light"
                >
                  Join
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:underline underline-offset-4 transition-all duration-300 font-light"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigate */}
          <div className="mt-5 md:mt-0">
            <h3 className="text-white text-2xl font-semibold">Navigate</h3>
            <ul className="md:mt-4 mt-1 text-xl">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:underline underline-offset-4 transition-all duration-300 font-light"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:underline underline-offset-4 transition-all duration-300 font-light"
                >
                  Webinars
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:underline underline-offset-4 transition-all duration-300 font-light"
                >
                  Meetups
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:underline underline-offset-4 transition-all duration-300 font-light"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Links */}
          <div className="mt-5 md:mt-0">
            <h3 className="text-white text-2xl font-semibold">Follow Us</h3>
            <div className="flex mt-2 md:mt-4 space-x-4 text-xl">
              <a
                href="https://discord.com/invite/g7FmxB9uZp"
                target="blank"
                className="text-gray-300 hover:text-indigo-600  transition-all duration-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <FaDiscord />
                </svg>
              </a>
              <a
                href="https://github.com/devs-in-tech/DevsInTech"
                target="blank"
                className="text-gray-300 hover:text-neutral-400 transition-all duration-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <FaGithub />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/devsintech-community/"
                target="blank"
                className="text-gray-300 hover:text-blue-400 transition-all duration-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <FaLinkedinIn />
                </svg>
              </a>
              <a
                href="https://twitter.com/devs_in_tech"
                target="blank"
                className="text-gray-300 hover:text-blue-500 transition-all duration-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <FaTwitter />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <hr className="mt-8 border-neutral-700"></hr>
        <div className="text-left md:text-center">
          <p className="text-neutral-400 mt-3 ">
            DevsInTech © {year}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    // <footer className="bg-black bottom-0 mb-6 pt-32 font-primary-2">
    //   <div className="flex flex-row gap-8 justify-between md:flex-row border-2 bg-red-300">
    //     {/* Logo */}
    //     <div className="">
    //       <div className="flex flex-row justify-center">
    //         <Image
    //           src={logo}
    //           alt="DevsInTech"
    //           width={140}
    //           height={140}
    //           className="mx-auto"
    //         />
    //         <p className="font-medium text-center justify-items-center text-white">
    //           DevsInTech
    //         </p>
    //       </div>
    //     </div>

    //     {/* About Us */}

    //     <div className="flex flex-col content-center">
    //       <p className="text-center text-white text-md sm:text-lg md:text-xl md:text-left">
    //         <a href="https://devsintech.netlify.app/">DevsInTech</a> is a
    //         thriving and welcoming community of developers, tech
    //         professionals,and enthusiasts who share a common passion for
    //         technology. We are an Open-source project available on{" "}
    //         <a href="https://github.com/devs-in-tech/DevsInTech">GitHub</a>
    //       </p>
    //       <ul className="mt-6 flex justify-center gap-6 md:justify-start md:gap-8">
    //         <li>
    //           <Link
    //             href="/"
    //             rel="noreferrer"
    //             target="_blank"
    //             className="text-black transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-100/90"
    //           >
    //             <FaFacebookF size={20} />
    //           </Link>
    //         </li>

    //         <li>
    //           <Link
    //             href="https://twitter.com/devs_in_tech"
    //             aria-label="Visit us on Twitter"
    //             title="Twitter (External Link)"
    //             rel="noopener noreferrer"
    //             target="_blank"
    //             className="text-black transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-100/90"
    //           >
    //             <FaTwitter size={20} />
    //           </Link>
    //         </li>

    //         {/* LinkedIn Icon */}

    //         <li>
    //           <Link
    //             href="https://www.linkedin.com/company/devsintech-community/"
    //             target="_blank"
    //             aria-label="Visit us on Linkedin"
    //             title="Linkedin (External Link)"
    //             rel="noopener noreferrer"
    //             className="text-black transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-100/90"
    //           >
    //             <FaLinkedinIn size={20} />
    //           </Link>
    //         </li>

    //         {/* Instagram icon */}

    //         <li>
    //           <Link
    //             href="/"
    //             aria-label="Visit us on Instagram"
    //             title="Instagram (External Link)"
    //             rel="noopener noreferrer"
    //             target="_blank"
    //             className="text-black transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-100/90"
    //           >
    //             <FaInstagram size={20} />
    //           </Link>
    //         </li>

    //         {/* Discord icon */}

    //         <li>
    //           <Link
    //             href="https://discord.com/invite/g7FmxB9uZp"
    //             aria-label="Join with us on Discord"
    //             title="Discord (External Link)"
    //             rel="noopener noreferrer"
    //             target="_blank"
    //             className="text-black transition hover:text-gray-700/75 dark:text-white dark:hover:text-gray-100/90"
    //           >
    //             <FaDiscord size={20} />
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* COLUMNS */}
    //     <div className="m-auto">
    //       <div className="flex justify-between gap-16">
    //         <div className="text-center font-secondary">
    //           <p className="text-lg font-medium text-white">Community</p>

    //           <nav aria-label="Footer About Nav" className="mt-4 text-center">
    //             <ul className="space-y-4 font-black text-base">
    //               <li>
    //                 <Link
    //                   className="text-gray-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
    //                   href="/"
    //                 >
    //                   Collaborate
    //                 </Link>
    //               </li>

    //               <li>
    //                 <Link
    //                   className="text-gray-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
    //                   href="/"
    //                 >
    //                   Communicate
    //                 </Link>
    //               </li>

    //               <li>
    //                 <Link
    //                   className="text-gray-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
    //                   href="/"
    //                 >
    //                   Courses
    //                 </Link>
    //               </li>

    //               <li>
    //                 <Link
    //                   className="text-gray-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
    //                   href="/"
    //                 >
    //                   Webinars
    //                 </Link>
    //               </li>

    //               <li>
    //                 <Link
    //                   className="text-gray-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
    //                   href="/"
    //                 >
    //                   Meetups
    //                 </Link>
    //               </li>
    //             </ul>
    //           </nav>
    //         </div>
    //         <div className="text-center font-secondary">
    //           <p className="text-lg font-medium text-white">Events</p>

    //           <nav
    //             aria-label="Footer Services Nav"
    //             className="mt-4 text-center"
    //           >
    //             <ul className="space-y-4 font-black text-base">
    //               <li>
    //                 <Link
    //                   className="text-gray-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
    //                   href="/"
    //                 >
    //                   Collaborate
    //                 </Link>
    //               </li>

    //               <li>
    //                 <Link
    //                   className="text-gray-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
    //                   href="/"
    //                 >
    //                   Events
    //                 </Link>
    //               </li>

    //               <li>
    //                 <Link
    //                   className="text-gray-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
    //                   href="/"
    //                 >
    //                   Courses
    //                 </Link>
    //               </li>

    //               <li>
    //                 <Link
    //                   className="text-gray-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
    //                   href="/"
    //                 >
    //                   Webinars
    //                 </Link>
    //               </li>

    //               <li>
    //                 <Link
    //                   className="text-gray-900 transition hover:text-gray-900/75 dark:text-white dark:hover:text-white/75"
    //                   href="/"
    //                 >
    //                   Meetups
    //                 </Link>
    //               </li>
    //             </ul>
    //           </nav>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-12 mb-0">
    //     <div className="text-center font-thin sm:flex sm:justify-center sm:text-center">
    //       <p className="mt-4 text-xl text-black dark:text-white sm:order-first sm:mt-0">
    //         &copy; {year} by DevsInTech Community
    //       </p>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
