import React from "react";
import ResponsiveEmbed from "react-responsive-embed";

const WhyGrit = () => {
  return (
    <section className="why-grit white_bg" id="why-grit">
      <div className="container col_wrap why-grit__wrap">
        <div className="why-grit__sidebar">
          <div className="why-grit__graph">
            <img alt="Success Chart" src="images/success-chart.png" />
            <p>The success chart reality</p>
          </div>
        </div>
        <div>
          <div className="section__title">Why GRIT?</div>
          <div className="section__header">
            Developing the confidence, self-belief and mental fortitude of our
            young people.
          </div>
          <div className="section__copy">
            <p>
              We do know the challenges some of our young individuals are facing
              today? Sure, we get the ‘performing under pressure’ deal, but the
              fish-bowl they live in now doesn’t always offer the ‘time-out’
              factor that is crucial in their development. Life can appear to be
              continually under scrutiny.
            </p>
            <p>
              At the Inspire Foundation we know the wellbeing of our youth is a
              key for them to realise their potential. We want them to become
              adversity champions. Accepting that anything worth doing typically
              doesn’t come easy, and no-one is immune to the challenges that
              life can throw.
            </p>
            <p>
              Reflecting on a GRIT insight, developing commitment and taking
              action can help our young people to perform to their potential.
            </p>
          </div>
          <div className="section__trailer">
            <ResponsiveEmbed
              src="https://player.vimeo.com/video/482800702?color=ffffff&byline=0&portrait=0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGrit;
