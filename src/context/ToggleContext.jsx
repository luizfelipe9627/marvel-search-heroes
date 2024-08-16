import React from "react";

const ToggleContext = React.createContext(null);

export const useToggleContext = () => {
  const context = React.useContext(ToggleContext);

  if (!context) {
    throw new Error("useToggleContext deve estar dentro do ToggleProvider");
  }

  return context;
};

export const ToggleProvider = ({ children }) => {
  const [toggleFavorite, setToggleFavorite] = React.useState(false);

  return (
    <ToggleContext.Provider value={{ toggleFavorite, setToggleFavorite }}>
      {children}
    </ToggleContext.Provider>
  );
};
