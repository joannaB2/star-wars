import type React from "react";

import theme from "config/styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
interface Props {
  children: React.ReactNode | JSX.Element;
}

export const wrapper = ({ children }: any): any => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;

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
