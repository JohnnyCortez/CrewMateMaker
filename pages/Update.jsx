import { supabase } from "../src/client";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const UpdateCrewmate = () => {
  const location = useLocation();
  const { crewmate } = location.state;
  const [color, setColor] = useState(crewmate.color);
  const [name, setName] = useState(crewmate.name);
  const [speed, setSpeed] = useState(crewmate.speed);
  const [description, setDescription] = useState(crewmate.description);

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

  const deletePost = async () => {
    await supabase.from("CrewMates").delete().eq("id", crewmate.id);
    window.location = "/gallery";
  };

  function handleClick() {
    updatePost();
  }

  function handleDelete() {
    deletePost();
  }

  return (
    <div>
      <div>
        <h4> Edit {crewmate.name}</h4>
        <br />
        <label>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Speed (mph):</label>
        <input
          type="number"
          id="speed"
          name="speed"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label>Color:</label>
        <select
          id="color"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
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
        <br />
        <button onClick={handleClick}>Sumbit edits</button>
        <button onClick={handleDelete}>Eject</button>
        <img
          src="https://play-lh.googleusercontent.com/BJ2tOUFJXIwb3T-6e-yBQPNnFbU1dHwxhdmN6b8gh5h09yn7uQwBEhmiZc2azftOtjPs"
          height="50"
          width="50"
        />
      </div>
    </div>
  );
};

export default UpdateCrewmate;
