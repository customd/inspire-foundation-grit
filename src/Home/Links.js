import React from "react";

const Links = () => {
  return (
    <section className="quick-links dark_bg" id="links">
      <div className="container mission__wrap">
        <div className="section__title">Helpful Links</div>
        <div className="section__copy">
          <p>
            If you would like professional support for your mental health and
            wellbeing, a good place to start is with your GP or family doctor.
            They will be able to have a private conversation with you and refer
            you onwards to another service if needed.
          </p>
          <p>
            Otherwise, check out these free, easy and immediate sources of
            expert support:
          </p>
        </div>

        <ul className="quick-links__wrap section__copy">
          <li className="quick-links__item">
            <strong>Free call or text 1737</strong> any time to talk to a
            trained counsellor about anything on your mind.
          </li>
          <li className="quick-links__item">
            <a
              href="https://www.youthline.co.nz/counselling.html"
              target="__blank"
            >
              <strong>Youthline</strong>
            </a>{" "}
            0800 376 633, free text 234 or{" "}
            <a
              href="https://www.youthline.co.nz/email-counselling.html"
              target="__blank"
            >
              email
            </a>{" "}
            or{" "}
            <a
              href="https://www.youthline.co.nz/web-chat-counselling.html"
              target="__blank"
            >
              online chat
            </a>
            .
          </li>
          <li className="quick-links__item">
            <a
              href="https://www.whatsup.co.nz/getting-in-touch/"
              target="__blank"
            >
              <strong>What's Up</strong>
            </a>{" "}
            0800 942 8787 (for 5–18 year olds). Phone counselling is available
            Monday to Friday, 1pm–10pm and weekends, 3pm–10pm.
          </li>
          <li className="quick-links__item">
            <a href="https://thelowdown.co.nz/" target="__blank">
              <strong>The Lowdown</strong>
            </a>
            , 24/7 support by phone, text, email, or web chat
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Links;
