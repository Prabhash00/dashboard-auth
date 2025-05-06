import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MdPerson,
  MdQueryStats,
  MdSettings,
  MdOutlineDashboard,
} from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { TiWeatherPartlySunny } from "react-icons/ti";

function Sidebar({ handleLogOut }) {
  const navigate = useNavigate();

  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <button
            className="bg-[#4281f5] p-1 cursor-pointer transition-all duration-350 text-[#ffffff]
           hover:transform hover:scale-110 hover:shadow-lg hover:bg-[#f7aad4] rounded"
            onClick={handleLogOut}
          >
            LogOut
          </button>
        </div>
        <span className="icon close_icon">X</span>
      </div>
      <ul className="sidebar-list">
        <li
          className="sidebar-list-item"
          onClick={() => navigate("/dashboard")}
        >
          <MdOutlineDashboard className="icons" />
          Dashboard
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => navigate("/dashboard/profile")}
        >
          <MdPerson className="icons" />
          Profile
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => navigate("/dashboard/chart")}
        >
          <MdQueryStats className="icons" />
          Stats
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => navigate("/dashboard/pic")}
        >
          <IoMdPhotos className="icons" />
          Photo Gallery
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => navigate("/dashboard/weather")}
        >
          <TiWeatherPartlySunny className="icons" />
          Weather
        </li>
        <li
          className="sidebar-list-item"
          onClick={() => navigate("/dashboard/settings")}
        >
          <MdSettings className="icons" />
          Settings
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
