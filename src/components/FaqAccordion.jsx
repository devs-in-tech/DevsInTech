import { faqs } from "./content/faq";
import FaqAccordionItem from "./FaqAccordionItem";

const FaqAccordion = () => {
  return (
    faqs && faqs.map((faq, index) => <FaqAccordionItem faq={faq} key={index} />)
  );
};

export default FaqAccordion;
