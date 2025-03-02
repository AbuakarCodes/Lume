import { createRoot } from "react-dom/client";
import MainContext from "./CONTEXT/MainContext.jsx";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <MainContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainContext>
);
