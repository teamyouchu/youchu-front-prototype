import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyle';
import GlobalFonts from './font/font';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <GlobalFonts />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
