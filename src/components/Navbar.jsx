import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/logo2.png";
import  DarkModeToggle from "./DarkModeToggle";
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
    <div className="w-full top-0 left-0 dark:bg-white bg-black ">
      <div className="md:flex md:items-center md:justify-between py-4 px-7">
        <div
          className="font-bold text-base cursor-pointer flex flex-col md:items-center font-secondary 
      text-white justify-center dark:text-black  dark:bg-white"
        >
          <span>
            <Image className="h-14 w-14 flex" src={Logo} alt="" />
          </span>
          DevsInTech
        </div>

        <ul
 className={`md:flex md:items-center md:pb-0 px-20 md:px-0 pb-12 md:justify-center absolute md:static md:z-auto left-0 w-full transition-top bg-black dark:bg-white  ease-in   ${
 open ? "top-24" : "top-[-550px]"
 }`}
 >

          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 whitespace-nowrap text-xl md:my-0 my-7"
            >
              <Link
                href={link.link}
                className="text-white dark:text-black hover:text-gray-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="md:hidden flex gap-4">
          <HeaderSocialMedia width={35} height={30}/>
          </div>
        </ul>
        <div className="lg:flex lg:gap-5 hidden">
       <HeaderSocialMedia width={47} height={47}/>
        <DarkModeToggle width={45} height={40} />
        </div>
      </div>
      <div
        className="flex text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white gap-4 dark:text-black"
      >
        <DarkModeToggle width={31} height={40} />
        <ion-icon  onClick={() => setOpen(!open)} name={open ? "close" : "menu"}></ion-icon>
      </div>
      
    </div>
  );
};

export default Navbar;
