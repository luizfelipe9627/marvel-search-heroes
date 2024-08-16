import React from "react";
import styles from "./HeroRelease.module.css";
import Paragraph from "../Text/Paragraph";

const HeroRelease = ({ hero }) => {
  const limitedComics = hero.comics.items.slice(-10);

  return (
    <section>
      <h2 className={styles.title}>Últimos lançamentos</h2>

      {hero.comics.items.length === 0 && (
        <Paragraph>Não há quadrinhos disponíveis para este herói.</Paragraph>
      )}

      <ul className={styles.comics}>
        {limitedComics.map((comic) => (
          <li key={comic.resourceURI} className={styles.comicItem}>
            <img
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt={hero.name}
            />
            <p>{comic.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HeroRelease;
