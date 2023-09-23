// eslint-disable-next-line import/order
import ReactDOM from "react-dom/client";
// eslint-disable-next-line import/order
import toast from "react-hot-toast";

import "./index.css";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";

import App from "./root/App";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: () => toast.error(`Something went wrong, try again later`),
  }),
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
