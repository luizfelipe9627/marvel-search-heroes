import React from "react";
import { motion } from "framer-motion";
import styles from "./Toggle.module.css";
import hero from "../../assets/svg/hero.svg";
import heartFull from "../../assets/svg/heart-full.svg";
import { useToggleContext } from "../../context/ToggleContext";
import { useDataContext } from "../../context/DataContext";
import { useSearchContext } from "../../context/SearchContext";
import { useFavoriteContext } from "../../context/FavoriteContext";

const Toggle = () => {
  const { toggleFavorite, setToggleFavorite } = useToggleContext();
  const { dataAPI, isLoading } = useDataContext();
  const { search } = useSearchContext();
  const { favorites } = useFavoriteContext();

  const filterHeroes = (heroes) =>
    heroes.filter((hero) =>
      hero.name.toLowerCase().includes(search.toLowerCase()),
    );

  const filteredCount = toggleFavorite
    ? filterHeroes(favorites).length
    : dataAPI
    ? filterHeroes(dataAPI.data.results).length
    : 0;

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.count}>
          {isLoading && !toggleFavorite ? (
            <p>Buscando heróis...</p>
          ) : filteredCount === 1 ? (
            <p>Encontrado 1 herói</p>
          ) : (
            <p>Encontrados {filteredCount} heróis</p>
          )}
        </div>
      </div>

      <div className={styles.toggle}>
        <div className={styles.hero}>
          <img src={hero} alt="Ícone de herói" />
          <p>Ordenar por nome - A-Z</p>
        </div>

        <div
          className={styles.button}
          onClick={() => setToggleFavorite(!toggleFavorite)}
        >
          <motion.span
            className={styles.circle}
            animate={{ x: toggleFavorite ? 28 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>

        <div className={styles.heart}>
          <img src={heartFull} alt="Ícone de coração" />
          <p>Somente favoritos</p>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
