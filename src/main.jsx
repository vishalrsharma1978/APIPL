import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import LocationPage from "./LocationPage";
import "./styles.css";

const location = window.__APIPL_LOCATION__;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {location ? <LocationPage location={location} /> : <App />}
  </React.StrictMode>,
);
