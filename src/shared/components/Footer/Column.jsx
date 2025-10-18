import React from "react";
import styles from "./Footer.module.css"

const Column = ({ section }) => {
  return (
    <div>
      {section.map((item, index) => (
        <div key={index} className={styles.column}>
          <h1>{item.title}</h1>
          {item.links.map((link, i) => (
            <a key={i} href={link.url}>
              {link.name}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Column;
