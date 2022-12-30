import React, { useState } from "react";
import reactLogo from "./assets/react.svg";

import StyledCSSClasses from "./components/StyledCSSClasses";
import StyledInline from "./components/StyledInline";

function App() {
  return (
    <React.Fragment>
      <main>
        <StyledInline />
        <StyledCSSClasses />
      </main>
    </React.Fragment>
  );
}

export default App;
