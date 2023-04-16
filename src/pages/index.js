import Head from "next/head";
import About from "./about";
import Home from "./home";

export default function Main() {
  return (
    <>
      <Head>
        <title>Devs In Tech</title>
        <meta name="description" content="Devs In Tech Community website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
      <About />
    </>
  );
}
