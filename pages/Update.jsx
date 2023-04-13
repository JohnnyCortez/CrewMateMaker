import { supabase } from "../src/client";
import { useLocation } from "react-router-dom";
import { useState } from "react";


const UpdateCrewmate = () => {
    const location = useLocation();
    const {crewmate} = location.state;
    const [color, setColor] = useState(crewmate.color)
    const [name, setName] = useState(crewmate.name)
    const [speed, setSpeed] = useState(crewmate.speed)
    const [description, setDescription] = useState(crewmate.description)




  const updatePost = async () => {

    await supabase
      .from("CrewMates")
      .update({
        name: name,
        speed: speed,
        color: color,
        description: description,
      })
      .eq("id", crewmate.id);

    window.location = "/gallery";
  };

  function handleClick() {
    updatePost()}


  return (
    <div>
      <div>
        Edit {crewmate.name}
        <br />
          <label>Name:</label>
          <input type="text" id="name" name="name" value={name} onChange= {(e) =>
        setName(e.target.value)} />

          <label>Speed (mph):</label>
          <input type="number" id="speed" name="speed" value = {speed} onChange= {(e) =>
        setSpeed(e.target.value)}/>

          <label>Description:</label>
          <textarea id="description" name="description" value = {description} onChange= {(e) =>
        setDescription(e.target.value)}></textarea>

          <label>Color:</label>
          <select id="color" name="color" value={color} onChange= {(e) =>
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
          <button onClick={handleClick}>Edit</button>
      </div>
    </div>
  );
};

export default UpdateCrewmate;
