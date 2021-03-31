import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PiadasProvider } from "./contexts/PiadasContext";
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <PiadasProvider>
      <App />
    </PiadasProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
