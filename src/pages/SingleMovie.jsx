import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchMovieDetails() {
    try {
      let headersList = {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGI2MTc2NTdiZmY4NDgzNTQzMmRmOWM0YTM4YjRmYSIsIm5iZiI6MTc0NDI4NjM0Ni42MzkwMDAyLCJzdWIiOiI2N2Y3YjI4YWRlNWU0ZGVjNjJhZDJkYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QGEpV56tjTgJgEGiUyl_n7Ckmklf_hFymdBdQTueSfg",
      };

      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        method: "GET",
        headers: headersList,
      });
      const data = await response.json();
      setMovie(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
            <h1 className="text-4xl font-bold text-white">{movie.title}</h1>
            <p className="text-gray-300 italic mt-2">{movie.tagline}</p>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-wrap gap-4 mb-6">
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-600">{movie.overview}</p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Release Date</h3>
                  <p className="text-gray-600">{movie.release_date}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Runtime</h3>
                  <p className="text-gray-600">{movie.runtime} minutes</p>
                </div>
                <div>
                  <h3 className="font-semibold">Rating</h3>
                  <p className="text-gray-600">
                    {movie.vote_average.toFixed(1)} / 10
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Status</h3>
                  <p className="text-gray-600">{movie.status}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Production Details
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Production Companies</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {movie.production_companies.map((company) => (
                      <li key={company.id}>{company.name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Production Countries</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {movie.production_countries.map((country) => (
                      <li key={country.iso_3166_1}>{country.name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Languages</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {movie.spoken_languages.map((language) => (
                      <li key={language.iso_639_1}>{language.english_name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
