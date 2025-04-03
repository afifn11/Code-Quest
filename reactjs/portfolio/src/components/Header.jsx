// src/components/Header.jsx
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <button className="p-2 bg-gray-700 rounded-full"> <FaMoon /> </button>
    </header>
  );
};

export default Header;