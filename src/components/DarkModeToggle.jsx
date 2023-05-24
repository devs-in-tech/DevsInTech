import {useTheme} from "next-themes";
import Image from "next/image";

const DarkModeToggle = (props) => {
  const {theme, setTheme} = useTheme() 

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
    >
      <Image
      width={props.width}
      height={props.height}
      src="/darksun.svg"
      alt="dark mode"
      className="dark:hidden hover:scale-110 duration-300 "
      />
      <Image
      width={props.width}
      height={props.height}
      src="/darkmoon.svg"
      alt="light mode"
      className="hidden dark:block  hover:scale-110 duration-300 "
      />
    </button>
  );
};

export default DarkModeToggle;