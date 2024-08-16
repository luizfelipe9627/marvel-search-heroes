import React from "react";
import styles from "./Paragraph.module.css";

const Paragraph = ({ children, align, margin }) => {
  return (
    <p
      className={styles.paragraph}
      style={{ textAlign: align, margin: margin }}
    >
      {children}
    </p>
  );
};

export default Paragraph;
