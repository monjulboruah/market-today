import React, { useState, useEffect } from "react";
import axios from "axios";

function CurrencyExchange(props) {
  const [exchangeRate, setExchangeRate] = useState({
    rate: {},
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/currency-exchange", {
        crossdomain: true,
      })
      .then((response) => {
        setExchangeRate({
          rate: response.data["Realtime Currency Exchange Rate"],
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <p>
        <b>From Currency:</b> {exchangeRate.rate["2. From_Currency Name"]}
        {"  "}
        {exchangeRate.rate["1. From_Currency Code"]}
      </p>
      <p>
        <b>To Currency:</b> {exchangeRate.rate["4. To_Currency Name"]}
        {"  "}
        {exchangeRate.rate["3. To_Currency Code"]}
      </p>
      <p>
        <b>Exchange Rate:</b> {exchangeRate.rate["5. Exchange Rate"]}
      </p>
    </div>
  );
}

export default CurrencyExchange;
