import react from "react";
import { useState, useEffect } from "react";
import "../../../assets/css/table.css";
import axios from "axios";

function data(loading, losers) {
  return loading == true ? (
    ""
  ) : (
    <div className="main-data-container">
      <h2 className="table-heading">Top 10 Losers of Today:</h2>

      <div className="center">
        <div>
          <p>Last updated: {losers.timeStamp}</p>
        </div>
        <table>
          <tr id="header">
            <td>Company Name</td>
            <td>Open</td>
            <td>High</td>
            <td>Low</td>
            <td>Last Traded Price</td>
            <td>Previous Price</td>
            <td>Net %</td>
            <td>Last Corporate Announcement</td>
            <td>Last Corporate Announcement Date</td>
            <td>Series</td>
            <td>Traded Quantity</td>
            <td>Turn Over(Lakhs)</td>
          </tr>

          {losers.loser.map((element, index) => {
            return (
              <tr id={index}>
                <td>{element.symbol}</td>
                <td>{element.openPrice}</td>
                <td>{element.highPrice}</td>
                <td>{element.lowPrice}</td>
                <td>{element.ltp}</td>
                <td>{element.previousPrice}</td>
                <td>{element.netPrice}</td>
                <td>{element.lastCorpAnnouncement}</td>
                <td>{element.lastCorpAnnouncementDate}</td>
                <td>{element.series}</td>
                <td>{element.tradedQuantity}</td>
                <td>{element.turnoverInLakhs}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default function TopGainers() {
  const [losers, setLosers] = useState({
    loser: [],
    timeStamp: null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/nse/get_losers", {
        crossdomain: true,
      })
      .then((response) => {
        setLoading(false);
        setLosers({
          loser: response.data.data,
          timeStamp: response.data.time,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(losers);

  return data(loading, losers);
}
