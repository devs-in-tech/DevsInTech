export { default as Hello } from "./Hello";
export { default as HeroSection } from "./HeroSection";
export { default as AboutCommunity } from "./HomePage/aboutCommunity";
export { default as stats } from "./HomePage/stats";
export { default as header } from "./header";


const Hello = React.lazy(("./Hello"));
const HeroSection = React.lazy(() => import("./HeroSection"));
const AboutCommunity = React.lazy(() => import("./HomePage/aboutCommunity"));

import React, { Suspense } from 'react';

function App() {
  return (
    <div>
      {/* Other components */}
      <Suspense fallback={<div>Loading...</div>}>
        <Hello />
        <HeroSection />
        <AboutCommunity />
        <stats />
        <header />
      </Suspense>
    </div>
  );
}

export default App;
export { default as Hello } from "./Hello";
export { default as HeroSection } from "./HeroSection";
export { default as AboutCommunity } from "./HomePage/aboutCommunity";
export { default as stats } from "./HomePage/stats";
export { default as header } from "./header";
