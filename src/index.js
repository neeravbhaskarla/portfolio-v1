import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Progress from './components/Progress/Progress';


ReactDOM.render(
  <React.Suspense fallback={null}>
    <Progress/>
    <App />
  </React.Suspense>,
  document.getElementById('root')
);
