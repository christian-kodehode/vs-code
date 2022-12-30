import { useState, useEffect } from "react";

function UseEffect() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  console.log("code her will be run on every rerender");

  useEffect(() => {
    console.log("Running code here");

    return () => {
      console.log("Cleanup function");
    };
  }, []);

  return (
    <div className="useEffect">
      <h1>UseEffect Counters</h1>
      <h2>Counter A:</h2>
      <h2>{countA}</h2>
      <button className="counter" onClick={() => setCountA((oldState) => oldState + 1)}>
        Increment by 1
      </button>
      <button className="counter" onClick={() => setCountA((oldState) => oldState - 1)}>
        Decrease by 1
      </button>
      <button className="counter" onClick={() => setCountA((oldState) => oldState * countB)}>
        Multiply by B
      </button>
      <button className="counter" onClick={() => setCountA((oldState) => oldState / countB)}>
        Divide by B
      </button>
      <button className="counter" onClick={() => setCountA((countA) => 0)}>
        Set to 0
      </button>
      <br />
      <br />
      <h2>Counter B:</h2>
      <h2>{countB}</h2>
      <button className="counter" onClick={() => setCountB((oldState) => oldState + 1)}>
        Increment by 1
      </button>
      <button className="counter" onClick={() => setCountB((oldState) => oldState - 1)}>
        Decrease by 1
      </button>
      <button className="counter" onClick={() => setCountB((oldState) => oldState * countA)}>
        Multiply by A
      </button>
      <button className="counter" onClick={() => setCountB((oldState) => oldState / countA)}>
        Divide by A
      </button>
      <button className="counter" onClick={() => setCountB((countA) => 0)}>
        Set to 0
      </button>
    </div>
  );
}

export default UseEffect;
