import React from "react";

const SearchContext = React.createContext(null);

export const useSearchContext = () => {
  const context = React.useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchContext deve estar dentro do SearchProvider");
  }

  return context;
};

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = React.useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
