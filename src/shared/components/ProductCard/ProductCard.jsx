import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import styles from "./ProductCard.module.css";

const ProductCard = ({
  url,
  img,
  product,
  price,
  nQuotas,
  quotas,
  discount,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const addFavorites = "Agregar a favoritos";
  const quitFavorites = "Quitar de favoritos";
  const [isFavoriteText, setIsFavoriteText] = useState(addFavorites);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsFavorite((prev) => {
      const Value = !prev;
      setIsFavoriteText(Value ? quitFavorites : addFavorites);
      return Value;
    });
  };

  const renderIcon = () => {
    if (isFavorite) return <FaHeart />;
    return isHovered ? <FaHeart /> : <FaRegHeart />;
  };

  const buttonClass = isFavorite
    ? `${styles.favoriteBtn} ${styles.active}`
    : styles.favoriteBtn;

  return (
    <div
      className={styles.container}
      onClick={() => (window.location.href = url)}
    >
      <img src={img} className={styles.img} />
      <div className={styles.description}>
        <p className={styles.productName}>{product}</p>
        <div className={styles.priceContainer}>
          <p className={styles.price}>{price}</p>
          <p className={styles.discount}>{discount}</p>
        </div>
        <p className={styles.cuotas}>
          {nQuotas} cuotas sin interés de {quotas}
        </p>
        <button
          className={buttonClass}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        >
          {renderIcon()} {isFavoriteText}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
