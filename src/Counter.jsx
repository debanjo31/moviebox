import React, { useState, useEffect, useRef } from "react";

export default function Counter() {
  const [count, setCount] = useState(83);

  function increaseCount() {
    //496, 503
    if (count < 500) {
      setCount(count + 7);
      console.log(count);
    } else {
      alert("Where did you see the money?, You have reached the limit of 500");
    }
  }

  function decreaseCount() {
    //2,1
    if (count > 3) {
      setCount(count - 4);
      console.log(count);
    }
  }

  function resetCount() {
    setCount(83);
  }

  return (
    <div
      className={
        count > 150
          ? "bg-lime-900 p-8 shadow-lg flex flex-col items-center justify-center"
          : "bg-yellow-900 p-8 shadow-lg flex flex-col items-center justify-center"
      }
    >
      <h1 className="text-3xl font-bold mb-4 text-white">Counter</h1>
      <p className="text-5xl text-white mb-4 my-8">{count}</p>
      <div className="flex gap-4 mt-8">
        <button
          onClick={increaseCount}
          className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg mb-2 hover:bg-blue-600 transition duration-300"
        >
          Increment
        </button>
        <button
          onClick={resetCount}
          className="bg-yellow-500 cursor-pointer text-white px-4 py-2 rounded-lg mb-2 hover:bg-yellow-600 transition duration-300"
        >
          Reset
        </button>
        <button
          onClick={decreaseCount}
          className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-lg mb-2 hover:bg-red-600 transition duration-300"
        >
          Decrease
        </button>
      </div>
    </div>
  );
}
