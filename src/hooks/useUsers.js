import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginAction, logoutAction } from "../redux/features/auth/authSlice";
import API from "../api/api";

export function useUsers() {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const register = async (payload) => {
    try {
      await API.post("/users/register", payload);
      return true;
    } catch (err) {
      setError(err.response?.data?.error || "Error al registrarse");
      return false;
    }
  };

  const login = async (credentials) => {
    try {
      const { data } = await API.post("/users/login", credentials);
      dispatch(loginAction(data.token));
      return data.user;
    } catch (err) {
      setError(err.response?.data?.error || "Error al iniciar sesión");
      return null;
    }
  };

  return {
    register,
    login,
    error,
  };
}
