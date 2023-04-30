import Image from "next/image";
import data from "../../content/events";
function Cards() {
  return (
    <main className="container mx-auto py-36 px-8">
      <div className="grid lg:grid-cols-3 gap-6">
        {data &&
          data.map((card) => (
            <div key={null} className="shadow-lg rounded-lg p-3">
              <Image className="rounded t-lg w-auto" src={card.img} alt="" />
              <div className="p-5">
                <h3 className="text-3 xl font-bold mb-3 text-white">
                  {card.title}
                </h3>
                <p className="text-lg font-normal text-white text-justify">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}

export default Cards;
