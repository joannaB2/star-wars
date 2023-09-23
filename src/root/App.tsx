import { Suspense } from "react";

import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Loader from "../components/Loader";
import GlobalStyle from "../config/styles/global";
import theme from "../config/styles/theme";
import Router from "../router/Router";

function App(): JSX.Element {
  return (
    <Suspense fallback={<Loader />}>
      <Toaster />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
