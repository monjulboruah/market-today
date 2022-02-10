import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/table.css";
import axios from "axios";

function data(loading, indices) {
  return loading == true ? (
    ""
  ) : (
    <div className="main-data-container">
      <h2 className="table-heading">All Indices Information:</h2>

      <div className="center">
        <table>
          <tr id="header">
            <td>Index Name</td>
            <td>Index Order</td>
            <td>Previous Close</td>
            <td>Last Price</td>
            <td>Open</td>
            <td>High</td>
            <td>Low</td>
            <td>Year High</td>
            <td>Year Low</td>
            <td>% Change</td>
            <td>Time</td>
          </tr>

          {indices.map((element, index) => {
            return (
              <tr id={index}>
                <td>{element.indexName}</td>
                <td>{element.indexOrder}</td>
                <td>{element.previousClose}</td>
                <td>{element.last}</td>
                <td>{element.open}</td>
                <td>{element.high}</td>
                <td>{element.low}</td>
                <td>{element.yearHigh}</td>
                <td>{element.yearLow}</td>
                <td>{element.percChange}</td>
                <td>{element.timeVal}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default function AllIndices() {
  const [indices, setIndices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/nse/get_indices", {
        crossdomain: true,
      })
      .then((response) => {
        setLoading(false);
        setIndices(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(indices);
  return data(loading, indices);
}
