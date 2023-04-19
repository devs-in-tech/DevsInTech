import Image from 'next/image';
import { useState } from 'react';
import Logo from "../../public/logo2.png";

const Navbar = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/" },
        { name: "Events", link: "/" },
        { name: "Team", link: "/" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-around py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
                    <span>
                        <Image className='h-10 w-10' src={Logo} alt="" />
                    </span>
                    DevsInTech
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div >
    )
}

export default Navbar