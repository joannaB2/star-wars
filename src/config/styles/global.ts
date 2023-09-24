import { createGlobalStyle } from "styled-components";

import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body  {
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.black}
  }

  h1 {
    font-size: 3.375rem;
  }

  h2 {
    font-size: 2.25rem;
    margin-bottom: 1.5em;
    text-transform: uppercase; 
    color: ${theme.yellow};

    @media ${theme.device.mobileL} {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 1em;
    }
  }

  a {
    text-decoration: none;
  }

`;

export default GlobalStyle;
