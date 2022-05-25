import React from "react";

import { Chart } from "react-google-charts";

export const data = [
  ["Day", "", "", "", ""],
  // ["Mon", 3824.70, 3769.00, 3815.30, 3814.90],
  ["Tue", 3769.0, 3815.3, 3814.9, 3824.7],
];

export const options = {
  legend: "none",
  bar: { groupWidth: "100%" }, // Remove space between bars.
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
    risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
  },
};

export function TestGraph() {
  return (
    <Chart
      chartType="CandlestickChart"
      width="100%"
      height="600px"
      data={data}
      options={options}
    />
  );
}
