import Head from "next/head";
import Script from "next/script";
import Home from "./home";

export default function Main() {
  return (
    <>
      <Head>
        <title>Devs In Tech</title>
        <meta property="og:title" content="Devs In Tech - Homepage" />
        <meta property="og:description" content="Devs In Tech Community website" />
        <meta property="og:url" content="https://devsintech.netlify.app/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Devs In Tech, Open source, Community website" />
        <meta name="twitter:site" content="@devs_in_tech" />
        <meta name="twitter:creator" content="@devs_in_tech" />
        <meta name="theme-color" content="#000" />
        <meta name="msapplication-navbutton-color" content="#000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
        <link rel="canonical" href="https://devsintech.netlify.app/" />
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
