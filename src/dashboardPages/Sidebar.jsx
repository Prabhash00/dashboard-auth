import React from "react";
import {
  MdOutlineDashboard,
  MdPerson,
  MdQueryStats,
  MdSettings,
} from "react-icons/md";
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
        <li className="sidebar-list-item">
          <MdOutlineDashboard className="icons" onClick={() => {}} />
          Dashboard
        </li>
        <li className="sidebar-list-item">
          <MdPerson
            className="icons"
            onClick={() => {
              navigate("/");
            }}
          />
          Profile
        </li>
        <li className="sidebar-list-item">
          <MdQueryStats
            className="icons"
            onClick={() => {
              navigate("/");
            }}
          />
          Stats
        </li>
        <li className="sidebar-list-item">
          <MdSettings
            className="icons"
            onClick={() => {
              navigate("/");
            }}
          />
          Photo Gallery
        </li>
        <li className="sidebar-list-item">
          <MdSettings
            className="icons"
            onClick={() => {
              navigate("/");
            }}
          />
          Weather
        </li>
        <li className="sidebar-list-item">
          <MdSettings
            className="icons"
            onClick={() => {
              navigate("/");
            }}
          />
          Settings
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
