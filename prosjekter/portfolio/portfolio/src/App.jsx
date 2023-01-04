import { useState } from "react";

// COMPONENTS
import Navbar from "./components/Navbar.jsx";

// CSS
import "./styles/global.css";
import "./styles/palette.css";
import "./styles/typography.css";
import "./styles/sizes.css";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar">
        <a className="navitems" href="#">
          About
        </a>
        <a className="navitems" href="#">
          Projects
        </a>
        <a className="navitems" href="#">
          Contact
        </a>
      </Navbar>
      <h1>Hei</h1>
      <h2>Portfolio</h2>
    </div>
  );
}

export default App;
