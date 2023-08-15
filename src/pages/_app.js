import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <AlanAIComponent /> */}
      <Component {...pageProps} />
    </>
  );
}
