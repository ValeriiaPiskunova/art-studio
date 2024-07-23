import React from "react";
import Heading from "../../components/Heading/Heading";
import ServicesList from "../../components/ServicesList/ServicesList";
import Banner from "../../components/Banner/Banner";
import "./Services.scss";

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <Heading
            subtitle="OUR  SERVICES"
            title="We Capture <br/> Moments & <br/> make Memories"
          />
          <img
            className="services-hero__img"
            src="img/services/services-img.webp"
            alt="Two people, one with dark skin and the other with light skin, pose closely together, wrapped in luxurious orange fabric."
            loading="lazy"
          />
          <h2 className="services-hero__text">
            Impress your clients with a sleek and professional website
            that showcases your agency's expertise and creativity.
          </h2>
        </div>
      </section>

      <section className="services-list">
        <ServicesList />
      </section>

      <section className="services-banner">
        <Banner
          src="img/services/services-bg.webp"
          alt="A person in a light gray suit and sunglasses is sitting on a dark sofa in front of a window with blinds, looking to the side."
          subtitle="LET’S TALK"
          title="Elegant designs, fine craftsmanship, and attention to detail, which can elevate the visual appeal and professionalism of your brand"
        />
      </section>
    </div>
  );
};

export default Services;
