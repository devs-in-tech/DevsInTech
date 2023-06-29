import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [scroll, setScroll] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let height = 530;
      const scrollCheck =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollCheck > height) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    scroll && (
      <div
        className="fixed cursor-pointer bg-[#13161B] bottom-20 right-10 p-4 rounded-full shadow-lg text-white hover:bg-gradient-to-br from-[#FF008A] to-[#6100FF] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
        onClick={scrollToTop}
      >
        <FiArrowUp size={28} />
      </div>
    )
  );
};

export default ScrollToTop;
// =======
// import { useEffect, useState } from "react";
// import { FiArrowUp } from "react-icons/fi";

// const ScrollToTop = () => {
//   const [scroll, setScroll] = useState(false);
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       let height = 580;
//       const scrollCheck =
//         document.documentElement.scrollTop || document.body.scrollTop;
//       if (scrollCheck > height) {
//         setScroll(true);
//       } else {
//         setScroll(false);
//       }
//     });
//   }, []);

//   return (
//     scroll && (
//       <div
//         className="fixed cursor-pointer bg-[#13161B] bottom-14 right-5 md:bottom-5 p-2 rounded-full shadow-lg text-white hover:bg-gradient-to-br from-[#FF008A] to-[#6100FF] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
//         onClick={scrollToTop}
//       >
//         <FiArrowUp size={28} />
//       </div>
//     )
//   );
// };

// export default ScrollToTop;
// >>>>>>> ca2392dd00b671896d5180ea6af8eb94167e6bd2
