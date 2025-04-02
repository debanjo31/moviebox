import React from "react";
import { Footer } from "./Footer";
import { Movie } from "./Movie";
import { HBar } from "./NavBar";
import image1 from "./assets/movie.png";

export default function App() {
  // We create moviechild, we styled it in the movie component, we are now going to pass data into it everytime we call it
  return (
    <div>
      <HBar />
      <div className="grid grid-cols-3 p-8 gap-8">
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
      <Footer />
    </div>
  );
}
