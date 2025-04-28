import React from "react";
import {
  MdOutlineDashboard,
  MdPerson,
  MdQueryStats,
  MdSettings,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    sessionStorage.removeItem("currentUser");
    navigate("/login");
  };

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
          <a href="#">
            <MdOutlineDashboard className="icons" />
            Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <MdPerson className="icons" />
            Profile
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <MdQueryStats className="icons" />
            Stats
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <MdSettings className="icons" />
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
