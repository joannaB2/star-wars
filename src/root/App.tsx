import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../config/styles/global";
import theme from "../config/styles/theme";
import Router from "../router/Router";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
