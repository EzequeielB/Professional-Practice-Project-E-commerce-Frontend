import { useState } from "react";
import { BUTTON_TYPES } from "../../constants";
import Button from "../Button/Button";
import CartDropdown from "../CartDropdown/CartDropdown";
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

  const cart = useSelector((state) => state.cart.cart);
  const cartItems = cart?.items || [];

  const [showCart, setShowCart] = useState(false);

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  const isAdmin = auth?.decode?.roles?.includes(1);

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
        <a href={ROUTES.HOME} className={styles.siteTitle}>
          Ecommerce
        </a>
      </div>
      <div className={styles.actionsContainer}>
        {!auth?.token ? (
          navbarActions.map((action, index) => getActions(action, index))
        ) : (
          <div className={styles.loggedActions}>
            <Button
              label="Cerrar sesión"
              type={BUTTON_TYPES.LINK_BUTTON}
              onClick={handleLogout}
            />

            {isAdmin && (
              <Button
                label="Dashboard"
                type={BUTTON_TYPES.LINK_BUTTON}
                onClick={() => navigate(ROUTES.DASHBOARD)}
              />
            )}

            <div
              className={styles.cartIcon}
              onClick={() => setShowCart((prev) => !prev)}
            >
              🛒
              {cartItems.length > 0 && (
                <span className={styles.cartCount}>{cartItems.length}</span>
              )}
            </div>

            {showCart && <CartDropdown />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
