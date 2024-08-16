import React from "react";
import book from "../../assets/svg/book.svg";
import video from "../../assets/svg/video.svg";
import Title from "../Text/Title";
import styles from "./HeroInfo.module.css";
import heartFull from "../../assets/svg/heart-full.svg";
import heartEmpty from "../../assets/svg/heart-empty.svg";
import Paragraph from "../Text/Paragraph";
import useFavorite from "../../hooks/useFavorite";
import { motion } from "framer-motion";
import starsFull from "../../assets/svg/stars-full.svg";

const HeroInfo = ({ hero }) => {
  const { isHeartFilled, toggleFavorite, controls } = useFavorite({
    hero: hero,
    localStorageName: "favoritesHeroes",
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString("pt-BR", { month: "short" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  const formattedDate = formatDate(hero.modified);

  return (
    <section className={styles.heroInfo}>
      <div className={styles.infos}>
        <div className={styles.container}>
          <div className={styles.title}>
            <Title>{hero.name}</Title>
            <span className={styles.favorite} onClick={toggleFavorite}>
              <motion.img
                src={isHeartFilled ? heartFull : heartEmpty}
                alt="favorite"
                whileTap={{ scale: 1.2 }}
                animate={controls}
                transition={{ duration: 0.3 }}
              />
            </span>
          </div>

          <div className={styles.description}>
            <Paragraph>
              {hero.description ||
                "Não há descrição disponível para este herói."}
            </Paragraph>
          </div>

          <div className={styles.details}>
            <div className={styles.comics}>
              <p className={styles.title}>Quadrinhos</p>

              <div className={styles.comicsInfo}>
                <img src={book} alt="Livro" />
                <p>{hero.comics.available}</p>
              </div>
            </div>

            <div className={styles.movies}>
              <h4 className={styles.title}>Filmes</h4>

              <div className={styles.moviesInfo}>
                <img src={video} alt="Filme" />
                <p>{hero.series.available}</p>
              </div>
            </div>
          </div>

          <div className={styles.rating}>
            <h4 className={styles.title}>Rating:</h4>
            <img src={starsFull} alt="Estrelas" />
          </div>

          <div className={styles.lastComic}>
            <p className={styles.title}>Último quadrinho:</p>
            <span className={styles.value}>{formattedDate}</span>
          </div>
        </div>
      </div>

      <div className={styles.img}>
        <img
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt={hero.name}
        />
      </div>
    </section>
  );
};

export default HeroInfo;
