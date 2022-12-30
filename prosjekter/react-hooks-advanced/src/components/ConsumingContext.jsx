import { useContext } from "react";

import ExampleContext from "../contexts/ExampleContext";

function ConsumingContext() {
  const Example = useContext(ExampleContext);

  return (
    <div>
      <p>{Example}</p>
    </div>
  );
}

export default ConsumingContext;
