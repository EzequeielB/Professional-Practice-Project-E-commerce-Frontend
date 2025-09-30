import styles from "./ImageSlider.module.css";

const Thumbnail = ({ arr, currentIndex, onSelect }) => {
  return (
    <div className={styles.thumbnails}>
      {arr.map((imgsrc, i) => (
        <img
          key={i}
          src={imgsrc}
          alt={`thumbnail-${i}`}
          className={`${styles.thumbnail} ${
            i === currentIndex ? styles.activeThumbnail : ""
          }`}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
};

export default Thumbnail;
