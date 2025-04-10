import React from "react";

export default function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white flex flex-col items-center  space-y-4 p-4 shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
      <a className="cursor-pointer hover:text-gray-300">Home</a>
      <a className="cursor-pointer hover:text-gray-300">Movies</a>
      <a className="cursor-pointer hover:text-gray-300">TV Shows</a>
      <a className="cursor-pointer hover:text-gray-300">People</a>
    </div>
  );
}
