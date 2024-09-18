import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#about-us">About Us</a>
        <a href="#privacy-policy">Privacy Policy</a>
        <a href="#terms-of-use">Terms of Use</a>
        <a href="#subscription-policy">Subscription Policy</a>
        <a href="#contact-us">Contact Us</a>
      </div>
      <div className="footer-copyright">
        <p>Copyrights © 2024 iGeek Care. All Rights Reserved</p>
      </div>
      <div className="footer-brand">
        <p>iGeek Care</p>
      </div>
    </footer>
  );
};

export default Footer;
