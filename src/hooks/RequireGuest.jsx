import { useLocation, Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { ROUTES } from "../Router/routesConfig";

export function RequireGuest() {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  if (auth?.token) {
    return (
      <Navigate
        to={location.state?.from?.pathname || ROUTES.HOME}
        replace
      />
    );
  }

  return <Outlet />;
}

export default RequireGuest;
