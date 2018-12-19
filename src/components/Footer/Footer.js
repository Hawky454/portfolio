import React from 'react';
import './Footer.css';

const Footer = props => (
  <div className="footer-container">
    <p>
      &copy; David John Miller |{' '}
      <a className="footer-email" href="mailto:hawky454@gmail.com" alt="email">
        hawky454@gmail.com
      </a>{' '}
      | 512-557-6584
    </p>
  </div>
);

export default Footer;
