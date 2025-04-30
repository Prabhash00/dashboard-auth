import React from "react";
import { IoMdPhotos } from "react-icons/io";
import {
  MdOutlineDashboard,
  MdPerson,
  MdQueryStats,
  MdSettings,
} from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

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
          onClick={() => {
            navigate("/weather");
          }}
        >
          <MdOutlineDashboard className="icons" />
          Dashboard
        </li>

        <li
          className="sidebar-list-item"
          onClick={() => {
            navigate("/profile");
          }}
        >
          <MdPerson className="icons" />
          Profile
        </li>

        <li
          className="sidebar-list-item"
          onClick={() => {
            navigate("/chart");
          }}
        >
          <MdQueryStats className="icons" />
          Stats
        </li>

        <li
          className="sidebar-list-item"
          onClick={() => {
            navigate("/pic");
          }}
        >
          <IoMdPhotos className="icons" />
          Photo Gallery
        </li>

        <li
          className="sidebar-list-item"
          onClick={() => {
            navigate("/weather");
          }}
        >
          <TiWeatherPartlySunny className="icons" />
          Weather
        </li>

        <li
          className="sidebar-list-item"
          onClick={() => {
            navigate("/weather");
          }}
        >
          <MdSettings className="icons" />
          Settings
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
