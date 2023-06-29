import Header from "@/components/header";
import data from "../../content/events";
import Card from "./card";
function Cards() {
  return (
    <main className="container mx-auto py-14 px-8" id="events">
      <Header name="Latest Events In DevsInTech" />
      <div className="grid md:grid-cols-2 my-10 lg:grid-cols-3 gap-6 max-w-xs md:max-w-full m-auto">
        {data &&
          data
            .slice(0, 3)
            .map((card, index) => (
              <Card
                key={index}
                text={card.text}
                img={card.img}
                title={card.title}
              />
            ))}
      </div>
    </main>
  );
}

export default Cards;
