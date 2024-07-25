import React from "react";
import ReactDOM from "react-dom/client";
// import { Canvas } from "@react-three/fiber";

import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      {/* <div id="canvas-container">
        <Canvas />
      </div> */}
    </Router>
  </React.StrictMode>
);
