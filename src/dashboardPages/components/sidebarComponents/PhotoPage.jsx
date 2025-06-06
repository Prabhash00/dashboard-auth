import React from "react";
import ImageCarousel from "../../components/ImageCarousel.jsx";
import { useNavigate } from "react-router-dom";

function PhotoPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center justify-start  ">
      <div className="w-full max-w-lg space-y-6 bg-white rounded-lg p-2  mt-[5vh]">
        <div className="header-weather flex justify-center items-center w-auto">
          <h3 className="header-title p-2">Album & Photo Carousel</h3>
        </div>
        <ImageCarousel className="w-full" />
        <button
          className="button-global"
          onClick={() => navigate("/dashboard")}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default PhotoPage;
