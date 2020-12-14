import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <div>
          © {year} Inspire Foundation. No part of this video may be reproduced
          without permission
        </div>
      </div>
    </div>
  );
};

export default Footer;
