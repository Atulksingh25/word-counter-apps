   import React from 'react';
   
import FormValidation from "./FormValidation.js"
import './App.css'; // Assuming you have an App.css file for styling
  // Adjust the path as necessary
function App() {
  const name = "React User"; // Example variable

  return (
    <div className="App">
      <FormValidation />
    </div>  
  );
} 

export default App;