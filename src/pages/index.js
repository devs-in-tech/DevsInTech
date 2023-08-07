import Head from "next/head";
import Script from "next/script";
import Home from "./home";

export default function Main() {
  return (
    <>
      <Head>
        <title>DevsInTech</title>
        <meta name="description" content="Devs In Tech promotes diversity and inclusiveness in the open source community by helping individuals with improving their skills and standing out in the tech space." />
        {/* Primary Meta Tags */}
        <meta name="title" content="DevsInTech" />
        <meta
        name="description"
        content="Devs In Tech promotes diversity and inclusiveness in the open source community by helping individuals with improving their skills and standing out in the tech space."
        />
        <meta name="language" content="en" />
        <meta name="keywords" content="DevsInTech, community, developers, tech professionals, enthusiasts, open source community, opportunities, workshops, webinars, industry experts, programming languages, frameworks, software development methodologies, emerging technologies, tech talks, panel discussions, latest trends, best practices, real-world experiences, valuable insights, inspiring conversations, networking, community events, meetups, conferences, idea sharing, collaboration, professional relationships." />
        <meta name="author" content="DevsInTech" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevsInTech" />
        <meta property="og:url" content="https://devsintech.vercel.app/" />
        <meta property="og:title" content="DevsInTech" />
        <meta
        property="og:description"
        content="Devs In Tech promotes diversity and inclusiveness in the open source community by helping individuals with improving their skills and standing out in the tech space."
        />
        <meta property="og:image" content="https://github.com/devs-in-tech/DevsInTech/assets/56786344/557c4bbc-0141-4225-9eff-a5d1d0af95e4" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://devsintech.vercel.app/" />
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
