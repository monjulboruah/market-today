import React from "react";
import "./TestFooter.css";
import logo from "../../assets/logo.png";
export default function TestFooter() {
  return (
    <div className="footer-class">
      <footer>
        <div className="row-footer">
          <div className="col-footer">
            <img src={logo} className="logo"></img>
            <p>
              Get the Latest Stock Market Data, <br />
              Metal Price, Business News in English and Hindi for free
            </p>
          </div>
          <div className="col-footer">
            <h3>
              Office{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>

            <p>Silchar</p>
            <p>Cachar, Assam</p>
            <p>PIN: 787055, NIT Point</p>
            <p className="email-id">contact@newsnow.com</p>
            <h4>+91 - 9859857192</h4>
          </div>
          <div className="col-footer">
            <h3>
              Links
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Stocks</a>
              </li>
              <li>
                <a href="#">Metal</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>
          <div className="col-footer">
            <h3>
              News Letter
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <form>
              <i className="fas fa-envelope icon"></i>
              <input
                type="text"
                placeholder="Enter your email id"
                required
              ></input>
              <button type="submit">
                <i class="fas fa-arrow-right"></i>
              </button>
            </form>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <hr />
        <p className="copy-right">copyright - Market Today</p>
      </footer>
    </div>
  );
}
