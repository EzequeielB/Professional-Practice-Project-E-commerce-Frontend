import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import styles from './MenuGroup.module.css';
const MenuGroup = ({ title, icon, routes }) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const isActive = routes.some(route =>
      location.pathname.startsWith(route.to)
    );
    if (isActive) {
      setExpanded(true);
    }
  }, [location.pathname, routes]);

  const toggleExpand = () => {
    setExpanded(prev => !prev);
  };

  return (
    <div className={styles.menuGroup}>
      <div className={styles.menuGroupHeader} onClick={toggleExpand}>
        <span className={styles.menuGroupIcon}>{icon}</span>
        <span className={styles.menuGroupTitle}>{title}</span>
        <span className={styles.menuGroupArrow}>
          {expanded ? '▾' : '▸'}
        </span>
      </div>

      {expanded && (
        <div className={styles.menuGroupItems}>
          {routes.map((route, index) => (
            <NavLink
              key={index}
              to={route.to}
              className={({ isActive }) =>
                `${styles.menuItem} ${
                  isActive ? styles.active : ''
                }`
              }
            >
              {route.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuGroup;
