import Head from "next/head";
import Script from "next/script";
import Home from "./home";

const About = React.lazy(() => import("./about/index"));
const events = React.lazy(() => import("./events/index"));
const home = React.lazy(() => import("./home"));
const team = React.lazy(() => import("./team"));


export default function Main() {
  About, events, home, team
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
