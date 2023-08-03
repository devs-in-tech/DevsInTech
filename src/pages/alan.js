import React, { useEffect } from "react";

const AlanAIProjectKey = `${process.env.NEXT_PUBLIC_ALAN_AI_CHATBOT}`;

function AlanAIComponent() {
  useEffect(() => {
    // Load Alan AI script asynchronously when the component mounts on the client side
    // const additionalStyles = `
    //   .alanBtn-root {
    //     right: 2rem !important;
    //     bottom: 2rem !important;
    //   }
    // `;

    // const styleTag = document.createElement("style");
    // styleTag.innerHTML = additionalStyles;
    // document.head.appendChild(styleTag);

    // Initialize Alan AI and handle commands once the script is loaded
    /* global alanBtn */
    const alanBtnInstance = alanBtn({
      key: AlanAIProjectKey,
      onCommand: function (commandData) {
        if (commandData && commandData.command === "openURL") {
          if (commandData.target === "_blank") {
            window.open(
              commandData.url,
              "_newtab" + Math.floor(Math.random() * 999999)
            );
          } else {
            window.location.href = commandData.url;
          }
        }
      },
    });

    // Clean up the Alan AI instance when the component unmounts
    return () => {
      alanBtnInstance.deactivate();
    };
  }, []);

  return <div id="alan-btn" className="fixed cursor-pointer bg-[#13161B] bottom-16 left-10 p-4"></div>; // This div will serve as the mount point for the Alan AI button
}

export default AlanAIComponent;
