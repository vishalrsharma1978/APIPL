import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import LocationPage from "./LocationPage";

export function render() {
  return renderToString(
    React.createElement(React.StrictMode, null, React.createElement(App)),
  );
}

export function renderLocation(location) {
  return renderToString(
    React.createElement(
      React.StrictMode,
      null,
      React.createElement(LocationPage, { location }),
    ),
  );
}
