import React from "react";
import ReactDOM from "react-dom/client";

// APPLICATION
import App from "./App";

// CSS STYLES
import "./styles/basic.css";
import "./styles/global.css";
import "./styles/palette.css";
import "./styles/sizes.css";
import "./styles/mediaq.css";

// HTML IMPLEMENTATION
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
