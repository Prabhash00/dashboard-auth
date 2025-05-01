import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../ProfileCard";

function ProfilePage() {
  const navigate = useNavigate();
  const [age, setAge] = useState(null);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      calculatedAge--;
    }
    return calculatedAge;
  };

  const handleAge = (e) => {
const dob=e.target.value;
if (dob) {
  const calculatedAge=calculateAge(dob)
  setAge(calculatedAge)
} else {
  setAge(null)
}

  };



  return (
    <div className="bg-white p-4 rounded-lg w-[400px]">
      <div className="header-weather flex justify-center items-center w-auto">
        <h3 className="header-title p-2">Profile & Account Summary</h3>
      </div>
      <ProfileCard />
      <div className="flex items-center gap-2 mt-2">
        <label
          className="font-semibold text-[17px] flex ml-[40px] whitespace-nowrap"
          htmlFor="dob"
        >
          Date of Birth:
        </label>
        <input
          id="dob"
          type="date"
          max="2000-12-31"
          className="border border-gray-300 rounded px-2 py-1 text-sm"
          onChange={handleAge}
        />
      </div>
        <div className="mt-2 ">
         
          <p>
            <strong>Age is: </strong>
            {age !== null ? `${age} years old` : "Not Set"}
          </p>
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
