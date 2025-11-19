   import React from 'react';
   
import TempConverter from "./TempConverter.js"
import './App.css'; // Assuming you have an App.css file for styling
  // Adjust the path as necessary
function App() {
  const name = "React User"; // Example variable

  return (
    <div className="App">
      <TempConverter />
    </div>  
  );
} 

export default App;