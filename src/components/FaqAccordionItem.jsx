import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

const FaqAccordionItem = ({ faq, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(-1);
  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      // Collapse the accordion if it's already open
      setExpanded(false);
      setActiveAccordion(-1);
    } else {
      // Expand the clicked accordion and collapse the previously open accordion
      setExpanded(true);
      setActiveAccordion(index);
      if (activeAccordion !== -1) {
        setExpanded(false);
      }
    }
  };

  return (
    <div
      className="text-white font-gilroy border-b-[1px] px-4 md:py-2 py-4 border-white"
      onClick={(e) => {
        e.stopPropagation();
        toggleAccordion(index);
      }}
    >
      <div
        className="cursor-pointer flex items-start md:py-2 py-0 gap-16 justify-between"
        key={index}
      >
        <h3
          className={`md:text-xl sm:text-2xl text-lg leading-none ${
            expanded && "mb-1"
          } ${activeAccordion === index ? "active" : ""}`}
        >
          {faq.question}
        </h3>
        {expanded && activeAccordion === index ? (
          <AiOutlineClose className="text-2xl" />
        ) : (
          <AiOutlinePlus className="text-2xl" />
        )}
      </div>
      <AnimatePresence initial={false} onClick={toggleAccordion}>
        {expanded && activeAccordion === index && (
          <motion.p
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className={`text-lg sm:text-xl md:text-xl opacity-70 h-0 overflow-hidden transition-all ease-linear ${
              activeAccordion === index ? "active" : "inactive"
            }`}
            style={{
              display: activeAccordion === index ? "block" : "none",
            }}
          >
            {faq.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqAccordionItem;
