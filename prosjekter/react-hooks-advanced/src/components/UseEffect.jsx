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
    <div>
      <h1>UseEffect Component</h1>
      <h2>{countA}</h2>
      <button onClick={() => setCountA((oldState) => oldState + 1)}>Increment</button>
      <br />
      <h2>{countB}</h2>
      <button onClick={() => setCountB((oldState) => oldState + 1)}>Increment</button>
    </div>
  );
}

export default UseEffect;
