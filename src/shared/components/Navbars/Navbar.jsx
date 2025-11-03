import { BUTTON_TYPES } from "../../constants";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import { ACTION_TYPES, navbarActions } from "./config";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useUsers } from "../../../hooks/useUsers";
import { ROUTES } from "../../../Router/routesConfig";

const Navbar = ({ children }) => {
  const navigate = useNavigate();

  const { logout } = useUsers();

  const auth = useSelector((state) => state.auth);

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  const getActions = (action, index) => {
    switch (action.type) {
      case ACTION_TYPES.LOGO:
        return (
          <a key={index} href={action.path} className={styles.siteTitle}>
            {children}
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
        <a href="#" className={styles.siteTitle}>
          Ecommerce
        </a>
      </div>
      <div className={styles.actionsContainer}>
        {!auth?.token ? (
          navbarActions.map((action, index) => getActions(action, index))
        ) : (
          <Button
            label="Cerrar sesión"
            type={BUTTON_TYPES.LINK_BUTTON}
            onClick={handleLogout}
          />
        )}
      </div>
    </div>
  );
};
export default Navbar;
