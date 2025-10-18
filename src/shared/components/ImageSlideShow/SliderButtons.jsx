import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./styles/ImageSlider.module.css";
import stylesBanner from "./styles/BannerSlider.module.css";
import { useEffect } from "react";

const SliderButtons = ({ banner, imgs, index, setIndex }) => {
  useEffect(() => {
    setIndex(0);
  }, [imgs]);

  const next = (e) => {
    e.stopPropagation();
    setIndex(index === imgs.length - 1 ? 0 : index + 1);
  };
  const prev = (e) => {
    e.stopPropagation();
    setIndex(index === 0 ? imgs.length - 1 : index - 1);
  };

  const sliderButton = styles.buttonSlider;
  const controlsBanner = stylesBanner.controlsBanner;
  const controlSlider = styles.controlsSlider;
  const bannerButtonLeft = `${stylesBanner.buttonBanner} ${stylesBanner.left}`;
  const bannerButtonRight = `${stylesBanner.buttonBanner} ${stylesBanner.right}`;

  return (
    <div className={banner ? controlsBanner : controlSlider}>
      <button
        className={banner ? bannerButtonLeft : sliderButton}
        onClick={prev}
      >
        <FaChevronLeft />
      </button>
      <button
        className={banner ? bannerButtonRight : sliderButton}
        onClick={next}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default SliderButtons;
