import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import RouteProvider from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouteProvider />
  </React.StrictMode>
);
