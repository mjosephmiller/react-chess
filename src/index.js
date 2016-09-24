import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Knight from './knight';
import Square from './square';
import './index.css';

ReactDOM.render(
  <Square black>
    <Knight />
  </Square>,
  document.getElementById('root')
)
