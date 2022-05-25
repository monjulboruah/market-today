import react from "react";
import { useState, useEffect } from "react";
import "../../../assets/css/table.css";
import axios from "axios";

function data(loading, topVol) {
  return loading == true ? (
    ""
  ) : (
    <div className="main-data-container">
      <h2 className="table-heading">Top Volume Stocks:</h2>

      <div className="center">
        <table>
          <thead>
            <tr id="header">
              <td>Name</td>
              <td>Last Traded Price</td>
              <td>Previous Price</td>
              <td>Quantity</td>
              <td>Turn Over(Lakh)</td>
              <td>Traded Quantity</td>
              <td>Series</td>
            </tr>
          </thead>
          <tbody>
            {topVol.map((element, index) => {
              return (
                <tr id={index}>
                  <td>{element.symbol}</td>
                  <td>{element.ltp}</td>
                  <td>{element.previousPrice}</td>
                  <td>{element.tradedQuantity}</td>
                  <td>{element.turnoverInLakhs}</td>
                  <td>{element.tradedQuantity}</td>
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
  const [topVol, setVol] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/nse/get_top_volume_stocks", {
        crossdomain: true,
      })
      .then((response) => {
        setLoading(false);
        setVol(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //console.log(gainers);

  return data(loading, topVol);
}
