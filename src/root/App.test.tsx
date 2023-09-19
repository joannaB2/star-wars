import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

const queryClient = new QueryClient();

test("renders App component", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
  );
});
