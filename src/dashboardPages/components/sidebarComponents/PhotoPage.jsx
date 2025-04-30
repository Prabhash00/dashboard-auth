import React from "react";
import ImageCarousel from "../../components/ImageCarousel.jsx";
import { useNavigate } from "react-router-dom";

function PhotoPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6 bg-white rounded-lg p-4">
        <ImageCarousel className="w-full"/>
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
