import { useState } from "react";
import FaqAccordionItem from "./FaqAccordionItem";
import { faqs } from "./content/faq";
import Header from "./header";

const FaqAccordion = () => {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);

  const handleAccordionItemClick = (index) => {
    setActiveAccordionIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div id="faqs" className="scroll-my-32 p-6 mt-3">
      <Header name="Frequently Asked Questions" />
      <div className="grid md:grid-cols-2 mt-10">
        <div >
          {faqs &&
            faqs.map((faq, index) => (
              
              <FaqAccordionItem
              
                faq={faq}
                 key={index}
                isActive={activeAccordionIndex === index}
                onAccordionItemClick={() => handleAccordionItemClick(index)}
              />
            ))}
        </div>
          {/* <div className="flex flex-wrap">
      {faqs &&faqs.map((faq, index) => (
        <FaqAccordionItem key={index}>
          <div className="w-1/2 p-4">
            
            faq={faq}
          </div>
        </FaqAccordionItem>
      ))}
    </div> */}
        <div className="flex justify-center m-auto items-center w-72 h-72 sm:w-96 sm:h-96 md:w-full md:h-full">
          <iframe
            src="https://embed.lottiefiles.com/animation/104452"
            className="w-full h-full m-auto"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
