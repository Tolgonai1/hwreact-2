import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ChangeBlue, {ChangeRed} from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChangeBlue />
      <ChangeRed/>
  </React.StrictMode>
);
