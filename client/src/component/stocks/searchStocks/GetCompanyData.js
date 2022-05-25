import react from "react";
import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";
import "../../../assets/css/table.css";

export default function GetCompanyData(props) {
  const { symbol } = useParams();
  const [companyData, setCompanyData] = useState({
    data: null,
  });

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/nse/get_quote_info",
        {
          params: {
            companyName: symbol,
          },
        },
        {
          crossdomain: true,
        }
      )
      .then((response) => {
        setCompanyData({
          data: response.data.data[0],
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function getData() {
    if (companyData.data == null) {
      return "";
    } else {
      return (
        <div className="main-data-container">
          <h2 className="table-heading">{companyData.data.companyName}</h2>
          <div className="center">
            <table>
              <tbody>
                <tr>
                  <td id="header">Company Name: </td>
                  <td>{companyData.data.companyName}</td>
                </tr>
                <tr>
                  <td id="header">Base Price: </td>
                  <td>{companyData.data.basePrice}</td>
                </tr>
                <tr>
                  <td id="header">Close Price:</td>
                  <td>{companyData.data.closePrice}</td>
                </tr>
                <tr>
                  <td id="header">Day High: </td>
                  <td>{companyData.data.dayHigh}</td>
                </tr>
                <tr>
                  <td id="header">Total Sell Quantity</td>
                  <td>{companyData.data.totalSellQuantity}</td>
                </tr>
                <tr>
                  <td id="header">Total Traded Value</td>
                  <td>{companyData.data.totalTradedValue}</td>
                </tr>
                <tr>
                  <td id="header">Total Traded Volume</td>
                  <td>{companyData.data.totalTradedVolume}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  return getData();
}
