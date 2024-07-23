import React from "react";
import CTAButton from "../CTAButton/CTAButton";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <h2 className="footer__title">Let’s us Collaborate</h2>
          <CTAButton />
        </div>
        <div className="footer__column">
          <h3 className="footer__heading">SOCIALS</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="https://instagram.com" target="_blank">
                INSTAGRAM
              </a>
            </li>
            <li className="footer__list-item">
              <a href="https://twitter.com" target="_blank">
                TWITTER
              </a>
            </li>
            <li className="footer__list-item">
              <a href="https://facebook.com" target="_blank">
                FACEBOOK
              </a>
            </li>
            <li className="footer__list-item">
              <a href="https://tiktok.com" target="_blank">
                TIKTOK
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__heading">TRANSPARENCY</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#">WHAT YOU GET</a>
            </li>
            <li className="footer__list-item">
              <a href="#">TERMS & CONDITIONS</a>
            </li>
            <li className="footer__list-item">
              <a href="#">FAQs</a>
            </li>
            <li className="footer__list-item">
              <a href="#">PRIVACY POLICY</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Copyright 2023. Framer template handcrafted by Biyified</p>
      </div>
    </footer>
  );
};

export default Footer;
