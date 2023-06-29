import Footer from "@/components/Footer";
import Card from "@/components/HomePage/Events_Cards/card";
import Navbar from "@/components/Navbar";
import data from "../../components/content/events";

const Events = () => {
  return (
    <>
      <Navbar />
      <section className="container mx-auto py-14 px-8">
        <div className="grid md:grid-cols-2 my-10 lg:grid-cols-3 gap-6 max-w-xs md:max-w-full m-auto">
          {data &&
            data.map((card, index) => (
              <Card
                key={index}
                text={card.text}
                img={card.img}
                title={card.title}
              />
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Events;
