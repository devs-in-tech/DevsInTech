import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";

const Button = (props) => {
  function MyComponent() {
    const IconComponent = props?.Icon;
    return <IconComponent />;
  }
  return (
    <Link target="_blank" href={props.url}>
      <button className="bg-[#194fbc] gap-2 flex items-center hover:bg-[#143f96] text-white font-bold py-2 px-4 rounded relative">
        <span className="absolute top-0 left-0 right-0 h-1 rounded-t-md bg-gradient-to-b from-white to-[#194fbc] opacity-25"></span>
        <span className="whitespace-nowrap ">{props.name}</span>
        {props.Icon ? <MyComponent /> : <HiCheckCircle />}
      </button>
    </Link>
  );
};

export default Button;