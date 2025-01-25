import React from "react";
import ReactDOM from "react-dom/client"; // Use ReactDOM from the new API
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
