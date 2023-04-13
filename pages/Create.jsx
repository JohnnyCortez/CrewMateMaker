import { useEffect, useState } from "react";
import { supabase } from "../src/client";

const Create = () => {
  const [crewMate, setCrewMate] = useState({name:"", speed:0, description:"", color:""});

  const createPost = async (event) => {
    event.preventDefault();
    await supabase
      .from("CrewMates")
      .insert({
        name: crewMate.name,
        speed: crewMate.speed,
        color: crewMate.color,
        description: crewMate.description,
      })
      .select();
    //   window.location = "/";
  };


 const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  setCrewMate({name: formData.get("name"), speed: formData.get("speed"), description: formData.get("description"), color: formData.get("color")})
  console.log(crewMate.name)
  createPost(event)
};

  return (
    <div>
      Create new Crewmates
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" id="name" name="name" required />

        <label>Speed (mph):</label>
        <input type="number" id="speed" name="speed" required />

        <label>Description:</label>
        <textarea id="description" name="description" required></textarea>

        <label>Color:</label>
        <select id="color" name="color" required>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Purple">Purple</option>
          <option value="Yellow">Yellow</option>
          <option value="Pink">Pink</option>
          <option value="Orange">Orange</option>
          <option value="Rainbow">Rainbow</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Gray">Gray</option>
          <option value="Brown">Brown</option>
          <option value="Teal">Teal</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
