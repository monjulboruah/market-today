import react from "react";
import { useState, useEffect } from "react";
import "../../../assets/css/table.css";
import axios from "axios";

function data(loading, topStocks) {
  return loading == true ? (
    ""
  ) : (
    <div className="main-data-container">
      <h2 className="table-heading">Top Value Stocks:</h2>

      <div className="center">
        <table>
          <tr id="header">
            <td>Name</td>

            <td>Net</td>
            <td>Last Traded Price</td>
            <td>Previous Price</td>
            <td>Quantity</td>
            <td>Turn Over</td>
            <td>Series</td>
          </tr>

          <tbody>
            {topStocks.map((element, index) => {
              return (
                <tr id={index}>
                  <td>{element.symbol}</td>
                  <td>{element.netPrice}</td>
                  <td>{element.ltp}</td>
                  <td>{element.previousPrice}</td>
                  <td>{element.tradedQuantity}</td>
                  <td>{element.turnoverInLakhs}</td>
                  <td>{element.series}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function TopValueStocks() {
  const [topStocks, setTopStocks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/nse/get_top_value_stocks", {
        crossdomain: true,
      })
      .then((response) => {
        setLoading(false);
        setTopStocks(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(topStocks);

  return data(loading, topStocks);
}
