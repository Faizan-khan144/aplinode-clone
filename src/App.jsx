import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navbar,
  Hero,
  Services,
  Process
} from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Services />
    <Process />
  </React.StrictMode>
);