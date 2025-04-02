import React from "react";
import logo from "./assets/logo.png";

export function HBar() {
  return (
    <div className="bg-red-700 text-white flex justify-between py-4 px-8">
      <div className="flex gap-4 items-center">
        <img src={logo} alt="movie box logo" className="h-10 w-10" />
        <h1 className="text-2xl font-bold">Movie Box Office</h1>
      </div>
      <ul className="flex space-x-4 text-lg items-center">
        <li className="cursor-pointer hover:text-gray-300">Home</li>
        <li className="cursor-pointer hover:text-gray-300">Movies</li>
        <li className="cursor-pointer hover:text-gray-300">TV Shows</li>
        <li className="cursor-pointer hover:text-gray-300">People</li>
      </ul>
    </div>
  );
}
