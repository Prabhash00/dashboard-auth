import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

function ChartCard() {
  const [mode, setMode] = useState("bar");

  const data = [
    { month: "Jan", avgTemp: 2, productSales: 162000 },
    { month: "Mar", avgTemp: 6, productSales: 352000 },
    { month: "May", avgTemp: 16, productSales: 562000 },
    { month: "Jul", avgTemp: 23, productSales: 612000 },
    { month: "Sep", avgTemp: 13, productSales: 462000 },
    { month: "Nov", avgTemp: 9, productSales: 200000 },
  ];

  const chartOptions = {
    data,
    title: {
      text: "Ice Cream Sales",
    },
    height: 270,
    width: 280,
    margin: 10,
    padding: {
      top: 70,
      bottom: 20,
      left: 2,
      right: 2,
    },
    series: [
      {
        type: mode,
        xKey: "month",
        yKey: "productSales",
        label: {
          enabled: true,
          formatter: (params) => `${Math.round(params.datum.avgTemp)}°C`,
          placement: "outside-end",
          offset: 20,
          style: {
            fontSize: 14,
            color: "black",
            fontWeight: "bold",
          },
        },
        columnWidth: 30,
      },
    ],
    axes: [
      {
        type: "number",
        position: "left",
        keys: ["productSales"],
        label: {
          formatter: (params) => {
            const value = params.value;
            if (value >= 1000000) return `${Math.round(value / 1000000)}M`;
            if (value >= 1000) return `${Math.round(value / 1000)}K`;
            return value;
          },
        },
      },
      {
        type: "category",
        position: "bottom",
        keys: ["month"],
      },
    ],
  };

  const changeMode = () => {
    setMode((prev) => (prev === "bar" ? "line" : "bar"));
  };

  return (
    <div>
      <AgCharts options={chartOptions} />
      <button onClick={changeMode} className="toggle-btn button-global">
        Switch to {mode === "bar" ? "Line" : "Bar"} Chart
      </button>
    </div>
  );
}

export default ChartCard;
