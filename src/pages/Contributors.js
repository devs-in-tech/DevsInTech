import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const Contributors = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/devs-in-tech/DevsInTech/contributors"
        );
        const data = response.data;
        setContributors(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold text-white text-center">
        Our Contributors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-8">
        {contributors.map((i) => (
          <div
            className="flex justify-center items-center flex-col border border-white p-8 h-110 w-110 rounded-[0.7cm] transition duration-300 shadow-md hover:scale-105 hover:cursor-pointer hover:shadow-xl hover:border-white hover:border-opacity-60 hover:shadow-lg"
            key={i.id}
          >
            <div className="w-36 h-36 rounded-full overflow-hidden transition duration-300 border-2 border-white">
              <img
                className="w-full h-full object-cover transition duration-300 hover:scale-110 hover:cursor-pointer hover:border-pink-200"
                src={i.avatar_url}
                alt=""
              />
            </div>
            <div className="mt-5">
              <h1 className="text-white text-2xl sm:text-3xl text-center">
                {i.login}
              </h1>
            </div>
            <div className="mt-2">
              <h3 className="text-white text-xl sm:text-2xl text-center">
                Commits: {i.contributions}
              </h3>
            </div>

            <div className="mt-4">
              <button className="border-2 border-white w-40 md:w-56 py-2 rounded transition duration-300 hover:scale-105 hover:border-pink-100 relative overflow-hidden">
                <a
                  className="text-white text-2xl sm:text-3xl"
                  href={i.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
                <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-transparent to-gray-500 transition duration-300 opacity-0 hover:opacity-100"></div>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Contributors;
