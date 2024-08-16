import React from "react";
import lupe from "../../assets/svg/lupe.svg";
import styles from "./Search.module.css";
import { useSearchContext } from "../../context/SearchContext";
import { useLocation } from "react-router-dom";

const Search = ({ bgColor, maxWidth, placeholderColor }) => {
  const { search, setSearch } = useSearchContext();
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === "/" || pathname.startsWith("/characters")) {
      setSearch("");
    }
  }, [pathname, setSearch]);

  return (
    <div className={styles.search} style={{ maxWidth: maxWidth || "800px" }}>
      <span className={styles.icon}>
        <img src={lupe} alt="Ícone de lupa" />
      </span>

      <input
        id="character"
        name="character"
        type="text"
        placeholder="Procure por heróis"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        required
        className={styles.input}
        style={{
          backgroundColor: bgColor || "var(--primary-red-background)",
          "--placeholder-color": placeholderColor || "var(--primary-red)",
        }}
      />
    </div>
  );
};

export default Search;
