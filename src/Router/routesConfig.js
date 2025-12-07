export const ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  RESET_PASSWORD: "/reset-password",
  VERIFY_OTP: "/verefy-OTP",
  CHANGE_PASSWORD: "/change-password",
  HOME: "/home",
  SHOP: "/product",
};

export const SUB_ROUTES = {
  DASHBOARD: {
    PRODUCTS: "productos",
    STOCK: "stock",
    CATEGORIES: "categorias",
    ROLES: "roles",
    USERS: "usuarios",
    USERS_LIST: "usuarios-list",
    OFFERS: "ofertas",
    ORDERS: "ordenes",
    SIZES: "talles",
    BRANDS: "marcas",
    UNIQUE_PRODUCTS: "uniqueproducts"
  },
};

export const FULL_ROUTES = Object.fromEntries(
  Object.entries(SUB_ROUTES).map(([key, subRoutes]) => {
    const parent = ROUTES[key];
    const fullSubRoutes = Object.fromEntries(
      Object.entries(subRoutes).map(([subKey, subPath]) => [
        subKey,
        `${parent}/${subPath}`,
      ])
    );
    return [key, fullSubRoutes];
  })
);