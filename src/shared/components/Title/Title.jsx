import React from "react";
import styles from "./title.module.css";

const Title = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};

export default Title;
