import { useEffect, useState } from "react";
import { supabase } from "../src/client";

const Gallery = () => {
    const [crewMates, setCrewMates] = useState([]);

    const fetchPost = async () => {
    const { data } = await supabase
      .from("CrewMates")
      .select()
      .order("created_at", { ascending: true });

    // set state of posts
    setCrewMates(data);    
    };

    function handleClick() {
        fetchPost()
    }


  return (<div>gallery
    <br />
    <button onClick={handleClick}>Reveal your Crewmates</button>
    <div>
        {crewMates.length > 0 ? (crewMates.map((e) => {
        return (<div>
           <h7>{e.name}</h7>
           <p>update crewmate</p> 
        </div>
        )
    })) : ""}
    </div>
    
  </div>);
};

export default Gallery;
