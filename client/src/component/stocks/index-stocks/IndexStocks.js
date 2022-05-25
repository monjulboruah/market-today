import react, { useState } from "react";
import axios from "axios";
import { indexStocksNames } from "./IndexStocksNames";

export default function IndexStocks() {
  const [symbol, setSymbol] = useState("");
  const [indexData, setIndexData] = useState([]);

  const onIndexChange = (e) => {
    setSymbol(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        "http://localhost:5000/nse/get_index_stocks",
        {
          params: {
            symbol: symbol,
          },
        },
        {
          crossdomain: true,
        }
      )
      .then((response) => {
        setIndexData(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  console.log(symbol);
  console.log(indexData);

  function getIndexData() {
    return indexData.length == 0 ? (
      ""
    ) : (
      <div>
        <table>
          <thead>
            <tr>
              <td>Company Name</td>
              <td>Open</td>
              <td>High</td>
              <td>Low</td>
              <td>LTP</td>
            </tr>
          </thead>
          <tbody>
            {indexData.map((data, index) => {
              return (
                <tr id={index}>
                  <td>{data.symbol}</td>
                  <td>{data.open}</td>
                  <td>{data.high}</td>
                  <td>{data.low}</td>
                  <td>{data.ltP}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <h3>Select index</h3>
        <select onChange={(e) => onIndexChange(e)}>
          {indexStocksNames.map((data) => {
            return <option value={data.symbol}>{data.name}</option>;
          })}
        </select>
        <button onClick={(e) => onSubmit(e)}>Search</button>
      </div>
      <div className="row">{getIndexData()}</div>
    </div>
  );
}
