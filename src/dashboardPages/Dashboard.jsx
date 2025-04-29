import React, { useState } from "react";
import Header from "./Header";
import MainFile from "./MainFile";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("light"); 

  const handleLogOut = () => {
    sessionStorage.removeItem("currentUser");
    navigate("/login");
  };

  const changeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <>
      <div
        className={`grid-container ${
          mode === "light" ? "light-mode" : "dark-mode"
        }`}
      >
        <Header
          handleLogOut={handleLogOut}
          mode={mode}
          changeMode={changeMode}
        />
        <Sidebar handleLogOut={handleLogOut} />
        <MainFile />
      </div>
    </>
  );
}

export default Dashboard;
