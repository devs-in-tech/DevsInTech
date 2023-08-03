import Header from "@/components/header";
import { useEffect, useState } from "react";
import data from "../../content/events";
import Card from "./card";

function Cards() {
  const [current, setCurrent] = useState(0);
  const [numVisible, setNumVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setNumVisible(1);
      } else if (screenWidth < 970) {
        setNumVisible(2);
      } else {
        setNumVisible(3);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);
  const visibleCards = data.slice(current, current + numVisible);
  const goToPrev = () => {
    if (current === 0) {
      setCurrent(data.length - numVisible);
    } else {
      setCurrent(current - 1);
    }
  };
  const goToNext = () => {
    if (current === data.length - numVisible) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  return (
    <main className="container mx-auto py-14 px-8" id="events">
      <Header name="Latest Events In DevsInTech" />
      <div className="flex items-center mb-6">
        <button
          onClick={goToPrev}
          className="bg-gray-800 text-white rounded-full p-3 flex justify-center items-center mr-4"
        >
          {"<"}
        </button>
        <div className="flex justify-center gap-4">
          {data &&
            visibleCards.map((card, index) => (
              <Card
                key={index}
                text={card.text}
                img={card.img}
                title={card.title}
              />
            ))}
        </div>
        <button
          onClick={goToNext}
          className="bg-gray-800 text-white rounded-full p-3 flex justify-center items-center ml-5"
        >
          {">"}
        </button>
      </div>
    </main>
  );
}

export default Cards;
