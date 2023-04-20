import Navbar from "@/components/Navbar";
import Head from "next/head";
import Script from "next/script";
export default function Home() {
  return (
    <>
      <Head>
        <title>Devs In Tech</title>
        <meta name="description" content="Devs In Tech Community website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
      <Navbar />
    </>
  );
}
