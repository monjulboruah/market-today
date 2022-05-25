import React from "react";
import { useState, useEffect } from "react";
import "../../../assets/css/searchbar.css";
import search from "../../../assets/search.png";
import axios from "axios";
import Loader from "../../loader/Loader";
import StocksCard from "./StocksCard";

function showSearchResult(searchResult, loading) {
  if (searchResult.data == null) {
    return;
  } else if (loading == true) {
    return <Loader />;
  } else {
    return <StocksCard data={searchResult.data} />;
    // <div>
    //   {searchResult.data.map((ele, key) => {
    //     return (
    //       <div key={key}>
    //         <h3>{ele.name}</h3>
    //         <p>
    //           <Link to={"/get-company-data/" + ele.symbol}>{ele.symbol}</Link>
    //         </p>
    //       </div>
    //     );
    //   })}
    // </div>
  }
}

export default function SearchStock() {
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState({
    data: null,
  });
  const [loading, setLoading] = useState(false);

  const onSearchKeywordChange = (e) => {
    setSearchResult({
      data: null,
    });
    setKeyword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (keyword === "") {
      alert("Please enter something");
      return;
    } else {
      axios
        .get(
          "http://localhost:5000/nse/search_stocks",
          {
            params: {
              keyword: keyword,
            },
          },
          {
            crossdomain: true,
          }
        )
        .then((response) => {
          setLoading(false);
          setSearchResult({
            data: response.data,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="searchContainer">
        <h2>Search Stocks:</h2>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Stocks"
            value={keyword}
            onChange={(e) => onSearchKeywordChange(e)}
          />
          <button onClick={(e) => onSubmit(e)}>
            <img src={search}></img>
          </button>
        </div>
        <div>{showSearchResult(searchResult, loading)}</div>
      </div>
    </>
  );
}
