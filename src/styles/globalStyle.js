import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
  }

  body {
    width: 100%;
    margin: 0 auto;
  }

  #wrap{
    min-height: calc(100vh - 82px);
    position: relative;
    padding-bottom: 88px;
    @media ${(props) => props.theme.tablet} {
      padding-bottom: 106px;
    }
  }

  #footer{
    width: 100%;
    height: 88px;
    bottom: 0px;
    position: absolute;
    @media ${(props) => props.theme.tablet} {
      height: 106px;
    }
  }
`;

export default GlobalStyle;
