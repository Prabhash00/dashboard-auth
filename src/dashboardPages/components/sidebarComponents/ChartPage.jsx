import React, { useEffect, useRef } from "react";
import ChartCard from "../ChartCard";
import { useNavigate } from "react-router-dom";
import { AgCharts } from "ag-charts-community";

function ChartPage() {
  const navigate = useNavigate();
  const pieChartRef = useRef(null);
  const chartInstance = useRef(null);

  const pieChartData = [
    { type: "Electrical", count: 3421 },
    { type: "Cooking", count: 5782 },
    { type: "Smoking", count: 1650 },
    { type: "Candles", count: 820 },
  ];

  useEffect(() => {
    if (!pieChartRef.current) return;

    const total = pieChartData.reduce((sum, item) => sum + item.count, 0);
    const numFormatter = new Intl.NumberFormat("en-GB");

    const options = {
      container: pieChartRef.current,
      data: pieChartData,
      title: {
        text: "Fire Causes (India)",
      },
      series: [
        {
          type: "donut",
          calloutLabelKey: "type",
          angleKey: "count",
          sectorLabelKey: "count",
          calloutLabel: {
            enabled: true,
            offset: 10,
            minAngle: 20,
          },
          sectorLabel: {
            enabled: true,
            formatter: ({ datum, sectorLabelKey }) => {
              const value = datum[sectorLabelKey];
              return numFormatter.format(value);
            },
            positionOffset: 0.5,
            positionRatio: 0.7,
          },
          title: {
            text: "Incident Count",
          },
          innerLabels: [
            {
              text: numFormatter.format(total),
              fontSize: 24,
            },
            {
              text: "Total",
              fontSize: 16,
              spacing: 10,
            },
          ],
          sectorSpacing: 3,
        },
      ],
    };

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = AgCharts.create(options);
  }, []);

  return (
    <>
      <div className="card-page-sidebar bg-white rounded-lg p-3 w-[750px] space-y-4">
        <div className="header-weather flex justify-center items-center w-auto">
          <h3 className="header-title p-2">Charts And Stats</h3>
        </div>
        <div className="flex justify-center">
          <ChartCard />
          <div className="w-[500px]" ref={pieChartRef} />
        </div>
        <button
          className="button-global mt-2"
          onClick={() => navigate("/dashboard")}
        >
          Back
        </button>
      </div>
    </>
  );
}

export default ChartPage;
