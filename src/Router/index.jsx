import { createBrowserRouter } from "react-router";
import { RegisterScreen, DashboardScreen, LoginScreen, VerefyOTPscreen, ResetPasswordSceen, ChangePasswordScreen, HomeScreen, RolesDashboardScreen, UsersDashboardScreen, ProductsDashboardScreen, OffersDashboardScreen } from "../Pages";
import MainLayout from "../shared/components/layouts/MainLayout";
import DashboardLayout from "../shared/components/layouts/DashboardLayout/DashboardLayout";
import { ROUTES, SUB_ROUTES } from "./routesConfig";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: ROUTES.REGISTER, element: <RegisterScreen /> },
      { path: ROUTES.LOGIN, element: <LoginScreen /> },
      { path: ROUTES.RESET_PASSWORD, element:<ResetPasswordSceen/>},
      { path: ROUTES.VERIFY_OTP, element:<VerefyOTPscreen/>},
      { path: ROUTES.CHANGE_PASSWORD, element:<ChangePasswordScreen/>},
      { path: ROUTES.HOME, element:<HomeScreen/>},
    ],
  },

  {
    path: ROUTES.DASHBOARD,
    element: <DashboardLayout />,
    children: [
      { path: SUB_ROUTES.DASHBOARD.CATEGORIES, element: <DashboardScreen /> },
      { path: SUB_ROUTES.DASHBOARD.ROLES, element: <RolesDashboardScreen/> },
      { path: SUB_ROUTES.DASHBOARD.USERS, element: <UsersDashboardScreen /> },
      { path: SUB_ROUTES.DASHBOARD.PRODUCTS, element: <ProductsDashboardScreen /> },
      { path: SUB_ROUTES.DASHBOARD.OFFERS, element: <OffersDashboardScreen /> },
    ],
  },

  {
    path: '*',
    element: <h1>404 not found</h1>,
  },
]);
