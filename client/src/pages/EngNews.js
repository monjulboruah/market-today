import React, { useState, useEffect } from "react";
import PostCard from "../component/post-card/PostCard";

import axios from "axios";

function EngNews(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/eng-news", {
        crossdomain: true,
      })
      .then((response) => {
        setNews(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <PostCard news={news} />
      {/* {news.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element.heading}</h2>
            <p>{element.content}</p>
          </div>
        );
      })} */}
    </div>
  );
}

export default EngNews;
