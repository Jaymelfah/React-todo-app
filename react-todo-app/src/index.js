import React from "react"
import { createRoot } from "react-dom/client"
import "./functionBased/App.css"
import TodoContainer from "./functionBased/components/TodoContainer"
import { HashRouter as Router } from "react-router-dom"

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
);