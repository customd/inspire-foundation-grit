import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import ResponsiveEmbed from "react-responsive-embed";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
} from "react-share";
import { FaPlay } from "react-icons/fa";
import MainNavigation from "../Components/MainNavigation";
import Footer from "../Components/Footer";
import VideoData from "../VideoData";

const Article = (state) => {
  const data = state.location.state;
  return (
    <div>
      <FadeIn>
        <Helmet>
          <title>
            {data.name} - {data.title} - GRIT
          </title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <section className="article">
          <MainNavigation />
          <div className="container article__wrap">
            <div className="article__content">
              <div className="">
                <ResponsiveEmbed
                  src={`https://player.vimeo.com/video/${data.embed_code}?color=ffffff&byline=0&portrait=0`}
                  allowFullScreen
                />
              </div>
              <div className="article__block">
                <div className="article__title">{data.title}</div>
                <div className="article__row">
                  <div className="article__row">
                    <div className="article__name">{data.name}</div>
                  </div>
                  <div className="article__share">
                    <FacebookShareButton url="https://testing-grit.inspirefoundation.com/insights/jake-bailey">
                      <FacebookIcon size={40} round />
                    </FacebookShareButton>
                    <TwitterShareButton url="https://testing-grit.inspirefoundation.com/insights/jake-bailey">
                      <TwitterIcon size={40} round />
                    </TwitterShareButton>
                    <EmailShareButton url="https://testing-grit.inspirefoundation.com/insights/jake-bailey">
                      <EmailIcon size={40} round />
                    </EmailShareButton>
                  </div>
                </div>
                <div className="article__description">{data.blurb}</div>
              </div>
            </div>
            <div className="article__sidebar sidebar">
              <div className="sidebar__wrap">
                <div className="sidebar__header">
                  Watch more from our series
                </div>
                {VideoData.map((d) => (
                  <Link
                    key={d.url}
                    to={{
                      pathname: `/insights/${d.url}`,
                      state: d,
                    }}
                  >
                    <div className="sidebar__row">
                      <div
                        className="sidebar__image"
                        style={{
                          backgroundImage: `url(../images/stills/${d.image}.jpg)`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <FaPlay size={18} color="#fff" />
                      </div>
                      <div className="sidebar__content">
                        <div className="sidebar__title">{d.title}</div>
                        <div className="sidebar__name">{d.name}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </FadeIn>
    </div>
  );
};

export default Article;
