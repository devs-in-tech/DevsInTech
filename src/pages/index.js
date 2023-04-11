import Head from "next/head";
import About from "./about";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devs In Tech</title>
        <meta name="description" content="Devs In Tech Community website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </>
  );
}
