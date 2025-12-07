import React from "react";
import { FaBars } from "react-icons/fa";
import MenuGroup from "../MenuGroup/MenuGroup";
import Divider from "../Divider/Divider";
import { FULL_ROUTES } from "../../../Router/routesConfig";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Dashboard Admin</h2>
      </div>
      <Divider />

      <nav className="menu-groups">
        <MenuGroup
          title="Productos"
          icon="📦"
          routes={[
            { to: `${FULL_ROUTES.DASHBOARD.PRODUCTS}`, label: "Gestionar" },
            { to: `${FULL_ROUTES.DASHBOARD.SIZES}`, label: "Talle" },
            { to: `${FULL_ROUTES.DASHBOARD.BRANDS}`, label: "Marcas" },
            { to: `${FULL_ROUTES.DASHBOARD.UNIQUE_PRODUCTS}`, label: "Producto Unico" },
          ]}
        />

        <MenuGroup
          title="Categorías"
          icon="🗂️"
          routes={[
            { to: `${FULL_ROUTES.DASHBOARD.CATEGORIES}`, label: "Gestionar" },
          ]}
        />

        <MenuGroup
          title="Oferta"
          icon="💰"
          routes={[{ to: `${FULL_ROUTES.DASHBOARD.OFFERS}`, label: "Gestionar" }]}
        />

        <MenuGroup
          title="Órdenes y Pagos"
          icon="🧾"
          routes={[{ to: `${FULL_ROUTES.DASHBOARD.ORDERS}`, label: "Órdenes" }]}
        />

        <MenuGroup
          title="Usuarios"
          icon="👤"
          routes={[
            { to: `${FULL_ROUTES.DASHBOARD.USERS}`, label: "Gestionar Usuarios" },
            { to: `${FULL_ROUTES.DASHBOARD.USERS_LIST}`, label: "Ver Usuarios" },
            {
              to: `${FULL_ROUTES.DASHBOARD.ROLES}`,
              label: "Gestionar Roles",
            },
          ]}
        />
      </nav>
    </div>
  );
};

export default Sidebar;
