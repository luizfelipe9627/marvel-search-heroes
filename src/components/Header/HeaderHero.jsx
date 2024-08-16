import React from "react";
import logo from "../../assets/img/logo.png";
import styles from "./HeaderHero.module.css";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

const HeaderHero = () => {
  return (
    <header className={styles.headerHero}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      
      <Search
        bgColor={"#fff"}
        maxWidth={"100%"}
        placeholderColor={"var(--gray-medium)"}
      />
    </header>
  );
};

export default HeaderHero;
