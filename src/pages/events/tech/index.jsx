import Footer from "@/components/Footer";
import Card from "@/components/HomePage/Events_Cards/card";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import data from "../../../components/content/events";

const TechEvents = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: 100, color: 'white', alignItems: 'center' }}>
        <h1 className="text-5xl font-bold text-center text-blue-500">Innovate yourself through Tech Events</h1>
        <div className='w-[100%] flex flex-wrap mx-auto justify-center items-center mt-26 py-8 mb-5 max-w-screen-2xl format-card'>
          <div className="md:w-2/3 ml-5" data-aos="fade-left" data-aos-duration="500">
            <p className="team-description font-bold text-2xl text-center">
            Join our DevsinTech community for an array of exciting online tech events. Attend insightful webinars featuring industry experts, dive deep into practical workshops to enhance your skills, and unleash your creativity in our competitive hackathons. Engage with fellow developers, expand your network, and stay updated on cutting-edge technologies and industry trends.
            </p>
          </div>
        </div>
      </div>
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
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default TechEvents;