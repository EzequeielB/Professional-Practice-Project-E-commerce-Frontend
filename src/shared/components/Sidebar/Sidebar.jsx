import React from 'react';
import { FaBars } from 'react-icons/fa';
import MenuGroup from '../MenuGroup/MenuGroup';
import Divider from '../ContainerAndDivider/Divider'

const Sidebar = () => {

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
          <h2 className="sidebar-title">Dashboard Admin</h2>
      </div>
      <Divider/>

      <nav className="menu-groups">
        <MenuGroup
          title="Productos"
          icon="📦"
          routes={[
            { to: '/gestionar/productos', label: 'Gestionar' },
            { to: '/productos/stock', label: 'Stock' },
          ]}
        />

        <MenuGroup
          title="Categorías"
          icon="🗂️"
          routes={[
            { to: '/gestionar/categorias', label: 'Gestionar' },
          ]}
        />

        <MenuGroup
          title="Oferta"
          icon="💰"
          routes={[
            { to: '/gestionar/ofertas', label: 'Gestionar' },
          ]}
        />

        <MenuGroup
          title="Órdenes y Pagos"
          icon="🧾"
          routes={[
            { to: '/ordenes', label: 'Órdenes' },
          ]}
        />

        <MenuGroup
          title="Usuarios"
          icon="👤"
          routes={[
            { to: '/gestionar/usuarios', label: 'Gestionar Usuarios' },
            { to: '/usuarios', label: 'Ver Usuarios' },
            { to: '/gestionar/roles', label: 'Gestionar Roles' },
          ]}
        />
      </nav>
    </div>
  );
};

export default Sidebar;
