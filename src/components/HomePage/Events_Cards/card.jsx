import Image from "next/image";

const Card = (props) => {
  return (
    <>
      <div className="cursor-pointer transition-all duration-200 ease-in transform  sm:hover:scale-105 hover:z-50 shadow-lg rounded-lg bg-[#13161B] p-5">
        <Image
          className="rounded t-lg w-fill-available"
          src={props.img}
          alt=""
        />
        <div className="mt-5">
          <h3 className="text-3 xl font-bold mb-3 text-[#A5F7A8]">
            {props.title}
          </h3>
          <p className="text-lg font-normal text-white ">{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
