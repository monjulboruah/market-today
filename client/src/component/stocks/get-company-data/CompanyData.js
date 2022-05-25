import react from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { companyName } from "./CompanyName";

export default function CompanyData() {
  const [inputString, setInputString] = useState({
    value: "",
  });
  const [searchParams, setSearchParams] = useState("");
  const [companyArr, setCompanyArr] = useState([]);
  const [companyInfo, setCompanyInfo] = useState({
    data: null,
  });

  const getSearchStringFromName = (str) => {
    setCompanyInfo({
      data: null,
    });
    setInputString({
      value: str,
    });
    console.log(companyInfo);
    const filteredCompanyName = companyName.filter((name) => {
      return name.includes(str.toUpperCase());
    });
    //console.log(filteredCompanyName);
    if (str === "") {
      setCompanyArr([]);
    } else {
      setCompanyArr(filteredCompanyName);
    }
  };

  const setCompanyName = (e) => {
    setCompanyInfo({
      data: null,
    });
    setSearchParams(e.target.innerText);
    setInputString({
      value: e.target.innerText,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setCompanyInfo({
      data: null,
    });
    setCompanyArr([]);

    if (searchParams === "") {
      alert("Company name empty or enter another company name");
      return;
    } else {
      axios
        .get(
          "http://localhost:5000/nse/get_quote_info",
          {
            params: {
              companyName: searchParams,
            },
          },
          {
            crossdomain: true,
          }
        )
        .then((response) => {
          setSearchParams("");
          setCompanyInfo(response.data.data[0]);
        })
        .catch((err) => console.log(err));
    }
  };

  //console.log(companyInfo);

  function showCompanyInfo() {
    if (companyInfo.data === null) {
      return "";
    } else {
      return (
        <table>
          <tbody>
            <tr>
              <td>Company Name: </td>
              <td>{companyInfo.companyName}</td>
            </tr>
            <tr>
              <td>Base Price: </td>
              <td>{companyInfo.basePrice}</td>
            </tr>
            <tr>
              <td>Close Price:</td>
              <td>{companyInfo.closePrice}</td>
            </tr>
            <tr>
              <td>Day High: </td>
              <td>{companyInfo.dayHigh}</td>
            </tr>
            <tr>
              <td>Total Sell Quantity</td>
              <td>{companyInfo.totalSellQuantity}</td>
            </tr>
            <tr>
              <td>Total Traded Value</td>
              <td>{companyInfo.totalTradedValue}</td>
            </tr>
            <tr>
              <td>Total Traded Volume</td>
              <td>{companyInfo.totalTradedVolume}</td>
            </tr>
          </tbody>
        </table>
      );
    }
  }

  return (
    <div className="container">
      <h2>Enter Stocks Name</h2>

      <div className="row">
        <input
          type="text"
          value={inputString.value}
          onChange={(e) => getSearchStringFromName(e.target.value)}
        />
        {companyArr.length == 0
          ? ""
          : companyArr.map((val, index) => {
              return (
                <p key={index} onClick={(e) => setCompanyName(e)}>
                  {val}
                </p>
              );
            })}
      </div>
      <div className="row">
        <button onClick={(e) => onSubmit(e)}>Search</button>
      </div>
      <div className="row">{showCompanyInfo()}</div>
    </div>
  );
}
