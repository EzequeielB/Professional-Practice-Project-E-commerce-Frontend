import React from "react";
import styles from "./ProductList.module.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductRow = ({ products }) => {
  return (
    <div className={styles.list}>
      {products.map((item, index) => (
        <ProductCard
          key={index}
          url={item.url}
          img={item.img}
          product={item.product}
          price={item.price}
          nQuotas={item.nQuotas}
          quotas={item.quotas}
          discount={item.discount}
        />
      ))}
    </div>
  );
};

export default ProductRow;
