import React from "react";
import "./TestSearchBar.css";
import search from "../../assets/search.png";

export default function TestSearchBar() {
  return (
    <div className="searchContainer">
      <form className="search-bar">
        <input type="text" placeholder="Search Stocks" name="q" />
        <button type="submit">
          <img src={search}></img>
        </button>
      </form>
    </div>
  );
}
