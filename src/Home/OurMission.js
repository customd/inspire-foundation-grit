import React from "react";

const OurMission = () => {
  return (
    <section className="mission dark_bg" id="our-mission">
      <div className="container col_wrap mission__wrap">
        <div className="mission__sidebar">
          <div className="mission__logo">
            <img alt="GRIT logo" src="images/grit-logo-white.png" />
          </div>
        </div>
        <div>
          <div className="section__title">Our mission</div>
          <div className="section__header">
            Find a better you, one day at a time.
          </div>
          <div className="section__copy">
            <p>
              A well-being programme that shares insights to help and assist
              young individuals to build their self-belief, their resilience and
              to achieve excellence in their chosen field.
            </p>
            <div className="section__block">
              <h4>GOALS</h4>
              <p>
                Establishing a direction for your life, a clear view of the
                future and results you want in your chosen timeframe.
              </p>
            </div>
            <div className="section__block">
              <h4>RESILIENCE</h4>
              <p>
                The ability to adapt well in the face of adversity, to know your
                strengths to bounce back from difficult life events and work
                through the challenges of emotional upheaval and hardship.
              </p>
            </div>
            <div className="section__block">
              <h4>INSIGHTS</h4>
              <p>
                To discover a deeper understanding that will influence our
                current thinking in a way that leads to positive change.
              </p>
            </div>
            <div className="section__block">
              <h4>TOGETHER</h4>
              <p>
                Mutual support. Having an impartial mentor or supporter with the
                capacity to listen, promote considered discussion, impart
                knowledge and leverage life experience. A mirror to the
                individuals’ aspirations in the now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
