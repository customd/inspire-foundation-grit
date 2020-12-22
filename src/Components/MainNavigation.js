import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MdMenu, MdClose } from "react-icons/md";

const MainNavigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <Fragment>
      <div className="main-nav">
        <div className="main-nav__wrap">
          <Link to={"/"}>
            <div className="main-nav__block">
              <div className="main-nav__logo">
                <img alt="GRIT logo" src="../images/grit-logo.svg" />
              </div>
              <div className="main-nav__subtext">
                Finding <span>a better</span> you.
              </div>
            </div>
          </Link>
          <div isNavOpen={!isNavOpen} onClick={() => setNavOpen(true)}>
            <MdMenu size={40} color="#3f3f3f" />
          </div>
        </div>
      </div>
      {isNavOpen && (
        <div className="nav-modal">
          <div className="nav-modal__wrap">
            <div className="nav-close">
              <MdClose
                onClick={() => setNavOpen(false)}
                size={40}
                color="#fff"
              />
            </div>
            <div className="nav-content">
              <ul>
                <li onClick={() => setNavOpen(false)}>
                  <AnchorLink href="#why-grit">Why GRIT</AnchorLink>
                </li>
                <li onClick={() => setNavOpen(false)}>
                  <AnchorLink href="#patron-message">
                    A Message From Our Patron - Rob Waddell
                  </AnchorLink>
                </li>
                <li onClick={() => setNavOpen(false)}>
                  <AnchorLink href="#our-mission">Our Mission</AnchorLink>
                </li>
                <li onClick={() => setNavOpen(false)}>
                  <AnchorLink href="#insights">Insights: The Series</AnchorLink>
                </li>
                {/* <li onClick={() => setNavOpen(false)}>
                  <AnchorLink href="#links">Helpful Links</AnchorLink>
                </li> */}
                <li onClick={() => setNavOpen(false)}>
                  <AnchorLink href="#mentorship">Mentorship</AnchorLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default MainNavigation;
