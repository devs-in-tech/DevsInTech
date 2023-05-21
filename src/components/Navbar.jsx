import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/logo2.png";
import Button from "./button";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Events", link: "/" },
    { name: "Team", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="w-full top-0 left-0 sticky bg-black">
      <div className="md:flex md:items-center md:justify-between py-4 px-7">
        <div className="flex items-center">
          <span>
            <Image className="w-20" src={Logo} alt="" />
          </span>
          <div className="font-bold text-base cursor-pointer ml-2 text-white font-secondary">
            DevsInTech
          </div>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 px-20 md:px-0 pb-12 md:justify-end absolute md:static md:z-auto right-0 w-full transition-all duration-500 ease-in ${open ? "top-24  bg-black" : "top-[-550px]"
            }`}
        >
          <Button
            name="Join Us"
            url="https://discord.com/invite/g7FmxB9uZp"
            className="md:block hidden ml-10"
          />
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 whitespace-nowrap text-xl md:my-0 my-7"
            >
              <Link
                href={link.link}
                className="text-white hover:text-[#194fbc] duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
