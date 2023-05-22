import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

const FaqAccordionItem = ({ faq }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="text-white  font-gilroy border-b-[1px] px-4 md:py-2 py-4 border-white  hover:border-sky-500/100"
      onClick={() => {
        setExpanded((prev) => !prev);
      }}
    >
      <div className="cursor-pointer flex items-start md:py-2 py-0 gap-16 justify-between  hover:text-sky-500/100">
        <h3
          className={`md:text-xl sm:text-2xl text-lg leading-none ${
            expanded && "mb-1"
          }`}
        >
          {faq.question}
        </h3>
        {expanded ? (
          <AiOutlineClose className="text-2xl" />
        ) : (
          <AiOutlinePlus className="text-2xl" />
        )}
      </div>
      <AnimatePresence initial={false}>
        {expanded && (
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
            className={`text-lg sm:text-xl md:text-xl opacity-70 h-0 overflow-hidden tranisition-all ease-linear`}
          >
            {faq.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqAccordionItem;
