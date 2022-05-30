// React
import React from "react";
import ReactDOM from "react-dom/client";

// React-Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import "./index.css";

// Routes
import App from "./App";
import Projects from "./views/Projects/Projects";
import Details from "./views/Projects/Details";
import About from "./views/About/About";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio/" element={<App />}>
          <Route index element={<Projects />} />
          <Route path="/portfolio/project/:name" element={<Details />} />
          <Route path="/portfolio/about/" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
