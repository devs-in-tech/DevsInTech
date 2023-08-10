import "@/styles/globals.css";
import AlanAIComponent from "./alan";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <AlanAIComponent/> */}
      <AlanAIComponent />
      <Component {...pageProps} />
    </>
  );
}
