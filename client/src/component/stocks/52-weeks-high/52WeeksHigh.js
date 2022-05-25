import react from "react";
import { useState, useEffect } from "react";
import "../../../assets/css/table.css";
import axios from "axios";

function data(loading, high) {
  return loading == true ? (
    ""
  ) : (
    <div className="main-data-container">
      <h2 className="table-heading">52 Weeks High Stocks:</h2>
      <div className="center">
        <table>
          <tr id="header">
            <td>Symbol</td>
            <td>Name</td>
            <td>Date</td>
            <td>Value</td>
            <td>LTP</td>
            <td>Old Value</td>
            <td>Date</td>
            <td>Previous</td>
            <td>Change</td>
            <td>% Change</td>
          </tr>

          {high.map((element, index) => {
            return (
              <tr id={index}>
                <td>{element.symbol}</td>
                <td>{element.symbolDesc}</td>
                <td>{element.dt}</td>
                <td>{element.value}</td>
                <td>{element.ltp}</td>
                <td>{element.value_old}</td>
                <td>{element.dt}</td>
                <td>{element.prev}</td>
                <td>{element.change}</td>
                <td>{element.pChange}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default function FiftyTwoWeeksHigh() {
  const [high, setHigh] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/nse/get_52_week_high", {
        crossdomain: true,
      })
      .then((response) => {
        setLoading(false);
        setHigh(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return data(loading, high);
}
