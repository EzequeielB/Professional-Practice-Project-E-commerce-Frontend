import styles from './Container.module.css'
const Container = ({ children }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        {children}
      </div>
    </div>
  );
};

export default Container;