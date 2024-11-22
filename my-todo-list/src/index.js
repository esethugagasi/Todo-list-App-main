import React from "react";
import ReactDOM from "react-dom/client"; // Use the correct import for React 18
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
