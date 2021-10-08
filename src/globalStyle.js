import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  body {
    width: 1100px;
    margin: 0 auto;
    box-sizing: border-box;
  }
`

export default GlobalStyle