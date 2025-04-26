import React from 'react'
import Header from './Header';
import MainFile from './MainFile';
import Sidebar from './Sidebar';
import  "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="grid-container ">
        <Header />
        <Sidebar />
        <MainFile />
      </div>
    </>
  );
}

export default Dashboard