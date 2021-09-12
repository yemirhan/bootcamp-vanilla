import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { NotesProvider } from './contexts/NotesProvider';

ReactDOM.render(
  <Router>
    <NotesProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NotesProvider>
  </Router>,
  document.getElementById('root')
);
