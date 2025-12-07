import { useLocation, Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { ROUTES } from "../Router/routesConfig";

export function RequireAuth({ allowedRoles }) {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  const userRoles = auth?.decode?.roles || [];
  const hasAccess = allowedRoles?.some((role) => userRoles.includes(role));

  if (hasAccess) {
    return <Outlet />;
  }
  if (auth?.token) {
    return <Navigate to={ROUTES.HOME} state={{ from: location }} replace />;
  }
  return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
}

export default RequireAuth;
