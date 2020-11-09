import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <div>© {year} Inspire Foundation</div>
      </div>
    </div>
  );
};

export default Footer;
