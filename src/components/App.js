
import React, { useState } from 'react';
import './../styles/App.css';

const App = () => {
  let [name, setName] = useState("");

 
  return (
    <div>
        <label htmlFor="name">Enter your name:</label>
        <input type="text" id="name" onChange={(e)=>setName("Hello " + e.target.value + "!")}/>
        <p>{name}</p>
    </div>
  )
}

export default App
