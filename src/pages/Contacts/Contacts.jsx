import React from "react";
import Heading from "@/components/Heading/Heading";
import ContactForm from "@/components/ContactForm/ContactForm";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <section className="contacts-info">
          <Heading subtitle="REACH OUT" title="Contact us" />
          <div className="contacts-info__container">
            <img
              src="img/contacts/contacts.webp"
              alt="Elegant facade of a grand building with large windows, arched doorways, and decorative elements, flanked by manicured trees."
              className="contacts-info__image"
              loading="lazy"
            />
            <div className="contacts-info__details">
              <h2 className="contacts-info__heading contacts-heading">
                Head Office
              </h2>
              <p className="contacts-text">
                123 Main Street, Anytown, USA.
              </p>
              <p className="contacts-text">
                +1 555-123-4567, +1 555-987-6543
              </p>
              <p className="contacts-text">newyork@framer.com</p>
              <div className="contacts-info__social">
                <a href="https://instagram.com" target="_blank">
                  INSTAGRAM
                </a>
                <a href="https://twitter.com" target="_blank">
                  TWITTER
                </a>
                <a href="https://facebook.com" target="_blank">
                  FACEBOOK
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="contacts-message">
          <div className="contacts-message__info">
            <h2 className="contacts-message__heading contacts-heading">
              Send us a message
            </h2>
            <p className="contacts-text">
              Complete the form, and our dedicated team will respond
              to you within 24 hours.
            </p>
          </div>
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default Contacts;
