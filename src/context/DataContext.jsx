import React from "react";

const DataContext = React.createContext(null);

export const useDataContext = () => {
  const context = React.useContext(DataContext);

  if (!context) {
    throw new Error("useDataContext deve estar dentro do DataProvider");
  }

  return context;
};

export const DataProvider = ({ children }) => {
  const [dataAPI, setDataAPI] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <DataContext.Provider
      value={{ dataAPI, setDataAPI, isLoading, setIsLoading }}
    >
      {children}
    </DataContext.Provider>
  );
};
