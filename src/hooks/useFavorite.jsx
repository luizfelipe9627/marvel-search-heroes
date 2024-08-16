import React from "react";
import { useAnimation } from "framer-motion";

const useFavorite = ({ hero, localStorageName }) => {
  const [isHeartFilled, setHeartFilled] = React.useState(() => {
    const favorites = JSON.parse(localStorage.getItem(localStorageName) || "[]");
    return favorites.some((fav) => fav.id === hero.id);
  });

  const controls = useAnimation(); // Framer Motion animation controls

  const toggleFavorite = async () => {
    let favorites = JSON.parse(localStorage.getItem(localStorageName) || "[]");

    if (isHeartFilled) {
      favorites = favorites.filter((fav) => fav.id !== hero.id);
    } else {
      if (favorites.length >= 5) {
        // Trigger the shaking effect
        await controls.start({ 
          x: [0, 3, -3, 3, -3, 0], 
          transition: { duration: 0.5 } 
        });
        return;
      }
      
      favorites.push({
        id: hero.id,
        name: hero.name,
        thumbnail: {
          path: hero.thumbnail.path,
          extension: hero.thumbnail.extension,
        },
      });
    }

    localStorage.setItem(localStorageName, JSON.stringify(favorites));
    setHeartFilled(!isHeartFilled);
  };

  return { isHeartFilled, toggleFavorite, controls };
};

export default useFavorite;
