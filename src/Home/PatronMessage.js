import React from "react";
import ResponsiveEmbed from "react-responsive-embed";

const PatronMessage = () => {
  return (
    <section className="patron-message" id="patron-message">
      <div className="container patron-message__wrap">
        {/* <div className="why-grit__sidebar">
          <div className="why-grit__graph">
            <img alt="Rob Waddell" src="images/rob-waddell.jpeg" />
          </div>
        </div> */}
        <div>
          <div className="patron-message__title">
            A message from our Patron - <span>Rob Waddell</span>
          </div>
          <div className="patron-message__copy">
            <ResponsiveEmbed
              src="https://player.vimeo.com/video/480717966?color=ffffff&byline=0&portrait=0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatronMessage;
