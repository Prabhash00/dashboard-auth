import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";

function Dashboard() {
  const [mode, setMode] = useState("light");

  const handleLogOut = () => {
    sessionStorage.removeItem("currentUser");
    window.location.href = "/login";
  };

  const changeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`grid-container ${
        mode === "light" ? "light-mode" : "dark-mode"
      }`}
    >
      <Header handleLogOut={handleLogOut} mode={mode} changeMode={changeMode} />
      <Sidebar handleLogOut={handleLogOut} />
      <main className="main-container bg-transparent pr-[17px]">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
