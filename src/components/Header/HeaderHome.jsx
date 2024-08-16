import styles from "./HeaderHome.module.css";
import logo from "../../assets/img/logo.png";

const HeaderHome = () => {
  return (
    <header className={styles.headerHome}>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default HeaderHome;
