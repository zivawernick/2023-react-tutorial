//do not edit (comments added by zw) - bridge between apps.js and web browser
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"; //React DOM = reacts ’s library to talk to web browsers
import "./styles.css";

import App from "./App";
//injection to index.html
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
