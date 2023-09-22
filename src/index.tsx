// eslint-disable-next-line import/order
import ReactDOM from "react-dom/client";

import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./root/App";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
