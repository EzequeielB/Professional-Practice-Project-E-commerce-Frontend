import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import styles from "./NavbarAdmin.module.css";
import { ROUTES } from "../../../../Router/routesConfig";
import { useSelector } from "react-redux";
import { useUsers } from "../../../../hooks/useUsers";

const NavbarAdmin = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const { logout } = useUsers();
  const auth = useSelector((state) => state.auth.decode);
  console.log(auth);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <NavLink to={ROUTES.DASHBOARD} className={styles.navLink}>
          Inicio
        </NavLink>
        <NavLink to={ROUTES.HOME} className={styles.navLink}>
          Home
        </NavLink>
      </div>

      <div className={styles.navbarRight}>
        <div className={styles.userInfo} onClick={toggleDropdown}>
          <span className={styles.username}>
            Administrador: {auth?.username || "Desconocido"}
          </span>
          <div className={styles.avatar}>
            {getInitial(auth?.username || "A")}
          </div>
          {dropdownOpen && (
            <div className={styles.dropdown}>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
