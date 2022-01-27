import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MdMenu, MdClose } from "react-icons/md";
import { HashLink } from "react-router-hash-link";

const Anchor = ({ samePage, href, children }) =>
  samePage ? (
    <AnchorLink href={href}>{children}</AnchorLink>
  ) : (
    <HashLink to={`/${href}`}>{children}</HashLink>
  );

Anchor.propTypes = {
  samePage: PropTypes.bool,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

Anchor.defaultProps = {
  samePage: false,
};

const MainNavigation = ({ isHomePage }) => {
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
                  <Anchor href="#why-grit" samePage={isHomePage}>
                    Why GRIT
                  </Anchor>
                </li>
                <li onClick={() => setNavOpen(false)}>
                  <Anchor href="#patron-message" samePage={isHomePage}>
                    A Message From Our Patron - Rob Waddell
                  </Anchor>
                </li>
                <li onClick={() => setNavOpen(false)}>
                  <Anchor href="#our-mission" samePage={isHomePage}>
                    Our Mission
                  </Anchor>
                </li>
                <li onClick={() => setNavOpen(false)}>
                  <Anchor href="#insights" samePage={isHomePage}>
                    Insights: The Series
                  </Anchor>
                </li>
                {/* <li onClick={() => setNavOpen(false)}>
                  <AnchorLink href="#links">Helpful Links</AnchorLink>
                </li> */}
                <li onClick={() => setNavOpen(false)}>
                  <Anchor href="#mentorship" samePage={isHomePage}>
                    Mentorship
                  </Anchor>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

MainNavigation.propTypes = {
  isHomePage: PropTypes.bool,
};

MainNavigation.defaultProps = {
  isHomePage: false,
};

export default MainNavigation;
