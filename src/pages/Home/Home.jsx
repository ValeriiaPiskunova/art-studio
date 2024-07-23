import React from "react";
import Heading from "../../components/Heading/Heading";
import Clients from "../../components/Clients/Clients";
import CTAButton from "../../components/CTAButton/CTAButton";
import PhotographyWeatherWidget from "../../components/PhotographyWeatherWidget/PhotographyWeatherWidget";
import ImageContainer from "../../components/Portfolio/Portfolio";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <img
          className="hero__image"
          src="img/home/hero-section.webp"
          alt="A woman with curly hair adorned with a golden flower and intricate earrings, looking to the side against a floral-patterned background."
          loading="lazy"
        />
        <h1>
          Award winning <br />
          PHOTOGRAPHY <br /> & Art Studio
        </h1>
      </section>

      <section className="info">
        <div className="container">
          <div className="info__text-container">
            <Heading
              subtitle="ABOUT US"
              title="More than <br /> PICTURES we <br /> make FINE ART"
            />
            <p className="info__heading">
              Chloé Laurent is exquisitely designed, radiating
              elegance at every pixel.
            </p>
            <p className="info__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          </div>
          <PhotographyWeatherWidget />
        </div>
      </section>

      <section className="clients">
        <div className="container">
          <Heading
            subtitle="Testimony"
            title="Shared by <br /> PERSPECTIVE <br /> by OUR CLIENTS"
            reverse
          />
          <Clients />
        </div>
      </section>

      <section className="template">
        <div className="container">
          <div className="template__container">
            <img
              className="template__img"
              src="img/home/template.webp"
              alt="A woman in a white dress poses while another woman adjusts a camera in a rustic studio setting."
              loading="lazy"
            />
            <div className="template__info">
              <h2>
                This template is suited for photography and creative
                agencies.
              </h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <CTAButton />
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <div className="container">
          <Heading
            subtitle="PORTFOLIO"
            title="We have PICKED <br /> these PROJECTS <br /> to DELIGHT you"
          />
          <ImageContainer />
        </div>
      </section>
    </div>
  );
};

export default Home;
