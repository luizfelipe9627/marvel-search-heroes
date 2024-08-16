import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./SkeletonCard.module.css";

const SkeletonCard = () => {
  return (
    <SkeletonTheme color="#202020" highlightColor="#444" duration={1}>
      <div className={styles.skeletonContainer} data-testid="skeleton-loading">
        <div className={styles.skeletonImage}>
          <Skeleton height="100%" />
        </div>

        <div className={styles.skeletonDetails}>
          <Skeleton className={styles.skeletonText} />
          <Skeleton className={styles.skeletonIcon} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonCard;
