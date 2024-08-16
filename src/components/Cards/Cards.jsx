import React from "react";
import crypto from "crypto-js";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import SkeletonCard from "../Skeleton/SkeletonCard";
import Pagination from "../Pagination/Pagination";
import { useSearchContext } from "../../context/SearchContext";
import Error from "../../helper/Error";
import { useDataContext } from "../../context/DataContext";
import { useToggleContext } from "../../context/ToggleContext";
import Paragraph from "../Text/Paragraph";

const ts = new Date().getTime();
const publicKey = "737a3b0d056686bdd1f60621b36423e6";
const privateKey = "1c1b9668ff9f024bbdd099d8c1f9efe74e8e0337";
const hash = crypto.MD5(ts + privateKey + publicKey).toString();

const limit = 40;
const urlHeroes = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}`;

const Cards = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { search } = useSearchContext();
  const { setDataAPI, setIsLoading } = useDataContext();
  const { toggleFavorite } = useToggleContext();

  const favoritesHeroes = JSON.parse(localStorage.getItem("favoritesHeroes"));

  const urlHeroesSearch = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${search}&limit=${limit}`;

  const { data, loading, error } = useFetch(
    search === "" ? urlHeroes : urlHeroesSearch,
  );

  React.useEffect(() => {
    if (data) {
      setDataAPI(data);
    }
  }, [data, setDataAPI]);

  if (error) return <Error error={error} />;

  if (toggleFavorite) {
    const filteredFavorites = favoritesHeroes.filter((hero) =>
      hero.name.toLowerCase().includes(search.toLowerCase()),
    );

    if (filteredFavorites.length === 0) {
      return (
        <Paragraph>
          Não há heróis favoritados ou o nome pesquisado não foi encontrado.
        </Paragraph>
      );
    }

    return (
      <div className={styles.cards}>
        {filteredFavorites.map((hero) => (
          <Card key={hero.id} hero={hero} />
        ))}
      </div>
    );
  }

  if (loading) {
    setIsLoading(true);
    return (
      <div className={styles.cards}>
        {Array(20)
          .fill(null)
          .map((_, index) => (
            <SkeletonCard key={index} />
          ))}
      </div>
    );
  }

  if (data) {
    setIsLoading(false);

    const itemsPerPage = 20;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.data.results.slice(
      indexOfFirstItem,
      indexOfLastItem,
    );

    return (
      <>
        <div className={styles.cards}>
          {currentItems.map((hero) => (
            <Card key={hero.id} hero={hero} />
          ))}
        </div>

        {data.data.results.length > 20 && (
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={data.data.count}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </>
    );
  }
};

export default Cards;
