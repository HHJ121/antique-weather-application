import React from "react";

import './App.css';
import Weather from "./Weather";
import Typewriter from "typewriter-effect";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-background">
      <header className="App-header">
        <Typewriter 
        options={{
          strings: ["Hello.", "Welcome to my weather app.", "Where would you like to look up the weather?"],
          autoStart: true,
          loop: true,
          pauseFor: 1800,
        }} 
        />
        <Weather />
      </header>
      </div>
      <footer className="links">
        <a href="https://github.com/HHJ121/antique-weather-application" target="_blank" rel="noreferrer">
          Open-source code
        </a> {" "}
        by {" "} 
        <a href="https://guidedbythe1.com/" target="_blank" rel="noreferrer">
          Haw-Harn Jiang
        </a> 
        , hosted on {" "}
        <a href="https://determined-mclean-fc8f2b.netlify.app/" target="_blank" rel="noreferrer">
          Netlify
        </a>
      </footer>
      </div>
    </div>
  );
}


