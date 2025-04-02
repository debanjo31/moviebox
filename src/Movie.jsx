import React from "react";

export function Movie(props) {
  return (
    <div className="border border-red-500 hover:border-red-900 rounded-lg p-4">
      <img
        src={props.image}
        alt="image source"
        className="h-64 w-full hover:scale-x-105 hover:scale-y-105 transition duration-300 ease-in-out rounded-lg"
      />
      <h1 className="text-xl font-bold mb-2 mt-4">{props.title}</h1>
      <p className="text-sm">{props.description}</p>
      <button className="bg-red-500 text-white mt-4 w-full p-2 text-lg rounded-lg cursor-pointer hover:bg-red-900 transition duration-300 ease-in-out">
        Click to watch
      </button>
    </div>
  );
}
