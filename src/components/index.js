
const Hello = React.lazy(("./Hello"));
const HeroSection = React.lazy(() => import("./HeroSection"));
const AboutCommunity = React.lazy(() => import("./HomePage/aboutCommunity"));
const header = React.lazy(() => import("./header/index"));
const HomePage = React.lazy(() => import("./HomePage/index"));
const content = React.lazy(() => import("./content/index"));
const Navbar = React.lazy(() => import("./Navbar"));
const testimonial = React.lazy(() => import("./testimonial"));


import React, { Suspense } from 'react';

function App() {
  return (
    <div>
      <Suspense fallback={<div className='loading'><Loader/></div>}>
        <Hello />
        <HeroSection />
        <AboutCommunity />
        <header />
        <HomePage />
        <content />
        <Navbar />
        <testimonial />
        <stats />
      </Suspense>
    </div>
  );
}

export default App;

