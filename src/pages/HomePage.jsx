import React, { useEffect, useState, useRef } from "react";
import { Movie } from "../componenets/Movie";
import { HBar } from "../Layout/NavBar";

//SINGLE PAGE APPLICATION
export default function HomePage() {
  const [allMovies, setAllMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const sectionRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popularity");

  async function fetchMovie() {
    setLoading(true);
    try {
      let headersList = {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGI2MTc2NTdiZmY4NDgzNTQzMmRmOWM0YTM4YjRmYSIsIm5iZiI6MTc0NDI4NjM0Ni42MzkwMDAyLCJzdWIiOiI2N2Y3YjI4YWRlNWU0ZGVjNjJhZDJkYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QGEpV56tjTgJgEGiUyl_n7Ckmklf_hFymdBdQTueSfg",
      };

      let response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?page=${pageNumber}`,
        {
          method: "GET",
          headers: headersList,
        }
      );

      let data = await response.json();
      setLoading(false);
      setAllMovies(data.results);
      setTotalPages(data.total_pages);
      console.log(data);
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page < totalPages) {
      setPageNumber(page);
      window.scrollTo(0, 0);
      fetchMovie();
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log(e.target.value);
    SearchMovie(e.target.value);
    // You can implement search logic here
  };

  async function SearchMovie(value) {
    setLoading(true);
    try {
      let headersList = {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGI2MTc2NTdiZmY4NDgzNTQzMmRmOWM0YTM4YjRmYSIsIm5iZiI6MTc0NDI4NjM0Ni42MzkwMDAyLCJzdWIiOiI2N2Y3YjI4YWRlNWU0ZGVjNjJhZDJkYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QGEpV56tjTgJgEGiUyl_n7Ckmklf_hFymdBdQTueSfg",
      };

      let response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${value}&page=${pageNumber}`,
        {
          method: "GET",
          headers: headersList,
        }
      );

      let data = await response.json();
      setLoading(false);
      setAllMovies(data.results);
      setTotalPages(data.total_pages);
      console.log(data);
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  const handleSort = (e) => {
    setSortBy(e.target.value);
    // You can implement sort logic here
  };

  useEffect(() => {
    fetchMovie();
  }, []);


  return (
    <div className="mb-4">
      <div className="bg-gray-100 p-6 sticky top-0 z-10 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Search movies..."
            />
            <svg
              className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex items-center gap-4">
            <label className="text-gray-700 font-medium">Sort by:</label>
            <select
              value={sortBy}
              onChange={handleSort}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 bg-white cursor-pointer"
            >
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center ">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-300 text-lg font-semibold">
              Loading movies...
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-8"
            ref={sectionRef}
          >
            {allMovies.map((movie) => (
              <Movie
                key={movie.id}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.original_title}
                description={movie.overview}
                rating={movie.vote_average}
                id={movie.id}
              />
            ))}
          </div>
          <div className="movies-pages flex justify-center items-center gap-4 mt-8 mb-8">
            <button
              onClick={() => handlePageChange(1)}
              disabled={pageNumber === 1}
              className={`px-4 py-2 rounded-md transition duration-300 ease-in-out ${
                pageNumber === 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              First
            </button>
            <button
              onClick={() => handlePageChange(pageNumber - 1)}
              disabled={pageNumber === 1}
              className={`px-4 py-2 rounded-md transition duration-300 ease-in-out ${
                pageNumber === 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Previous
            </button>
            <span className="text-lg font-semibold">
              Page {pageNumber.toLocaleString()} of{" "}
              {totalPages.toLocaleString()}
            </span>
            <button
              onClick={() => handlePageChange(pageNumber + 1)}
              disabled={pageNumber === totalPages}
              className={`px-4 py-2 rounded-md transition duration-300 ease-in-out ${
                pageNumber === totalPages
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Next
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={pageNumber === totalPages}
              className={`px-4 py-2 rounded-md transition duration-300 ease-in-out ${
                pageNumber === totalPages
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Last
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
