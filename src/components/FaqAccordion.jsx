import { faqs } from "./content/faq";
import FaqAccordionItem from "./FaqAccordionItem";
import Header from "./header";

const FaqAccordion = () => {
  return (
    <div id="faqs" className="scroll-my-32">
      <Header name="Frequently Asked Questions" />
      <div className="grid md:grid-cols-2 mt-10">
        <div>
          {faqs &&
            faqs.map((faq, index) => (
              <FaqAccordionItem faq={faq} key={index} />
            ))}
        </div>
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
