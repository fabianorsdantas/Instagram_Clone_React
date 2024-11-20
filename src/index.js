<<<<<<< HEAD
import ReactDOM from "react-dom";

import "./styles/reset.css";
import "./styles/styles.css";

import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
=======
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
>>>>>>> 4cd795bff4ab83c814fc54d6108c9ed11bf935f5
