import React, { useEffect, useState } from "react";
import image1 from "../assets/movie.png";
import { Movie } from "../componenets/Movie";

export default function HomePage() {
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchMovie() {
    setLoading(true);
    try {
      let headersList = {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGI2MTc2NTdiZmY4NDgzNTQzMmRmOWM0YTM4YjRmYSIsIm5iZiI6MTc0NDI4NjM0Ni42MzkwMDAyLCJzdWIiOiI2N2Y3YjI4YWRlNWU0ZGVjNjJhZDJkYzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QGEpV56tjTgJgEGiUyl_n7Ckmklf_hFymdBdQTueSfg",
      };

      let response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?page=2",
        {
          method: "GET",
          headers: headersList,
        }
      );

      let data = await response.json();
      setLoading(false);
      setAllMovies(data.results);
      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  if (loading) {
    return (
      <>
        <p className="h-screen">Loading..</p>
      </>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-8">
      {allMovies.map((movie) => (
        <Movie
          key={movie.id}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.original_title}
          description={movie.overview}
          rating={movie.vote_average}
        />
      ))}

      {/* <Movie
        image={image1}
        title="Fast and Furious"
        description="Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs."
      />
      <Movie
        image="https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWVzfGVufDB8fDB8fHww"
        title="Adolescence"
        description="All About Britt LowerYou probably know Britt Lower from Severance,Future Man or Man Seeking Woman. So, IMDb presents this peek behind the scenes of her career."
      />
      <Movie
        image="https://images.unsplash.com/photo-1615986201152-7686a4867f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D"
        title="Black Mirror"
        description="Season 7 - Episode Revealed Featuring stand-alone dramas -- sharp, suspenseful, satirical tales that explore techno-paranoia -- Black Mirror is a contemporary reworking of The Twilight Zone with stories that tap into the collective unease about the modern world."
      />
      <Movie
        image="https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWVzfGVufDB8fDB8fHww"
        title="Fast and Furious"
        description="Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs."
      />
      <Movie
        image="https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWVzfGVufDB8fDB8fHww"
        title="Adolescence"
        description="All About Britt LowerYou probably know Britt Lower from Severance,Future Man or Man Seeking Woman. So, IMDb presents this peek behind the scenes of her career."
      />
      <Movie
        image="https://images.unsplash.com/photo-1615986201152-7686a4867f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D"
        title="Black Mirror"
        description="Season 7 - Episode Revealed Featuring stand-alone dramas -- sharp, suspenseful, satirical tales that explore techno-paranoia -- Black Mirror is a contemporary reworking of The Twilight Zone with stories that tap into the collective unease about the modern world."
      />
      <Movie
        image="https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWVzfGVufDB8fDB8fHww"
        title="Fast and Furious"
        description="Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs."
      />
      <Movie
        image="https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWVzfGVufDB8fDB8fHww"
        title="Adolescence"
        description="All About Britt LowerYou probably know Britt Lower from Severance,Future Man or Man Seeking Woman. So, IMDb presents this peek behind the scenes of her career."
      />
      <Movie
        image="https://images.unsplash.com/photo-1615986201152-7686a4867f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D"
        title="Black Mirror"
        description="Season 7 - Episode Revealed Featuring stand-alone dramas -- sharp, suspenseful, satirical tales that explore techno-paranoia -- Black Mirror is a contemporary reworking of The Twilight Zone with stories that tap into the collective unease about the modern world."
      /> */}
    </div>
  );
}

//API - Application Programming Interface

// FRONTEND - API - SERVER - DATABASE

//TO FETCH INFORMATION FROM THE SERVER
//WE USE Fetch, Axios etc.
