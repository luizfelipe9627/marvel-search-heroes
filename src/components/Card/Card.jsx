import React from "react";
import heartEmpty from "../../assets/svg/heart-empty.svg";
import heartFull from "../../assets/svg/heart-full.svg";
import styles from "./Card.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useFavoriteContext } from "../../context/FavoriteContext";

const Card = ({ hero }) => {
  const { isHeartFilled, toggleFavorite, controls } = useFavoriteContext();

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
          onClick={() => toggleFavorite(hero)}
        >
          <motion.img
            src={isHeartFilled(hero.id) ? heartFull : heartEmpty}
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
