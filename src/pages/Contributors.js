import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";

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
      <h1 className="text-5xl font-bold text-white text-center">
        Our Contributors
      </h1>
      <div className="contributor-container relative z-[1] flex justify-center items-center flex-wrap p-[1em]">
        {contributors.map((i) => (
          <div className="contributor-card relative w-[300px] h-[400px] shadow-[0_15px_35px_rgba(0,0,0,0.9)] flex justify-center items-center flex-col backdrop-blur-2xl bg-clip-padding shadow-[0px_10px_10px_rgba(46,54,68,0.03)] m-[1em] rounded-[15px] border-[solid] border-transparent bg-gray-900 cursor-auto" key={i.login}>
            <div className="contributor-content  relative flex justify-center items-center flex-col opacity-50 transition duration-[0.5s]">
              <div class="relative w-[150px] h-[150px] overflow-hidden rounded-[50%] border-[10px] border-solid border-[rgba(0,0,0,0.25)]">
                <Image className="absolute w-full h-full object-cover left-0 top-0" src={i.avatar_url} alt={i.login} width={300} height={300} />
              </div>
              <div class="contributor-details">
                <h3 className="text-white uppercase tracking-[2px] font-medium text-lg text-center leading-[1.1em] mt-5 mb-2.5 mx-0">
                  {i.login}<br />
                  <span className="text-xs font-light">Commits: {i.contributions}</span>
                </h3>
              </div>
            </div>
        
              <ul className="contributor-social-icons absolute flex justify-center items-center bottom-[50px]">
                <li className="translate-y-10 opacity-0 transition duration-[0.5s] mx-2.5 my-0">
                  <a href={i.html_url} target="_blank" rel="noopener noreferrer" className="text-2xl text-white"><BsGithub /></a>
                </li>
              </ul>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Contributors;
