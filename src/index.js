import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./main.css";
import "./styles.scss";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
