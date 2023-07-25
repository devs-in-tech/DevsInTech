import Head from "next/head";
import Script from "next/script";
import Home from "./home";

export default function Main() {
  return (
    <>
      <Head>
        <title>DevsInTech</title>
        <meta name="description" content="DevsInTech Community website" />
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
