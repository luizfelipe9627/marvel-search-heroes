import React, { useState, useContext } from "react";
import { useAnimation } from "framer-motion";

const FavoriteContext = React.createContext(null);

export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("useFavoriteContext deve estar dentro do FavoriteProvider");
  }

  return context;
};

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favoritesHeroes") || "[]");
  });

  const controls = useAnimation();

  const toggleFavorite = async (hero) => {
    let updatedFavorites;

    const isFavorite = favorites.some((fav) => fav.id === hero.id);

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== hero.id);
    } else {
      if (favorites.length >= 5) {
        await controls.start({ 
          x: [0, 3, -3, 3, -3, 0], 
          transition: { duration: 0.5 } 
        });
        return;
      }

      updatedFavorites = [
        ...favorites,
        {
          id: hero.id,
          name: hero.name,
          thumbnail: {
            path: hero.thumbnail.path,
            extension: hero.thumbnail.extension,
          },
        },
      ];
    }

    localStorage.setItem("favoritesHeroes", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const isHeartFilled = (heroId) => {
    return favorites.some((fav) => fav.id === heroId);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isHeartFilled, controls }}>
      {children}
    </FavoriteContext.Provider>
  );
};
