import React from "react";
import "./footer.scss";
import paymentImage from "/img/payment.png";
import logo from "../../assets/thestorelogo.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="column">
          <h1>Categories</h1>
          <span>Sale</span>
          <span>Men</span>
          <span>Women</span>
          <span>Children</span>
        </div>
        <div className="column">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="column">
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti animi magni? Quaerat nisi inventore enim repellat praesentium incidunt facilis atque cumque officiis quasi, iusto asperiores! Placeat a tempore quia.</p>
        </div>
        <div className="column">
          <h1>Contact</h1>
          <span>123 Main St.</span>
          <span>Cityville, State</span>
          <span>555-555-5555</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="copyright">
            <span>©</span>Copyright 2023. All rights reserved
          </div>
        </div>
        <div className="right">
          <img src={paymentImage} alt="payments-accepted"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
