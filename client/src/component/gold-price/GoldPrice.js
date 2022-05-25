import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/table.css";

function GoldPrice(props) {
  const [goldPrice, setGoldPrice] = useState([]);

  const [priceData, setPriceData] = useState({
    priceByWeight24Carat: [],
    priceByWeight22Carat: [],
    priceByDay: [],
    priceByCities: [],
  });

  useEffect(() => {
    setPriceData({
      priceByWeight24Carat: [],
      priceByWeight22Carat: [],
      priceByDay: [],
      priceByCities: [],
    });

    setGoldPrice([]);

    axios
      .get("http://localhost:5000/api/gold-price-today-24-carat-22-carat", {
        crossdomain: true,
      })
      .then((response) => {
        setGoldPrice(response.data.price);
        setPriceData({
          priceByWeight24Carat: response.data.result.priceByWeight24Carat,
          priceByWeight22Carat: response.data.result.priceByWeight22Carat,
          priceByDay: response.data.result.priceByDay,
          priceByCities: response.data.result.priceByCities,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main-data-container">
      <h2 className="table-heading">
        Read Gold Rate Today Latest News and Live Update, Get Gold Rate Today
        Breaking News, Articles, Photos, Gold Price in Major Cities, Gold Price
        Change in Last 15 Days
      </h2>

      <p>
        Gold prices have been the best standard for measuring inflation over the
        years. Investors have been treating gold as an important investment.
        Techiblitz provides you with gold prices in India. Our aim is to keep
        you updated. Gold prices on this page are highlighted based on data
        received from gold traders in the country. You can see the price of gold
        here every day.
      </p>

      <h2 className="table-heading">Gold Price Today:</h2>

      <div className="center">
        <table>
          <tr id="header">
            <td>24 Carat Price</td>
            <td>% Change</td>
            <td>22 Carat Price</td>
            <td>% Change</td>
          </tr>

          <tr>
            {goldPrice.map((element, index) => {
              return <td key={index}>{element}</td>;
            })}
          </tr>
        </table>
      </div>

      <h2 className="table-heading">Gold Price in Major Cities</h2>

      <div className="center">
        <table>
          <tr id="header">
            <td>Cities</td>
            <td>22 Carat</td>
            <td>24 Carat</td>
          </tr>

          {priceData.priceByCities.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.cities}</td>
                <td>{element.price22Carat}</td>
                <td>{element.price24Carat}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <h2 className="table-heading">
        Gold Price By Weight(in gram) for 24 Carat
      </h2>

      <div className="center">
        <table>
          <tr id="header">
            <td>Weight</td>
            <td>Price</td>
          </tr>

          <tbody>
            {priceData.priceByWeight24Carat.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.weight}</td>
                  <td>{element.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h2 className="table-heading">
        Gold Price By Weight(in gram) for 22 Carat
      </h2>

      <div className="center">
        <table>
          <tr id="header">
            <td>Weight</td>
            <td>Price</td>
          </tr>

          {priceData.priceByWeight22Carat.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.weight}</td>
                <td>{element.price}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <h2 className="table-heading">Gold Price Change in 15 Days</h2>

      <div className="center">
        <table>
          <tr id="header">
            <td>Date</td>
            <td>24 Carat</td>
            <td>22 Carat</td>
            <td>% Change</td>
          </tr>

          {priceData.priceByDay.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.days}</td>
                <td>{element.price24Carat}</td>
                <td>{element.price22Carat}</td>
                <td>{element.percentChangePrice}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default GoldPrice;
