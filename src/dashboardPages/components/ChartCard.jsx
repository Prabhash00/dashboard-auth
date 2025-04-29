import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

function ChartCard() {
  const [mode, setMode] = useState("bar");

  const data = [
    { month: "Jan", avgTemp: 2.3, productSales: 162000 },
    { month: "Mar", avgTemp: 6.3, productSales: 352000 },
    { month: "May", avgTemp: 16.3, productSales: 562000 },
    { month: "Jul", avgTemp: 22.8, productSales: 612000 },
    { month: "Sep", avgTemp: 12.83, productSales: 462000 },
    { month: "Nov", avgTemp: 9.1, productSales: 200000 },
  ];

  const chartOptions = {
    data,
    height: 230,
    series: [
      {
        type: mode,
        xKey: "month",
        yKey: "productSales",
      },
    ],
  };

  const changeMode = () => {
    setMode((prev) => (prev === "bar" ? "line" : "bar"));
  };

  return (
    <div>
      
      <AgCharts options={chartOptions} />
      <button
        onClick={changeMode}
        className="toggle-btn button-global"
      >
        Switch to {mode === "bar" ? "Line" : "Bar"} Chart
      </button>
    </div>
  );
}

export default ChartCard;
