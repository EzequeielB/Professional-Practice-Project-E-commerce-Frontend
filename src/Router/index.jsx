import { createBrowserRouter } from "react-router";
import {
  RegisterScreen,
  DashboardScreen,
  LoginScreen,
  VerefyOTPscreen,
  ResetPasswordSceen,
  ChangePasswordScreen,
  HomeScreen,
  RolesDashboardScreen,
  UsersDashboardScreen,
  ProductsDashboardScreen,
  OffersDashboardScreen,
  SizesDashboardScreen,
  BrandDashboardScreen,
  UniqueProductsDashboardScreen,
  ShopDisplayView,
} from "../Pages";
import MainLayout from "../shared/components/layouts/MainLayout";
import DashboardLayout from "../shared/components/layouts/DashboardLayout/DashboardLayout";
import { ROUTES, SUB_ROUTES } from "./routesConfig";
import RequireAuth from "../hooks/RequireAuth";
import RequireGuest from "../hooks/RequireGuest";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <RequireGuest />,
        children: [
          { path: ROUTES.REGISTER, element: <RegisterScreen /> },
          { path: ROUTES.LOGIN, element: <LoginScreen /> },
        ],
      },
      { path: ROUTES.RESET_PASSWORD, element: <ResetPasswordSceen /> },
      { path: ROUTES.VERIFY_OTP, element: <VerefyOTPscreen /> },
      { path: ROUTES.CHANGE_PASSWORD, element: <ChangePasswordScreen /> },
      { path: ROUTES.HOME, element: <HomeScreen /> },
      { path: `${ROUTES.SHOP}/:id`, element: <ShopDisplayView /> },
    ],
  },

  {
    element: <RequireAuth allowedRoles={[1]} />,
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <DashboardLayout />,
        children: [
          {
            path: SUB_ROUTES.DASHBOARD.CATEGORIES,
            element: <DashboardScreen />,
          },
          {
            path: SUB_ROUTES.DASHBOARD.ROLES,
            element: <RolesDashboardScreen />,
          },
          {
            path: SUB_ROUTES.DASHBOARD.USERS,
            element: <UsersDashboardScreen />,
          },
          {
            path: SUB_ROUTES.DASHBOARD.PRODUCTS,
            element: <ProductsDashboardScreen />,
          },
          {
            path: SUB_ROUTES.DASHBOARD.OFFERS,
            element: <OffersDashboardScreen />,
          },
          {
            path: SUB_ROUTES.DASHBOARD.SIZES,
            element: <SizesDashboardScreen />,
          },
          {
            path: SUB_ROUTES.DASHBOARD.BRANDS,
            element: <BrandDashboardScreen />,
          },
          {
            path: SUB_ROUTES.DASHBOARD.UNIQUE_PRODUCTS,
            element: <UniqueProductsDashboardScreen />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <h1>404 not found</h1>,
  },
]);
