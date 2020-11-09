import React from "react";
import { Link } from "react-router-dom";
import { MdPlayCircleOutline } from "react-icons/md";
import VideoTile from "../Components/VideoTile";
import VideoData from "../VideoData";

const Insights = () => {
  return (
    <section className="insights" id="insights">
      <div className="container insights__wrap">
        <div className="insights__header">
          <div className="insights__logo_wrap">
            <div className="insights__logo">
              <img src="../images/insights-logo.png" />
              <div className="insights__">
                <span>The Series</span>
              </div>
            </div>
          </div>
          <div className="insights__subheader">
            <MdPlayCircleOutline size={80} color={"#bbb"} />
            <div className="section__title">RESOURCES TO INSPIRE</div>
          </div>
        </div>
        <div>
          <div className="section__header">Become better equiped.</div>
          <div className="section__copy">
            <p>
              A series of inspirational videos capturing personal lessons and
              learnings from success, failure and adversity, experienced by
              fellow individuals. How they became better equipped to objectively
              review the way they think, they do, they live.
            </p>
          </div>
        </div>
        <div className="resources">
          {VideoData.map((d) => (
            <Link
              to={{
                pathname: `/insights/${d.url}`,
                state: d,
              }}
            >
              <VideoTile name={d.name} title={d.title} image={d.image} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
