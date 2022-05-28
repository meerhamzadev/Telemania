import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RootAPIContextWrapper } from './Context/RootAPIContext';



ReactDOM.render(
  <React.StrictMode>
    <RootAPIContextWrapper>
    <App />
    </RootAPIContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
