// CSS
import "./App.css";

// Components
import UseEffect from "./components/UseEffect";
import FetchData from "./components/FetchData";
import ConsumingContext from "./components/ConsumingContext";

// Contexts
import ExampleContext from "./contexts/ExampleContext";

function App() {
  return (
    <ExampleContext.Provider value="Some other value">
      <div className="App">
        {<UseEffect />}
        {<FetchData />}
        <ConsumingContext />
      </div>
    </ExampleContext.Provider>
  );
}

export default App;
