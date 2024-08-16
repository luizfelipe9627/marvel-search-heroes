import React from "react";
import HeaderHero from "../components/Header/HeaderHero";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import HeroProfile from "../components/Hero/HeroProfile";

const Hero = () => {
  return (
    <>
      <HeaderHero />
      <Main>
        <HeroProfile />
      </Main>
      <Footer />
    </>
  );
};

export default Hero;
