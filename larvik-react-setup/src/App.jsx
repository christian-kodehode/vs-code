import { useState } from "react";

// CSS
import "./App.css";

// COMPONENTS
import NewComponent from "./components/NewComponent";
import Velkommen from "./components/Velkommen";
import Card from "./components/Card";

// DATA
import { cardInfo } from "./data/data";

let counter = 0;

function handleClick(event) {
  counter++;
  console.log(`Takk! #${counter}`);
}

/**
 * Main component
 */
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={(event) => handleClick(event)}>Trykk meg!</button>

      <h1 className="newh1">Test page</h1>

      <Velkommen navn="Therese" />
      <Velkommen navn="Christian" />

      <NewComponent>
        <p className="newP">Underelement 1</p>
        <p className="newP">Underelement 2</p>
        <p className="newP">Underelement 3</p>
      </NewComponent>

      {cardInfo.map((element, index) => {
        return <Card key={index} tittel={element.tittel} tekst={element.tekst} />;
      })}
    </div>
  );
}

export default App;
