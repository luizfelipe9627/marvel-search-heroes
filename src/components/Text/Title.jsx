import React from "react";
import styles from "./Title.module.css";

const Title = ({ children, align, margin }) => {
  return (
    <h1 className={styles.title} style={{ textAlign: align, margin: margin }}>
      {children}
    </h1>
  );
};

export default Title;
