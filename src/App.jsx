import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import { DataProvider } from "./context/DataContext";
import { SearchProvider } from "./context/SearchContext";
import { ToggleProvider } from "./context/ToggleContext";

const App = () => {
  return (
    <BrowserRouter>
      <SearchProvider>
        <ToggleProvider>
          <DataProvider>
            <AppRoutes />
          </DataProvider>
        </ToggleProvider>
      </SearchProvider>
    </BrowserRouter>
  );
};

export default App;
