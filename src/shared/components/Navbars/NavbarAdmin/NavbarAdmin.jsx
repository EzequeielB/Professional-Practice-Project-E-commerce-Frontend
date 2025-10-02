import React, { useState } from 'react';
import { NavLink } from 'react-router';
import styles from './NavbarAdmin.module.css';

const NavbarAdmin = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const user = {
    name: 'Administrador',
  };

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  const handleLogout = () => {
    console.log('Cerrar sesión');
  };

  const getInitial = (name) => name ? name.charAt(0).toUpperCase() : '?';

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <NavLink to="/dashboard" className={styles.navLink}>Inicio</NavLink>
      </div>

      <div className={styles.navbarRight}>
        <div className={styles.userInfo} onClick={toggleDropdown}>
          <span className={styles.username}>{user.name}</span>
          <div className={styles.avatar}>{getInitial(user.name)}</div>
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
