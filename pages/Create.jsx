import { useEffect, useState } from "react";
import { supabase } from "../src/client";

const Create = () => {
    const [color, setColor] = useState("")
    const [name, setName] = useState("")
    const [speed, setSpeed] = useState()
    const [description, setDescription] = useState("")

  const createPost = async () => {
    await supabase
      .from("CrewMates")
      .insert({
        name: name,
        speed: speed,
        color: color,
        description: description,
      })
      .select();
      window.location = "/";
  };

  function handleClick() {
    createPost()}

  return (
    <div>
      Create new Crewmates
      <br />
        <label>Name:</label>
        <input type="text" id="name" name="name" onChange= {(e) =>
        setName(e.target.value)} />

        <label>Speed (mph):</label>
        <input type="number" id="speed" name="speed" onChange= {(e) =>
        setSpeed(e.target.value)}/>

        <label>Description:</label>
        <textarea id="description" name="description" onChange= {(e) =>
        setDescription(e.target.value)}></textarea>

        <label>Color:</label>
        <select id="color" name="color" onChange= {(e) =>
        setColor(e.target.value)}>
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

        <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Create;
