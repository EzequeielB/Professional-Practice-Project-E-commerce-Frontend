import { createBrowserRouter } from "react-router";
import { RegisterScreen, DashboardScreen, LoginScreen, VerefyOTPscreen, ResetPasswordSceen, ChangePasswordScreen, RolesDashboardScreen, UsersDashboardScreen, ProductsDashboardScreen, OffersDashboardScreen } from "../Pages";
import MainLayout from "../shared/components/layouts/MainLayout";
import DashboardLayout from "../shared/components/layouts/DashboardLayout/DashboardLayout";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'register', element: <RegisterScreen /> },
      { path: 'login', element: <LoginScreen /> },
      { path: 'resetPassword', element:<ResetPasswordSceen/>},
      { path: 'verefyOTP', element:<VerefyOTPscreen/>},
      { path: 'changePassword', element:<ChangePasswordScreen/>},
    ],
  },

  {
    path: '/gestionar',
    element: <DashboardLayout />,
    children: [
      { path: 'categorias', element: <DashboardScreen /> },
      { path: 'roles', element: <RolesDashboardScreen /> },
      { path: 'usuarios', element: <UsersDashboardScreen /> },
      { path: 'productos', element: <ProductsDashboardScreen /> },
      { path: 'ofertas', element: <OffersDashboardScreen /> },
    ],
  },

  {
    path: '*',
    element: <h1>404 not found</h1>,
  },
]);
