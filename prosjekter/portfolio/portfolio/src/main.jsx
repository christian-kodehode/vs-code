import React from "react";
import ReactDOM from "react-dom/client";

// APP
import App from "./App";

// CSS
import "./styles/global.css";
import "./styles/palette.css";
import "./styles/typography.css";
import "./styles/sizes.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
