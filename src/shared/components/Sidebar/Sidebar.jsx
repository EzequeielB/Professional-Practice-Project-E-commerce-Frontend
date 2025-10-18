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
<<<<<<< HEAD
            { to: '/productos/gestionar', label: 'Gestionar' },
            { to: '/productos/stock', label: 'Stock' },
=======
            { to: `${FULL_ROUTES.DASHBOARD.PRODUCTS}`, label: "Gestionar" },
            { to: `${FULL_ROUTES.DASHBOARD.STOCK}`, label: "Stock" },
>>>>>>> 636009ac9b488bac976e0f9e61f9b2fc30da6bf7
          ]}
        />

        <MenuGroup
          title="Categorías"
          icon="🗂️"
          routes={[
<<<<<<< HEAD
            { to: '/categorias/gestionar', label: 'Gestionar' },
=======
            { to: `${FULL_ROUTES.DASHBOARD.CATEGORIES}`, label: "Gestionar" },
>>>>>>> 636009ac9b488bac976e0f9e61f9b2fc30da6bf7
          ]}
        />

        <MenuGroup
          title="Oferta"
          icon="💰"
<<<<<<< HEAD
          routes={[
            { to: '/oferta/gestionar', label: 'Gestionar' },
          ]}
=======
          routes={[{ to: `${FULL_ROUTES.DASHBOARD.OFFERS}`, label: "Gestionar" }]}
>>>>>>> 636009ac9b488bac976e0f9e61f9b2fc30da6bf7
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
<<<<<<< HEAD
            { to: '/usuarios/nuevo', label: 'Nuevo Usuario' },
            { to: '/usuarios', label: 'Ver Usuarios' },
            { to: '/usuarios/roles', label: 'Gestionar Roles' },
=======
            { to: `${FULL_ROUTES.DASHBOARD.USERS}`, label: "Gestionar Usuarios" },
            { to: `${FULL_ROUTES.DASHBOARD.USERS_LIST}`, label: "Ver Usuarios" },
            {
              to: `${FULL_ROUTES.DASHBOARD.ROLES}`,
              label: "Gestionar Roles",
            },
>>>>>>> 636009ac9b488bac976e0f9e61f9b2fc30da6bf7
          ]}
        />
      </nav>
    </div>
  );
};

export default Sidebar;
