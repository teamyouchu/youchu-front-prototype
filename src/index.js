import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyle from 'styles/globalStyle';
import theme from 'styles/theme';
import GlobalFonts from 'assets/font/font';
import 'semantic-ui-css/semantic.min.css';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <GlobalFonts />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
