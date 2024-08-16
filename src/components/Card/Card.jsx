import React from "react";
import heartEmpty from "../../assets/svg/heart-empty.svg";
import heartFull from "../../assets/svg/heart-full.svg";
import styles from "./Card.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useFavorite from "../../hooks/useFavorite";

const Card = ({ hero }) => {
  const { isHeartFilled, toggleFavorite, controls } = useFavorite({
    hero: hero,
    localStorageName: "favoritesHeroes",
  });

  return (
    <div className={styles.card} key={hero.id}>
      <Link className={styles.img} to={`characters/${hero.id}`}>
        <span></span>
        <img
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt={hero.name}
        />
      </Link>

      <div className={styles.info}>
        <h1>{hero.name}</h1>
        <span
          className={styles.favorite}
          onClick={toggleFavorite}
        >
          <motion.img
            src={isHeartFilled ? heartFull : heartEmpty}
            alt="favorite"
            whileTap={{ scale: 1.2 }}
            animate={controls}
            transition={{ duration: 0.3 }}
          />
        </span>
      </div>
    </div>
  );
};

export default Card;
