import type React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const queryClient = new QueryClient();
interface Props {
  children: React.ReactNode;
}

const CommonTestProviders = ({ children }: Props): React.ReactNode => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => children} />
        <Route path='*' render={() => null} />
      </Switch>
    </BrowserRouter>
  </QueryClientProvider>
);

export default CommonTestProviders;