import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { NotesProvider } from './contexts/NotesProvider';

ReactDOM.render(
  <NotesProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </NotesProvider>,
  document.getElementById('root')
);
