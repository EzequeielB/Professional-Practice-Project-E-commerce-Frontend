import { createBrowserRouter } from "react-router";
import { RegisterScreen, DashboardScreen, LoginScreen, VerefyOTPscreen, ResetPasswordSceen, ChangePasswordScreen, RolesDashboardScreen } from "../Pages";
import MainLayout from "../shared/components/layouts/MainLayout";
import DashboardLayout from "../features/dashboard/DashboardLayout"

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
    path: '/categorias/gestionar',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardScreen /> },
      { path: 'Roles', element: <RolesDashboardScreen /> },
    ],
  },

  {
    path: '*',
    element: <h1>404 not found</h1>,
  },
]);
