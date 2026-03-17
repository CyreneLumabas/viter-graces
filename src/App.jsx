import PageNotFound from "@/components/partials/PageNotFound";
import { StoreProvider } from "@/store/StoreContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import { routesAccess } from "./routes/RoutesAccess";
import { routesDeveloper } from "./routes/RoutesDeveloper";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path={`*`} element={<PageNotFound />} />

              {/* ACCESS USER ROUTE */}
              {routesAccess.map(({ ...routeProps }, key) => {
                return <Route key={key} {...routeProps} />;
              })}

              {/* SYSTEM USER ROUTE */}
              {routesDeveloper.map(({ ...routeProps }, key) => {
                return <Route key={key} {...routeProps} />;
              })}
            </Routes>
          </Router>
        </StoreProvider>{" "}
      </QueryClientProvider>{" "}
    </>
  );
};

export default App;
