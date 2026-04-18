import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import fetchBrowsePage from "./utils/psPricesApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// fetchBrowsePage("ps-game-catalog").then(console.log).catch(console.error);
