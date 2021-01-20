import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './components/App';

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.body,
);
