import React from "react";
import crypto from "crypto-js";
import { useParams } from "react-router-dom";
import Error from "../../helper/Error";
import useFetch from "../../hooks/useFetch";
import HeroInfo from "../../components/Hero/HeroInfo";
import HeroRelease from "../../components/Hero/HeroRelease";
import { useSearchContext } from "../../context/SearchContext";
import SkeletonProfile from "../../components/Skeleton/SkeletonProfile";

const ts = new Date().getTime();
const publicKey = "737a3b0d056686bdd1f60621b36423e6";
const privateKey = "1c1b9668ff9f024bbdd099d8c1f9efe74e8e0337";
const hash = crypto.MD5(ts + privateKey + publicKey).toString();

const HeroProfile = () => {
  const { id } = useParams();
  const { search } = useSearchContext();
  let urlHeroId;

  if (search) {
    urlHeroId = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${search}`;
  } else {
    urlHeroId = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  }

  const { data, loading, error } = useFetch(urlHeroId);
  console.log(data);
  const root = document.getElementById("root");

  React.useEffect(() => {
    root.style.backgroundColor = "var(--success-background)";
  }, [root]);

  if (error) return <Error error={error} />;

  if (loading) return <SkeletonProfile />;

  if (data) {
    return (
      <>
        <HeroInfo hero={data.data.results[0]} />
        <HeroRelease hero={data.data.results[0]} />
      </>
    );
  }
};

export default HeroProfile;
