import React, { useState, useEffect } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function Header({ handleLogOut, mode, changeMode }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDocumentClick = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <header className="header">
        <h1 className="text-[25px]">Dashboard App with Authentication</h1>

        <div className={mode === "light" ? "modes" : "modes grayd"}>
          {mode === "light" ? (
            <MdOutlineLightMode onClick={changeMode} />
          ) : (
            <MdOutlineDarkMode onClick={changeMode} />
          )}
        </div>

        <div className="person-right flex justify-end relative">
          <BsPersonCircle
            className="text-2xl cursor-pointer text-white"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div
              className="absolute top-full mt-2 right-0 w-30 bg-white border rounded shadow-lg"
              style={{ minWidth: "max-content" }}
            >
              <button
                onClick={() => {
                  console.log("LogOut clicked");
                  handleLogOut();
                  setIsDropdownOpen(false);
                }}
                className="header-logout block w-full text-left px-2 py-1 hover:bg-gray-100"
              >
                LogOut
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
