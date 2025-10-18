import { BUTTON_TYPES } from "../../constants";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import { ACTION_TYPES, navbarActions } from "./config";

const Navbar = ({ children }) => {
  const getActions = (action, index) => {
    switch (action.type) {
      case ACTION_TYPES.LOGO:
        return (
          <a key={index} href={action.path} className={styles.siteTitle}>
            Ecommerce
          </a>
        );
      case ACTION_TYPES.LINK_BUTTON:
        return (
          <Button
            key={index}
            label={action.label}
            type={BUTTON_TYPES.LINK_BUTTON}
            onClick={() => (window.location.href = action.path)}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarList}>
        <a href="/home" className={styles.siteTitle}>
          Ecommerce
        </a>
      </div>
      <div className={styles.actionsContainer}>
        {navbarActions.map((action, index) => getActions(action, index))}
      </div>
    </div>
  );
};
export default Navbar;
