import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import Home from "./home";

export default function Main() {
  useEffect(() => {
    const alanBtn = require("@alan-ai/alan-sdk-web");
    alanBtn({
      key: "f9b22abe4b61e7c364a5a62bdae65be32e956eca572e1d8b807a3e2338fdd0dc/stage",
      left: "50px",
      bottom: "50px",

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
  }, []);

  return (
    <>
      <Head>
        <title>Devs In Tech</title>
        <meta name="description" content="Devs In Tech Community website" />
        <link rel="icon" href="/logo2.png" />
      </Head>
      <Home />
      <Script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
      ></Script>
    </>
  );
}
