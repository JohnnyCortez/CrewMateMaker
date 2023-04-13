import { useEffect, useState } from "react";
import { supabase } from "../src/client";
import { Link } from "react-router-dom";
import '../src/App.css'


const Gallery = () => {
    const [crewMates, setCrewMates] = useState([]);

    useEffect(()=> {
    const fetchPost = async () => {
        const { data } = await supabase
        .from("CrewMates")
        .select()
        .order("created_at", { ascending: true });

        // set state of posts
        setCrewMates(data);    
        }
        fetchPost()
    }, [crewMates]);


  return (<div>
    <div>
        {crewMates.length > 0 ? <div className="gallery">{(crewMates.map((crewmate) => {
        return (<div className="crewmate">
           <h4>{crewmate.name}</h4>
           <p>{`color: ${crewmate.color}`}</p>
           <p>{`description: ${crewmate.description}`}</p>
           <Link to="/info" state={{crewmate}}>           
            <p>Full Profile</p> 
           </Link>
        </div>
        )
    }))}</div> : ""}
    </div>
    
  </div>);
};

export default Gallery;
