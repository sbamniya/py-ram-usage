import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

const reactQueryConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
    },
    mutations: {
      throwOnError: true,
    },
  },
};

const queryClient = new QueryClient(reactQueryConfig);

const AppLike = ({ children }) => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Router>
  );
};

export default AppLike;
