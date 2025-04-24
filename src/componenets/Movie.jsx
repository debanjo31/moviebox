import React from "react";
import { Link } from "react-router-dom";

export function Movie(props) {
  //Tenary Operator
  // Truncate description to 150 characters
  const truncatedDescription =
    props.description?.length > 150
      ? props.description.substring(0, 150) + "..."
      : props.description;

  //if lenght of descpription is greater than 150, then we truncate it to 150 characters and add ... at the end

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={props.image}
          alt={props.title}
          className="h-80 w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className="bg-yellow-500 text-white px-2 py-1 rounded-lg text-sm font-bold inline-flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {props.rating?.toFixed(1)}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-3 text-gray-800">{props.title}</h1>
        <p className="text-gray-600 text-sm mb-4">{truncatedDescription}</p>
        <Link
          to={`/movies/${props.id}`}
          className="block text-center bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

//VIRTUAL DOM - USESTATE  REACT TO UPDATE THE DOM

//use state that update content in our virtual dom

// Catgeories of sites

// 1. Static site - Landing Pages, Portfolios
//2. Dynamic site - Blogs, News, E-commerce

//SPA - Single Page Application - React, Vue, Angular, Svelte, Ember
