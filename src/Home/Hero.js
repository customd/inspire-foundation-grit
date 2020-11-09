import React from "react";
import InteractiveMobile from "../Components/InteractiveMobile";
import InteractiveDesktop from "../Components/InteractiveDesktop";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__wrap">
        <div className="hero__content">
          <div className="hero__image">
            <img alt="GRIT logo" src="../images/grit-logo-white.png" />
          </div>
          <InteractiveMobile />
          <InteractiveDesktop />
        </div>
      </div>
    </section>
  );
};

export default Hero;
