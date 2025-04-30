import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";

export function HBar() {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className="bg-red-700 text-white flex justify-between py-4 px-8">
      <div className="flex gap-4 items-center">
        <img src={logo} alt="movie box logo" className="h-10 w-10" />
        <h1 className="text-2xl font-bold">Movie Box Office</h1>
      </div>
      <ul className="hidden sm:flex space-x-4 text-lg items-center">
        <NavLink to="/" className="cursor-pointer hover:text-gray-300">
          Home
        </NavLink>
        <NavLink to="/request" className="cursor-pointer hover:text-gray-300">
          Request
        </NavLink>
        <NavLink to="/counter" className="cursor-pointer hover:text-gray-300">
          Counter
        </NavLink>
        <NavLink
          to="/login"
          className="cursor-pointer hover:text-gray-300 bg-blue-500 px-4 py-1 rounded-lg"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="cursor-pointer hover:text-gray-300 bg-white text-blue-500 px-4 py-1 rounded-lg"
        >
          Signup
        </NavLink>
      </ul>
      <div className="sm:hidden flex items-center text-2xl cursor-pointer">
        <FaBars onClick={() => setOpenSideBar(!openSideBar)} />
      </div>
      {openSideBar && <SideBar />}
    </div>
  );
}
