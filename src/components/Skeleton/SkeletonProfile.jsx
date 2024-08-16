import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./SkeletonProfile.module.css";

const SkeletonProfile = () => {
  return (
    <SkeletonTheme color="#202020" highlightColor="#444" duration={1}>
      <div data-testid="skeleton-loading">
        <div className={styles.skeletonContainer}>
          <div className={styles.skeletonInfo}>
            <div className={styles.skeletonTitle}>
              <Skeleton width={250} height={50} />
              <Skeleton width={30} height={30} circle={true} />
            </div>

            <div className={styles.skeletonDescription}>
              <Skeleton height={100} />
            </div>

            <div className={styles.skeletonDetails}>
              <div className={styles.skeletonDetailItem}>
                <Skeleton
                  className={styles.skeletonDescription}
                  width={80}
                  height={15}
                />

                <div className={styles.skeletonIconText}>
                  <Skeleton width={30} height={30} />
                  <Skeleton width={10} height={15} />
                </div>
              </div>

              <div className={styles.skeletonDetailItem}>
                <Skeleton
                  className={styles.skeletonDescription}
                  width={80}
                  height={15}
                />

                <div className={styles.skeletonIconText}>
                  <Skeleton width={30} height={30} />
                  <Skeleton width={10} height={15} />
                </div>
              </div>
            </div>

            <div className={styles.skeletonRating}>
              <Skeleton width={50} height={15} />
              <Skeleton width={90} height={15} />
            </div>

            <div className={styles.skeletonRating}>
              <Skeleton width={120} height={15} />
              <Skeleton width={80} height={15} />
            </div>
          </div>

          <div className={styles.skeletonImageContainer}>
            <Skeleton className={styles.skeletonImage} />
          </div>
        </div>

        <div>
          <Skeleton width={300} height={28} />

          <div className={styles.skeletonGridContainer}>
            {Array(10)
              .fill(null)
              .map((_, index) => (
                <div key={index} className={styles.skeletonGridItem}>
                  <Skeleton key={index} height={200} />
                  <Skeleton key={index} height={20} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonProfile;
