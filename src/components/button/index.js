import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";

const Button = (props) => {
  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 210e75f (fix: made the suggested changes)
      <Link target="_blank" href={props.url}>
        <button className="bg-[#194fbc] gap-2 flex items-center hover:bg-[#002775 ] text-white font-bold py-2 px-4 rounded relative">
          <span className="absolute top-0 left-0 right-0 h-1  rounded-t-md bg-gradient-to-b from-white to-[#194fbc] opacity-25"></span>
          <span>{props.name}</span>
          <HiCheckCircle />
        </button>
<<<<<<< HEAD
=======
      <Link
        target="_blank"
        href={props.url}
        className="bg-[#194fbc] gap-2 flex items-center hover:bg-[#002775 ] text-white font-bold py-2 px-4 rounded relative"
      >
        <span className="absolute top-0 left-0 right-0 h-1  rounded-t-md bg-gradient-to-b from-white to-[#194fbc] opacity-25"></span>
        <span>{props.name}</span>
        <HiCheckCircle />
>>>>>>> ecbb43b (fix: solve main branch merge problem)
=======
>>>>>>> 210e75f (fix: made the suggested changes)
      </Link>
    </>
  );
};

export default Button;
