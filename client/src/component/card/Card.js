import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="box-card">
          <h3>Card</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            accusamus eligendi placeat enim, dolores soluta suscipit odit
            obcaecati qui quae minus possimus temporibus quod saepe commodi.
            Consectetur quidem dolore doloribus.
          </p>
          <a href="#">
            <button>Click Here</button>
          </a>
          <span className="count">1</span>
        </div>

        <div className="box-card">
          <h3>Card</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            accusamus eligendi placeat enim, dolores soluta suscipit odit
            obcaecati qui quae minus possimus temporibus quod saepe commodi.
            Consectetur quidem dolore doloribus.
          </p>
          <a href="#">
            <button>Click Here</button>
          </a>
          <span className="count">2</span>
        </div>

        <div className="box-card">
          <h3>Card</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            accusamus eligendi placeat enim, dolores soluta suscipit odit
            obcaecati qui quae minus possimus temporibus quod saepe commodi.
            Consectetur quidem dolore doloribus.
          </p>
          <a href="#">
            <button>Click Here</button>
          </a>
          <span className="count">3</span>
        </div>
      </div>
    </div>
  );
}
