import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/basic.css";
import "./styles/global.css";
import "./styles/palette.css";
import "./styles/sizes.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);