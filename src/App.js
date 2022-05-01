import React from "react"
import "./App.css";
import "./components/Buttons"
import Api from "./components/Api";
import TextData from "./components/TextData";
import Title from "./components/Title"

function App() {
  return (
    <div className="App">
      <TextData/>
      <Api/>
    </div>
  );
}

export default App;
