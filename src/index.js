import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyle';
import GlobalFonts from './font/font';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalFonts />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
