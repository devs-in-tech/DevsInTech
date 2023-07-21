import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import about from "../../../public/about.png";
import blog from "../../../public/blog.jpg";
import coffee from "../../../public/coffee.jpg";
import quiz from "../../../public/quiz.jpg";
import spaces from "../../../public/spaces.jpg";
import tech from "../../../public/tech-events.jpg";

const Events = () => {
  const [searchInput, setSearchInput] = useState("");

  const eventsData = [
    {
      name: "Webinars",
      description:
        "Webinars are highly valuable resources for individuals interested in technology and software development. We conduct webinars at regular intervals for individuals looking to enhance their technical skills.",
      image: tech,
      link: "/events/tech",
    },
    {
      name: "Blog-a-thons",
      description:
        "Participate in our thrilling Blog-a-thon event, where passionate writers and tech enthusiasts come together to showcase their expertise and share their insights on trending tech topics.",
      image: blog,
      link: "/events/blogathon",
    },
    {
      name: "Quiz Nights",
      description:
        "Participate in our thrilling Blog-a-thon event, where passionate writers and tech enthusiasts come together to showcase their expertise and share their insights on trending tech topics.",
      image: quiz,
      link: "/events/quiz",
    },
    {
      name: "Coffee Chats",
      description:
        "Unwind and engage in meaningful conversations with our Coffee Chats, where you can connect with fellow tech enthusiasts in a relaxed and informal setting.",
      image: coffee,
      link: "/events/coffee",
    },
    {
      name: "Twitter Spaces",
      description:
        "Unwind and engage in meaningful conversations with our Coffee Chats, where you can connect with fellow tech enthusiasts in a relaxed and informal setting.",
      image: spaces,
      link: "/events/spaces",
    },
  ];
  const [EventsData, SetEventsData] = useState(eventsData);
  const FilteredData = EventsData.filter((event) =>
    event.name.toLowerCase().includes(searchInput.toLowerCase())
  );



  return (
    <>
      <Navbar />
      <div style={{ marginTop: 100, color: "white", alignItems: "center" }}>
        <h1 className="text-5xl font-bold text-center text-blue-500">
          Welcome to the DevsinTech Community Events Page!
        </h1>
        <div className="w-[100%] flex flex-wrap mx-auto justify-center items-center mt-26 py-8 mb-5 max-w-screen-2xl format-card">
          <div
            className="md:w-2/3 ml-5"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <p className="team-description font-bold text-2xl text-center">
              At DevsinTech, we believe in fostering a vibrant and inclusive
              community of tech enthusiasts, developers, and industry
              professionals. Our events are designed to bring together
              like-minded individuals to learn, share knowledge, and network.
              <br></br> Join our community to stay updated on the latest tech
              trends, expand your skillset, and connect with fellow developers.
            </p>
          </div>
        </div>
      </div>

      <div
        className="book-formats-container"
        style={{ marginTop: 100, color: "white" }}
      >
        <div className="w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-8 mb-5 max-w-screen-2xl format-card">
          <div className="" data-aos="fade-right" data-aos-duration="500">
            <Image
              src={about}
              className="team-member-image rounded-lg"
              alt="team"
            />
          </div>
          <div
            className="md:w-1/2 ml-5 items-center text-center"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <h1 className="text-5xl mb-7 font-bold text-blue-500">Features</h1>
            <ul className="team-description font-bold text-3xl">
              <li className="mb-5">Networking Opportunities</li>
              <li className="mb-5">Learning from Industry Experts</li>
              <li className="mb-5">
                Collaboration and Partnership Opportunities
              </li>
              <li className="mb-5">
                Stay Up-to-Date with the Latest Tech Trends
              </li>
              <li className="mb-5">Expand Your Knowledge and Skillset</li>
            </ul>
          </div>
        </div>
      </div>

      <h1 className="text-6xl font-bold text-center text-blue-500 mt-10 py-4">
        Explore our Events!
      </h1>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative w-[87vw] mx-auto mb-[8rem]   mr-[7.5rem] mt-[3rem] ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Events"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            required=""
          />

          <button
            type="submit"
            className="text-white absolute right-2.5 top-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="grid md:grid-cols-2 my-10 lg:grid-cols-3 gap-6 max-w-xs md:max-w-full m-auto">
        {FilteredData.map((event, index) => (
          <div
            key={index}
            className="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href={event.link}>
              <Image
                className="rounded-t-lg"
                src={event.image}
                alt=""
                height={4000}
                width={6000}
              />
            </Link>
            <div className="p-5">
              <Link href={event.link}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-center">
                  {event.name}
                </h5>
              </Link>
              <p className="mb-5 font-medium text-gray-400 text-lg text-justify">
                {event.description}
              </p>
              <Link
                href={event.link}
                className="relative w-max items-center py-3 px-7 font-medium transition-all duration-75 group flex flex-row gap-1 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 outline-none text-white"
              >
                Explore...
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Events;
