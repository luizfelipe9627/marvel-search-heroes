import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <SkeletonTheme color="#202020" highlightColor="#444" duration={1}>
      <div data-testid="skeleton-loading">
        <div>
          <Skeleton height={248} />
        </div>

        <div style={{display: "flex", justifyContent: "space-between", padding: "24px 0"}}>
          <Skeleton width={150} height={18} />
          <Skeleton width={18} height={18} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonCard;
