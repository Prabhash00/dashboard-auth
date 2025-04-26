import React from "react";
import {
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="text-[25px]">Dashboard App with Authentication</h1>
        <div className="menu-icon">
          <BsJustify className="icons"/>
        </div>
        <div className="search-right flex justify-end">
          <BsSearch className="icons"/>
        </div>
        <div className="person-right flex justify-end">
          <BsPersonCircle className="icons"/>
        </div>
      </header>
    </>
  );
}

export default Header;
