import Footer from "@/components/Footer";
import Header from "@/components/header";
import Card from "@/components/HomePage/Events_Cards/card";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { useState } from "react";
import EventData from "../../components/content/events";

const Events = () => {
  const [searchInput, setSearchInput] = useState("");


  const [Data,] = useState(EventData);
  const FilteredData = Data.filter((event) =>
    event.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Header name="Explore our events" />
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative w-[87vw] mx-auto mb-[8rem] mr-[7.5rem] mt-[3rem] ">
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
          <Card
            key={index}
            text={event.text}
            img={event.img}
            title={event.title}
          />
        ))}
      </div>

      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Events;
