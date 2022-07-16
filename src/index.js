import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FirebaseAppProvider } from "./context/FirebaseAppProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseAppProvider>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>
);
