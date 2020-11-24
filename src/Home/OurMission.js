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
              A life programme that shares insights to help and assist
              strengthening the resilience of young individuals who have the
              potential and desire to achieve excellence in their chosen field.
            </p>
            <div className="section__block">
              <h4>GOALS</h4>
              <p>
                The mindset to manage the processing of challenges, and
                understanding the development of setting effective, realistic
                goals and a structure to achieve them.
              </p>
            </div>
            <div className="section__block">
              <h4>RESILIENCE</h4>
              <p>
                The ability to recognise, understand and strengthen well-being,
                during adversity.
              </p>
            </div>
            <div className="section__block">
              <h4>INSIGHTS</h4>
              <p>
                To discover insights that influence current thinking in a way
                that leads to positive change.
              </p>
            </div>
            <div className="section__block">
              <h4>TOGETHER</h4>
              <p>
                Never alone. Having an impartial mentor or supporter with the
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
