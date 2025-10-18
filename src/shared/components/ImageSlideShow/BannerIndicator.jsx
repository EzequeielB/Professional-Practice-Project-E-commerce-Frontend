import React from "react";
import styles from "./styles/BannerIndicators.module.css";

const BannerIndicators = ({ imgs, currentIndex, onSelect }) => {
  return (
    <div className={styles.bannerIndicators}>
      {imgs.map((_, i) => (
        <div
          key={i}
          className={`${styles.indicator} ${
            i === currentIndex ? styles.activeIndicator : ""
          }`}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
};

export default BannerIndicators;
