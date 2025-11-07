import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../redux/features/auth/authSlice";
import { setCart, clearCart } from "../redux/features/cart/cartSlice";
import API from "../api/api";

export function useUsers() {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const auth = useSelector((state) => state.auth);
  const persistedCartOwner = useSelector((state) => state.cart.ownerId);

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
     
      dispatch(clearCart());

      const { data } = await API.post("/users/login", credentials);
      dispatch(loginAction(data.token));

    
      const cartRes = await API.get(`/cart/user/${data.user.id}`, {
        headers: { Authorization: `Bearer ${data.token}` },
      });

      const cartFromBackend = cartRes.data?.cart || null;

      if (cartFromBackend) {
        dispatch(setCart(cartFromBackend));
      } else {
        dispatch(clearCart());
      }

      return data.user;
    } catch (err) {
      setError(err.response?.data?.error || "Error al iniciar sesión");
      return null;
    }
  };

  const logout = () => {
    dispatch(logoutAction());
    dispatch(clearCart());
  };

  useEffect(() => {
    const syncCartOnRehydrate = async () => {
      try {
        const token = auth?.token;
        const decoded = auth?.decode;
        const userId = decoded?.id;

        if (!token || !userId) return;

        const cartRes = await API.get(`/cart/user/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const cartFromBackend = cartRes.data?.cart || null;

        if (persistedCartOwner && persistedCartOwner !== userId) {
          dispatch(clearCart());
        }

        if (cartFromBackend) {
          dispatch(setCart(cartFromBackend));
        } else {
          dispatch(clearCart());
        }
      } catch {
        dispatch(clearCart());
      }
    };

    syncCartOnRehydrate();

  }, [auth?.token]); 

  return { register, login, logout, error };
}
