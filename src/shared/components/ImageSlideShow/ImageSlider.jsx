import React, { useState } from "react";
import Thumbnail from "./Thumbnail";
import styles from "./styles/ImageSlider.module.css";
import stylesBanner from "./styles/BannerSlider.module.css";
import BannerIndicators from "./BannerIndicator";
import SliderButtons from "./SliderButtons";

const slyder = styles.sliderContainer;
const imgSlider = styles.sliderImage;
const bannerStyle = stylesBanner.bannerContainer;
const bannerImg = stylesBanner.bannerImage;

const ImageSlider = ({
  imgs,
  urls,
  showThumbnails = false,
  showIndicator = true,
  banner = true,
}) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className={banner ? bannerStyle : slyder} onClick={() => urls && (window.location.href = urls[index])}>
        <img
          src={imgs[index]}
          alt="slider"
          className={banner ? bannerImg : imgSlider}
        />
        <SliderButtons
          banner={banner}
          imgs={imgs}
          index={index}
          setIndex={setIndex}
        />
      </div>
      {showThumbnails && (
        <Thumbnail arr={imgs} currentIndex={index} onSelect={setIndex} />
      )}
      {showIndicator && (
        <BannerIndicators
          imgs={imgs}
          currentIndex={index}
          onSelect={setIndex}
        />
      )}
    </>
  );
};

export default ImageSlider;
