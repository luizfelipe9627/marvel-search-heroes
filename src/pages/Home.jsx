import React from "react";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import Title from "../components/Text/Title";
import Paragraph from "../components/Text/Paragraph";
import Main from "../components/Main/Main";
import Search from "../components/Search/Search";
import HeaderHome from "../components/Header/HeaderHome";
import Toggle from "../components/Toggle/Toggle";
import { useLocation } from "react-router-dom";
import { useSearchContext } from "../context/SearchContext";

const Home = () => {
  const root = document.getElementById("root");

  React.useEffect(() => {
    root.style.backgroundColor = "#fff";
  }, [root]);

  return (
    <>
      <HeaderHome />
      <Main>
        <section>
          <Title align={"center"} margin={"0 0 10px 0"}>
            Explore o universo
          </Title>
          <Paragraph align={"center"}>
            Mergulhe no domínio deslumbrante de todos os personagens clássicos
            que você ama - e aqueles que você descobrirá em breve!
          </Paragraph>
          <Search />
          <Toggle />
          <Cards />
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
