import { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  console.log("this code will run on every iteration");

  useEffect(() => {
    console.log("this will run once"), [];
  });

  return (
    <div>
      <h1>Dette er en UseEffect Component</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount((oldState) => oldState + 1)}>Increment</button>
    </div>
  );
}

export default UseEffect;
