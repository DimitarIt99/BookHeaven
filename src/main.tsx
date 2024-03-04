import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
//import './index.css'
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/user.css";
import { BrowserRouter } from "react-router-dom";

// TODO fix this trash and create a loading form

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
