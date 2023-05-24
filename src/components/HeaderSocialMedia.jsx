import IconButton from "./iconbutton";


import Image from 'next/image';
import Link from 'next/link';

const HeaderSocialMedia = (props) => {
  return (
    <>
    <div>
    <IconButton src="lightdiscord.svg" alt="discord" width={props.width} height={props.height} url="https://discord.com/invite/g7FmxB9uZp" className="hidden dark:block  hover:scale-110 duration-300 "/>
    <IconButton src="darkdiscord.svg" alt="discord" width={props.width} height={props.height} url="https://discord.com/invite/g7FmxB9uZp" className="dark:hidden hover:scale-110 duration-300"/>
    </div>
    <div>
    <IconButton src="lightgithub.svg" alt="discord" width={props.width} height={props.height} url="https://github.com/devs-in-tech/DevsInTech" className="hidden dark:block  hover:scale-110 duration-300 "/>
    <IconButton src="darkgithub.svg" alt="discord"width={props.width} height={props.height} url="https://github.com/devs-in-tech/DevsInTech" className="dark:hidden hover:scale-110 duration-300"/>
    </div>
    <div>
    <IconButton src="lighttwitter.svg" alt="discord" width={props.width} height={props.height} url="https://twitter.com/devs_in_tech" className="hidden dark:block  hover:scale-110 duration-300 "/>
    <IconButton src="darktwitter.svg" alt="discord" width={props.width} height={props.height} url="https://twitter.com/devs_in_tech" className="dark:hidden hover:scale-110 duration-300"/>
    </div>
    </>
  );
};
export default HeaderSocialMedia;