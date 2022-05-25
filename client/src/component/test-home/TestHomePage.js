import React from "react";
import "./TestHomePage.css";
import logo from "../../assets/logo.png";

export default function TestHomePage() {
  return (
    <div>
      <div className="banner">
        <div className="navbar">
          <img src={logo}></img>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Market Data</a>
            </li>
            <li>
              <a href="#">Hindi News</a>
            </li>
            <li>
              <a href="#">Eng News</a>
            </li>
            <li>
              <a href="#">Metal Price</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="content">
          <h1>Latest Stock Data</h1>
          <p>
            Get the Latest Stock Market Data, <br />
            Metal Price, Business News in English and Hindi for free
          </p>
          <div>
            <button type="button" className="btn">
              <span className="btnspn"></span>
              Search
            </button>
            <button type="button" className="btn">
              <span className="btnspn"></span>
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
