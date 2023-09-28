import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <div className="info-block">
          <h4>Hours</h4>
          <ul>
            <li>Tues - Thurs 12pm - 10pm</li>
            <li>Fri 12pm - 1am</li>
            <li>Sat 11am - 1am</li>
            <li>Sun 10am - 9pm</li>
          </ul>
          <h4>Contact</h4>
          <h4>Newsletter</h4>
        </div>
        <div className="info-block">
          <h4>Locations</h4>
          302 N Green Street, <br /> 3rd Floor <br /> Chicago, IL 60607 <br />
          773-645-1400
        </div>
      </div>
      <div className="footer-links">
        <a href="">Frequent Diner</a>
        <a href="">Gift Cards</a>
        <a href="">Employment</a>
        <a href="">Leye.com</a>
        <a href="">Terms of Use</a>
        <a href="">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
