import Image from "next/image";
import { useState, useEffect } from "react";

function TestimonialCarousel({ testimonials }) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Set a timer to change the testimonial every 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clear the timer when the component unmounts or the testimonial changes
    return () => clearTimeout(timer);
  }, [currentTestimonialIndex, testimonials.length]);

  const previousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="flex flex-col items-center">
      {/* Display current testimonial */}
      <div className="bg-transparent shadow-lg p-6 text-gray-800 max-w-md text-center transition-all duration-500">
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-16 h-16 rounded-full mb-2 overflow-hidden">
            <Image
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="absolute w-full h-full object-cover transition-all duration-500 transform scale-100 hover:scale-110"
              width={64}
              height={64}
            />
          </div>
          <p className="text-white text-lg font-medium">{currentTestimonial.testimonial}</p>
          <span className="text-gray-400 text-sm m-2">{currentTestimonial.name}</span>
        </div>
        {/* Add navigation buttons */}
        <div className="flex justify-between">
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
            onClick={previousTestimonial}
          >
            {`<`}
          </button>
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
            onClick={nextTestimonial}
          >
            {`>`}
          </button>
        </div>
      </div>
      <div className="h-6 w-64 mt-4 flex items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentTestimonialIndex ? "bg-white" : "bg-gray-600"
            } mx-1 transition-all duration-500`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialCarousel;
