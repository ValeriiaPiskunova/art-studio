import React from "react";
import Heading from "@/components/Heading/Heading";
import Banner from "@/components/Banner/Banner";
import Team from "@/components/Team/Team";
import Counter from "@/components/Counter/Counter";
import "./About.scss";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-info">
        <div className="container">
          <Heading subtitle="Who we are" title="About us" />

          <div className="about-info__container">
            <div className="about-info__first-row">
              <p className="about-info__heading">
                Elevate your online presence with our exquisite Framer
                template
              </p>
              <p className="about-info__heading--medium">
                Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>

            <div className="about-info__statistics">
              <div className="about-info__stat">
                <Counter end={127} duration={5} />
                <span>Connection</span>
              </div>
              <div className="about-info__stat">
                <Counter end={400} duration={5} />
                <span>Members</span>
              </div>
              <div className="about-info__stat">
                <Counter end={854} duration={5} />
                <span>Projects</span>
              </div>
            </div>

            <div className="about-info__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fgiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-banner">
        <Banner
          src="img/about/background.webp"
          alt="A person with blonde hair wearing a white blazer, gold jewelry, and a serious expression poses against a warm, brown backdrop."
          subtitle="LET’S TALK"
          title="Elegant designs, fine craftsmanship, and attention to detail, which can elevate the visual appeal and professionalism of your brand"
        />
      </section>

      <section className="about-team">
        <div className="container">
          <div className="about-team__container">
            <div className="about-team__text">
              <span>Our Team</span>
              <h2>
                Know the incredible people who form our great team
              </h2>
            </div>
            <p className="about-team__description">
              Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <Team />
        </div>
      </section>
    </div>
  );
};
export default About;
