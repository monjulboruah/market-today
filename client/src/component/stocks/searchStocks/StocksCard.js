import React from "react";
import { Link } from "react-router-dom";

export default function StocksCard(props) {
  const data = props.data;
  return (
    <div class="main-stock-container">
      <div class="container-stocks">
        {data.map((element, idx) => {
          return (
            <div class="card">
              <div class="box">
                <div class="content">
                  <h2>01</h2>
                  <h3>{element.name}</h3>

                  <Link
                    to={"/get-company-data/" + element.symbol}
                    className="a"
                  >
                    {element.symbol}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
