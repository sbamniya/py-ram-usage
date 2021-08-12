import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./resources/pages";
import { Container, Spinner } from "react-bootstrap";
const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      throwOnError: true,
    },
    queries: {
      refetchInterval: 60 * 1000, // one minute
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <Container fluid>
      <QueryClientProvider client={queryClient}>
        <Router>
          <React.Suspense fallback={<Spinner animation="border" />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </React.Suspense>
        </Router>
      </QueryClientProvider>
    </Container>
  );
}

export default App;
