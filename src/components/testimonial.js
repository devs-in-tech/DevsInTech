import { useEffect, useState } from "react";
import Header from "./header";

const testimonials = [
  {
    id: 1,
    name: "Aarav Patel",
    text: "DevsInTech's collaborative community has accelerated my learning and inspired me to tackle ambitious projects, thanks to the talented and supportive developers always ready to lend a hand.",
    image: "boy.png",
  },
  {
    id: 2,
    name: "Aanya Gupta",
    text: "Through expert sessions at DevsInTech, I've gained valuable knowledge from industry professionals, opening doors to exciting career opportunities and enhancing my personal and professional growth.",
    image: "girl.jpg",
  },
  {
    id: 3,
    name: "Rohan Sharma",
    text: "DevsInTech's code reviews have significantly improved the quality of my work, thanks to constructive feedback from experienced developers, helping me refine my coding skills and develop a more efficient style.",
    image: "boy.png",
  },
  {
    id: 4,
    name: "Aditi Verma",
    text: "DevsInTech's hackathons have fueled my problem-solving abilities and creativity, providing an exhilarating platform to collaborate with talented developers, innovate, and showcase my skills.",
    image: "girl.jpg",
  },
  {
    id: 5,
    name: "Aryan Desai",
    text: "The mentorship program at DevsInTech has transformed my development journey, with a seasoned developer guiding me, setting goals, and offering personalized support, accelerating my growth and fostering a sense of community.",
    image: "boy.png",
  },
  {
    id: 6,
    name: "Mike Smilga",
    text: "DevsInTech's inclusive and supportive community has been a breath of fresh air for me as a beginner developer. The encouragement and guidance I've received from fellow community members have boosted my confidence and helped me overcome obstacles.",
    image: "boy.png",
  },
  {
    id: 7,
    name: "Richard Paul",
    text: "As an experienced developer, DevsInTech has provided me with a platform to share my knowledge and give back to the community. The opportunity to mentor aspiring developers and contribute to the growth of others has been fulfilling and rewarding..",
    image: "boy.png",
  },
];

const Testimonial = ({ testimonial }) => (
  <div className="bg-black p-4 rounded-xl delay-150 hover:-translate-y-1 duration-300 hover:scale-110 md:m-6 m-2 mt-8 h-100 border-2 border-white">
    <p className="text-white">{testimonial.text}</p>
    <div className="flex items-center mt-4">
      <div className="flex-shrink-0">
        <img
          className="w-12 h-12 rounded-full"
          src={testimonial.image}
          alt={testimonial.name}
        />
      </div>
      <div className="ml-4">
        <div className="text-gray-500 font-medium">{testimonial.name}</div>
      </div>
    </div>
  </div>
);

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [numVisible, setNumVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setNumVisible(1);
      } else if (screenWidth < 768) {
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

  const visibleTestimonials = testimonials.slice(current, current + numVisible);

  const goToPrev = () => {
    if (current === 0) {
      setCurrent(testimonials.length - numVisible);
    } else {
      setCurrent(current - 1);
    }
  };

  const goToNext = () => {
    if (current === testimonials.length - numVisible) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="py-10">
      <Header name="What Our Members Say About Us" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center mb-6">
          <button
            onClick={goToPrev}
            className="bg-gray-800 text-white rounded-full p-3 flex justify-center items-center mr-2"
          >
            {"<"}
          </button>
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </div>
          ))}
          <button
            onClick={goToNext}
            className="bg-gray-800 text-white rounded-full p-4 flex justify-center items-center ml-2"
          >
            {">"}
          </button>
        </div>
        <div className="flex justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`h-2 w-2 rounded-full mx-2 bg-gray-400 ${
                current === index ? "bg-gray-200" : "bg-gray-900"
              }`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
