import Header from "@/components/header";
import Image from "next/image";
import data from "../../content/events";
function Cards() {
  return (
    <main className="container mx-auto py-14 px-8"
      id="events"
    >
      <Header name="Latest Events In DevsInTech" />
      <div className="grid md:grid-cols-2 my-10 lg:grid-cols-3 gap-6 max-w-xs md:max-w-full m-auto">
        {data &&
          data.map((card) => (
            <div key={null} className="shadow-lg rounded-lg bg-[#13161B] p-5">
              <Image
                className="rounded t-lg w-fill-available"
                src={card.img}
                alt=""
              />
              <div className="mt-5">
                <h3 className="text-3 xl font-bold mb-3 text-[#A5F7A8]">
                  {card.title}
                </h3>
                <p className="text-lg font-normal text-white ">{card.text}</p>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}

export default Cards;
