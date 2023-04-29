import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida sit amet mi vitae dictum. Nam auctor risus non urna bibendum, vel sagittis enim tincidunt.",
  },
  {
    id: 2,
    name: "Jane Doe",
    text: "Sed non justo non felis facilisis semper. Aliquam sit amet turpis vitae ipsum aliquet mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 3,
    name: "Bob Smith",
    text: "Vivamus ullamcorper, lacus quis pulvinar venenatis, mi orci aliquam erat, vel suscipit lorem nisi at leo. Integer feugiat tincidunt enim, vitae dictum sapien aliquam nec.",
  },
  {
    id: 4,
    name: "Alice Johnson",
    text: "Praesent eget sapien vel risus placerat accumsan. Suspendisse potenti. In euismod magna at lectus gravida auctor. Etiam ullamcorper dolor id semper fermentum.",
  },
  {
    id: 5,
    name: "Mark Davis",
    text: "Curabitur vel mauris eleifend, pulvinar massa vitae, lacinia velit. Sed vel odio lacinia, consectetur nisl vel, ultricies odio. Nullam imperdiet leo vel tellus malesuada, quis consequat arcu volutpat.",
  },
  {
    id: 6,
    name: "Emily Johnson",
    text: "Ut ac est purus. Curabitur accumsan non lorem ac posuere. Integer ac lorem velit. Aliquam sem nunc, bibendum eget sapien a, pharetra consectetur leo.",
  },
  {
    id: 7,
    name: "Bob Smith",
    text: "Vivamus ullamcorper, lacus quis pulvinar venenatis, mi orci aliquam erat, vel suscipit lorem nisi at leo. Integer feugiat tincidunt enim, vitae dictum sapien aliquam nec.",
  },
];

const Testimonial = ({ testimonial }) => (
  <div className="bg-transparent p-6 rounded-lg border transition-all transition-300 m-6 p-4 h-100">
    <p className="text-grey-200">{testimonial.text}</p>
    <div className="flex items-center mt-4">
      <div className="flex-shrink-0">
        <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/150" alt={testimonial.name} />
      </div>
      <div className="ml-4">
        <div className="text-gray-500 font-medium">{testimonial.name}</div>
      </div>
    </div>
  </div>
);

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const visibleTestimonials = [testimonials[current]];
  if (current + 1 < testimonials.length) {
    visibleTestimonials.push(testimonials[current + 1]);
  }
  if (current + 2 < testimonials.length) {
    visibleTestimonials.push(testimonials[current + 2]);
  } else {
    visibleTestimonials.push(testimonials[(current + 2) % testimonials.length]);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center mb-6">
        {visibleTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="w-1/3 px-4">
            <Testimonial testimonial={testimonial} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`h-2 w-2 rounded-full mx-2 bg-gray-400 ${current === index ? "bg-gray-200" : "bg-gray-900"
              }`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};


export default TestimonialCarousel;