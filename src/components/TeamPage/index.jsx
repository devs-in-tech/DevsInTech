import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import TeamData from "../content/team";
import Header from "../header";

const TeamPage = () => {
  return (
    <div className="mt-5">
      <Header name="Team Members" />

      <div className="flex flex-wrap pt-14 justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
        {TeamData &&
          TeamData.map((data, index) => (
            <div key={index} className="p-4 md:w-72 w-72 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  width={500}
                  height={500}
                  className="object-cover object-center h-full w-full rounded-full border-8 border-[#AF7AF2]"
                  src={data.img}
                />
              </div>
              <div className="relative bottom-10">
                <div className="bg-[#2A1846] text-center p-2 rounded-t-2xl">
                  <h2 className="text-white text-2xl">{data.name}</h2>
                  <p className="text-white">{data.position}</p>
                </div>

                <div className="bg-[#62DC67] p-3 rounded-b-2xl justify-center flex gap-3">
                  <Link href={data.GitHub} target="_blank">
                    <FaGithub size={20} />
                  </Link>
                  <Link href={data.LinkedIn} target="_blank">
                    <FaLinkedin size={20} />
                  </Link>
                  <Link href={data.Twitter} target="_blank">
                    <FaTwitter size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamPage;
