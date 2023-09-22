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
    background-color: ${theme.primary}
  }

  h1 {
    font-size: 3.375rem;
  }

  h2 {
    font-size: 2.25em;
    margin-bottom: 1.5em;
    color: ${theme.yellow}
  }

  a {
    text-decoration: none;
  }

`;

export default GlobalStyle;
