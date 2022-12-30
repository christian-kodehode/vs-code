import { useState } from "react";

// COMPONENTS
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Button from "./components/Button";
import Velkommen from "./components/Velkommen";
import NewComponent from "./components/NewComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar>
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

      <Title>
        <h1 className="h1Title">React Styling & Design</h1>
      </Title>

      <Button onClick={(event) => handleClick(event)}>Trykk meg!</Button>

      <Velkommen navn="Therese" />
      <Velkommen navn="Christian" />

      <NewComponent>
        <p className="newP">Underelement 1</p>
        <p className="newP">Underelement 2</p>
        <p className="newP">Underelement 3</p>
      </NewComponent>
    </div>
  );
}

export default App;
