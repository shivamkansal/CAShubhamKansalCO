import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//importing main app
import App from "./App";

import "./assets/css/demo.css";
import "./assets/css/now-ui-kit.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/nucleo-icons-page-styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
