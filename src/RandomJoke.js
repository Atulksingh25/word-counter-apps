// RandomJoke.js
import React, { useState, useEffect } from "react";

export default function RandomJoke() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    setJoke(`${data.setup} - ${data.punchline}`);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>😂 Random Joke Generator</h2>
      <p>{joke}</p>
      <button onClick={fetchJoke}>New Joke</button>
    </div>
  );
}
