import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";

const Button = (props) => {
  function MyComponent() {
    const IconComponent = props?.Icon;
    return <IconComponent />;
  }
  return (
    <Link target="_blank" href={props.url}>
      {/* <div className="p-[3px] bg-gradient-to-r from-[#642dfa] to-[#A5F7A8] bg-animate-spin rounded-3xl"> */}
        <button className="bg-[#6040b8]/75 border-white/50 border-2 gap-2 flex items-center hover:bg-[#7f58e8]/90 text-white font-bold py-2 px-4 rounded-3xl relative duration-300">
          {/* <span className="absolute top-0 left-0 right-0 h-1 rounded-t-md bg-gradient-to-b from-white to-[#194fbc] opacity-25"></span> */}
          <span className="whitespace-nowrap font-roboto">{props.name}</span>
          {props.Icon ? <MyComponent /> : <HiCheckCircle />}
        </button>
      {/* </div> */}
    </Link>
  );
};

export default Button;
