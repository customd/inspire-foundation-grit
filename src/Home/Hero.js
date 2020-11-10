import React, { useState, useEffect } from "react";
import InteractiveMobile from "../Components/InteractiveMobile";
import InteractiveDesktop from "../Components/InteractiveDesktop";

function LazyBackground({ src }) {
  const [source, setSource] = useState("preload.jpg");

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSource(src);
  }, [src]);

  return (
    <div
      alt="GRIT logo"
      className="hero__background"
      style={{ backgroundImage: `url(${source})` }}
    ></div>
  );
}

const Hero = () => {
  return (
    <section className="hero">
      <LazyBackground src={"../images/grit-hero.jpg"} />
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
