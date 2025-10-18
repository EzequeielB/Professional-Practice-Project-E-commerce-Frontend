import React from "react";
import styles from "./authRedirectPanel.module.css";

const AuthRedirectPanel = ({ text, linkText, linkPath }) => {
  return (
    <div className={styles.container}>
      <span>
        {text} <a href={linkPath}>{linkText}</a>
      </span>
    </div>
  );
};

export default AuthRedirectPanel;
