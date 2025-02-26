import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainContext from "./CONTEXT/MainContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <MainContext>
    <App />
  </MainContext>
);
