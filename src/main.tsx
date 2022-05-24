import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Projects from "./views/Projects/Projects";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio/" element={<App />}>
          <Route index element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
