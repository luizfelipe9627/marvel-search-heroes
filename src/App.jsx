import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import { DataProvider } from "./context/DataContext";
import { SearchProvider } from "./context/SearchContext";
import { ToggleProvider } from "./context/ToggleContext";
import { FavoriteProvider } from "./context/FavoriteContext";

const App = () => {
  return (
    <BrowserRouter>
      <FavoriteProvider>
        <SearchProvider>
          <ToggleProvider>
            <DataProvider>
              <AppRoutes />
            </DataProvider>
          </ToggleProvider>
        </SearchProvider>
      </FavoriteProvider>
    </BrowserRouter>
  );
};

export default App;
