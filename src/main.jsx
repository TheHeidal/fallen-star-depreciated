import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Alegreya"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Averia+Serif+Libre"
    />
    <App />
  </StrictMode>
);
