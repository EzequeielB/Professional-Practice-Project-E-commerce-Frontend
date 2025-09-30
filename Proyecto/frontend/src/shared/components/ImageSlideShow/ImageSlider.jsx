import React, { useState, useEffect } from "react";
import Thumbnail from "./Thumbnail";
import styles from "./ImageSlider.module.css";

const ImageSlider = ({ imgs, showThumbnails = false }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [imgs]);

  const next = () => setIndex(index === imgs.length - 1 ? 0 : index + 1);
  const prev = () => setIndex(index === 0 ? imgs.length - 1 : index - 1);

  return (
    <div className={styles.sliderContainer}>
      <img src={imgs[index]} alt="slider" className={styles.sliderImage} />

      <div className={styles.controls}>
        <button className={styles.button} onClick={prev}>
          Previous
        </button>
        <button className={styles.button} onClick={next}>
          Next
        </button>
      </div>

      {showThumbnails && (
        <Thumbnail arr={imgs} currentIndex={index} onSelect={setIndex} />
      )}
    </div>
  );
};

export default ImageSlider;
