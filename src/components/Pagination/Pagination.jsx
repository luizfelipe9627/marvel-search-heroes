import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Pagination.module.css";
import ArrowPrev from "../../assets/ArrowPrev";
import ArrowNext from "../../assets/ArrowNext";

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + 2);

  if (endPage - startPage < 2) {
    startPage = Math.max(1, endPage - 2);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <motion.button
        className={styles.prev}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowPrev disabled={currentPage === 1} />
      </motion.button>

      <div className={styles.buttons}>
        <AnimatePresence>
          {pageNumbers.map((number) => (
            <motion.button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={currentPage === number ? styles.active : ""}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {number}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <motion.button
        className={styles.next}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowNext disabled={currentPage === totalPages} />
      </motion.button>
    </div>
  );
};

export default Pagination;
