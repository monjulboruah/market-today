import React from "react";
import "../../assets/css/postcard.css";

export default function PostCard(props) {
  const news = props.news;
  let count = 0;
  return (
    <div className="main-container">
      <div class="container">
        {news.map((ele, idx) => {
          count++;
          return (
            <div class="card" key={idx}>
              <div class="box">
                <div class="content-card">
                  <h2>{count}</h2>
                  <h3>{ele.heading}</h3>
                  <p>{ele.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
