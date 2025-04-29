import React from "react";
import ChartCard from "../ChartCard";
import { useNavigate } from "react-router-dom";

function ChartPage() {
  const navigate = useNavigate();

  return (
    <div className="card-inner-weather bg-white rounded-lg p-3 w-[750px]">
      <ChartCard />
      <button
        className="button-global"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Back
      </button>
    </div>
  );
}

export default ChartPage;
