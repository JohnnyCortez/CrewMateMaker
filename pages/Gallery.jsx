import { useEffect, useState } from "react";
import { supabase } from "../src/client";
import { Link } from "react-router-dom";

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


  return (<div>
    <br />
    <button onClick={handleClick}>Reveal your Crewmates</button>
    <div>
        {crewMates.length > 0 ? (crewMates.map((crewmate) => {
        return (<div>
           <h2>{crewmate.name}</h2>
           <h4>{`color: ${crewmate.color}`}</h4>
           <h4>{`speed: ${crewmate.speed} mph`}</h4>
           <h4>{`description: ${crewmate.description}`}</h4>
           <Link to="/update" state={{crewmate}}>           
            <p>update crewmate</p> 
           </Link>
        </div>
        )
    })) : ""}
    </div>
    
  </div>);
};

export default Gallery;
