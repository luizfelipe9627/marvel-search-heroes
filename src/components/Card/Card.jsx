import React from "react";
import heartEmpty from "../../assets/svg/heart-empty.svg";
import heartFull from "../../assets/svg/heart-full.svg";
import styles from "./Card.module.css";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useFavoriteContext } from "../../context/FavoriteContext";

const Card = ({ hero }) => {
  const { isHeartFilled, toggleFavorite } = useFavoriteContext();
  const controls = useAnimation();

  const handleFavoriteClick = async () => {
    await toggleFavorite(hero, controls);
    controls.start({ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] });
  };

  return (
    <div className={styles.card} key={hero.id}>
      <Link
        className={styles.img}
        to={`characters/${hero.id}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <span></span>
        <img
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt={hero.name}
        />
      </Link>

      <div className={styles.info}>
        <h1>{hero.name}</h1>
        <span className={styles.favorite} onClick={handleFavoriteClick}>
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
