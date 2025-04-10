import React, { useEffect } from "react";
import image1 from "../assets/movie.png";
import { Movie } from "../componenets/Movie";

// useEffect is react that handles side effects in functional components
// sideffect like fetching data from a database, check if windows size, etc
export default function HomePage() {
  useEffect(() => {
    //user can only wathc movie on laptop size - 1000px
    function useLaptop() {
      // check if the window size is less than 1000px
      if (window.innerWidth < 1000) {
        alert("Pls download the app to watch the movie");
      }
    }

    useLaptop();
  }, []);

  //useeffect has two paramaters,
  // the first is a function that runs when the component mounts,
  // and the second is an array of dependencies that tells react when to run the function again.
  // If you pass an empty array, it will only run once when the component mounts.

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-8">
      <Movie
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
      />
    </div>
  );
}
