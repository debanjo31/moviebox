import React, { useEffect, useRef } from "react";

export default function RequestForm() {
  const inputRef = useRef();

  //   useEffect(() => {
  //     inputRef.current.focus();
  //   }, []);
  return (
    <div className="w-5/6 max-w-5xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      
      <form>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-700">
              Name
            </label>
            <input
              ref={inputRef}
              type="text"
              id="name"
              className="border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="movie" className="text-gray-700">
              Movie Title
            </label>
            <input
              type="text"
              id="movie"
              className="border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="border border-gray-300 p-2 rounded"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
}
