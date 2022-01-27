import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Hero from "./Hero";
import PatronMessage from "./PatronMessage";
import Navigation from "../Components/Navigation";
import MainNavigation from "../Components/MainNavigation";
import Footer from "../Components/Footer";
import WhyGrit from "./WhyGrit";
import OurMission from "./OurMission";
import Insights from "./Insights";
import Links from "./Links";
import Mentorship from "./Mentorship";

const Home = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > (window.innerHeight * -1) / 2;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );
  return (
    <>
      <div className={`nav-container ${hideOnScroll ? "hide" : "show"}`}>
        <MainNavigation isHomePage />
      </div>
      <Navigation />
      <Hero />
      <PatronMessage />
      <WhyGrit />
      <OurMission />
      <Insights />
      <Links />
      <Mentorship />
      <Footer />
    </>
  );
};

export default Home;
