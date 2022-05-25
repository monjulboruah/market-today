import React, { useState, useEffect } from "react";
import PostCard from "../component/post-card/PostCard";
import axios from "axios";

function HindiNews(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/translate-content-hindi", {
        crossdomain: true,
      })
      .then((response) => {
        setNews(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(news);

  return (
    <div>
      <PostCard news={news} />
      {/* {news.map((element, index) => {
        return (
          <div id={index}>
            <h2>{element.title}</h2>
            <p>{element.desc}</p>
          </div>
        );
      })} */}
    </div>
  );
}

export default HindiNews;
