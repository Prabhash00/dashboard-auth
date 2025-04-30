import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../ProfileCard";

function ProfilePage() {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-4 rounded-lg w-[400px]">
      <div className="header-weather flex justify-center items-center w-auto">
        <h3 className="header-title p-2">Profile & Account Summary</h3>
      </div>
      <ProfileCard />
      <div className="flex items-center gap-2 mt-2">
        <label
          className="font-semibold text-lg flex ml-[40px] whitespace-nowrap"
          htmlFor="dob"
        >
          Date of Birth:
        </label>
        <input
          id="dob"
          type="date"
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        />
      </div>

      <button
        className="button-global mt-4"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Back
      </button>
    </div>
  );
}

export default ProfilePage;
