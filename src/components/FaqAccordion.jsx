import { faqs } from "../../data/faq";
import FaqAccordionItem from "./FaqAccordionItem";

const FaqAccordion = () => {
  return faqs.map((faq) => <FaqAccordionItem faq={faq} />);
};

export default FaqAccordion;
