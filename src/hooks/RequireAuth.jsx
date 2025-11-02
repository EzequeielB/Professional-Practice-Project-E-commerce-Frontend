import { useLocation, Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { ROUTES } from "../Router/routesConfig";

export function RequireAuth({ allowedRoles }) {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();
  return(
    auth?.decode.roles?.find((role) => allowedRoles?.includes(role)) 
      ? <Outlet />
      : auth?.token
          ? <Navigate to="/" state={{from:location}} replace/> 
          : <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
  )
}

export default RequireAuth;
