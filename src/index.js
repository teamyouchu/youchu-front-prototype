import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyle';
import GlobalFonts from './font/font';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <>
    <GlobalStyle />
    <GlobalFonts />
    <App />
  </>,
  document.getElementById('root'),
);
