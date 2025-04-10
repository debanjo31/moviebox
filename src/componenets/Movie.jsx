import React from "react";

export function Movie(props) {
  return (
    <div className="border border-red-500 hover:border-red-900 rounded-lg p-4">
      <img
        src={props.image}
        alt="image source"
        className="h-64 w-full hover:scale-x-105 hover:scale-y-105 transition duration-300 ease-in-out rounded-lg object-cover object-top"
      />
      <h1 className="text-xl font-bold mb-2 mt-4">{props.title}</h1>
      <p className="text-sm">{props.description}</p>
      <p className="text-sm my-2 font-bold">Ratings: {props.rating}</p>
      <button className="bg-red-500 text-white mt-4 w-full p-2 text-lg rounded-lg cursor-pointer hover:bg-red-900 transition duration-300 ease-in-out">
        Click to watch
      </button>
    </div>
  );
}

//VIRTUAL DOM - USESTATE  REACT TO UPDATE THE DOM

//use state that update content in our virtual dom

// Catgeories of sites

// 1. Static site - Landing Pages, Portfolios
//2. Dynamic site - Blogs, News, E-commerce
