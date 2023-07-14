import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";


const FaqAccordionItem = ({ faq, isActive, onAccordionItemClick }) => {
  return (
    <div
      className="text-white  font-gilroy border-2 rounded-md border-[#00ACFF] px-4 md:py-2 py-4  hover:border-slate-100 mb-4"
      
      onClick={onAccordionItemClick}

    >
     
      <div className="cursor-pointer flex items-start md:py-2 py-0  sm:gap-0 justify-between  hover:text-slate-100">
        <div className="p-1 mr-2">
          {faq.icon}
        </div>
        <h3
          className={`md:text-xl sm:text-2xl text-lg leading-none ${
            isActive && "mb-1"
          }`}
        >
          {faq.question}
        </h3>
        <div className="flex items-center ml-auto">
          {isActive ? (
            <AiOutlineClose className="text-2xl" />
          ) : (
            <AiOutlinePlus className="text-2xl" />
          )}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isActive && (
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
            className={`text-lg sm:text-xl md:text-xl opacity-70 h-0 overflow-hidden ml-8 tranisition-all ease-linear`}
          >
            {faq.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqAccordionItem;
