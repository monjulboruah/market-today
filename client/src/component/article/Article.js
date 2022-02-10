import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s,
        </p>
      </div>
    </div>
  </div>
);

export default Article;
