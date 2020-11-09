import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoTile = ({ title, name, image }) => {
  return (
    <div className="resources__tile">
      <div className="resources__placeholder">
        <FaPlay size={32} color="#fff" />
        <img src={`../images/stills/${image}.jpg`} />
      </div>
      <div className="resources__blurb">{title}</div>
      <div className="resources__name">{name}</div>
    </div>
  );
};

export default VideoTile;
