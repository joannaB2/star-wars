import type React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "../../config/styles/theme";

const queryClient = new QueryClient();
interface Props {
  children: React.ReactNode | JSX.Element;
}

const CommonTestProviders = ({ children }: Props): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => children} />
          <Route path='*' render={() => null} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default CommonTestProviders;
