import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Board from './board';
import './index.css';



ReactDOM.render(
  <Board knightPosition={[0, 0]} />,
  document.getElementById('root')
);
