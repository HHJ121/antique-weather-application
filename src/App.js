import React from "react";

import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-background">
      <main className="App-main">
        
        <Weather />
      </main>
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


