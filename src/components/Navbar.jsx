import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/logo2.png";
import Button from "./button";
import  HeaderSocialMedia from "./HeaderSocialMedia";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/#aboutCommunity" },
    { name: "Events", link: "/#events" },
    { name: "Team", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="w-full z-10 top-0 left-0 sticky bg-black">
      <div className="md:flex md:items-center md:justify-between py-4 px-7">
        <div
          className="font-bold text-base cursor-pointer flex flex-col md:items-center font-secondary 
      text-white"
        >
          <span>
            <Image className="h-14 w-14" src={Logo} alt="" />
          </span>
          DevsInTech
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 px-20 md:px-0 pb-12 md:justify-center absolute md:static md:z-auto left-0 w-full transition-all duration-500 ease-in ${
            open ? "top-24  bg-black" : "top-[-550px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 whitespace-nowrap text-xl md:my-0 my-7"
              onClick={() => setOpen(!open)}
            >
              <Link
                href={link.link}
                className="text-white hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="md:hidden flex gap-4">
          <HeaderSocialMedia width={35} height={30}/>
          </div>
        </ul>
        <div className="lg:flex lg:gap-5 hidden md:flex md:gap-3">
       <HeaderSocialMedia width={47} height={47}/>
        </div>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
      >
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>
    </div>
  );
};

export default Navbar;
