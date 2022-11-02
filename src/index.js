import React from 'react';
import { createRoot } from 'react-dom/client';
import './functionBased/App.css';
import { HashRouter as Router } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
);
