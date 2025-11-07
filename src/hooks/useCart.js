import { useState } from "react";
import { useSelector } from "react-redux";
import API from "../api/api";

export function useCart() {
  const token = useSelector((state) => state.auth.token);
  const [error, setError] = useState(null);

  const authHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const list = async () => {
    try {
      const { data } = await API.get("/cart/list", authHeaders);
      return data.carts;
    } catch (err) {
      setError(err.response?.data?.error || "Error al listar carritos");
      return [];
    }
  };

  const getById = async (id) => {
    try {
      const { data } = await API.get(`/cart/${id}`, authHeaders);
      return data.cart;
    } catch (err) {
      setError(err.response?.data?.error || "Error al obtener carrito");
      return null;
    }
  };

  const create = async (payload) => {
    try {
      const { data } = await API.post("/cart/create", payload, authHeaders);
      return data.cart;
    } catch (err) {
      setError(err.response?.data?.error || "Error al crear carrito");
      return null;
    }
  };

  const update = async (id, payload) => {
    try {
      const { data } = await API.put(`/cart/update/${id}`, payload, authHeaders);
      return data.cart;
    } catch (err) {
      setError(err.response?.data?.error || "Error al actualizar carrito");
      return null;
    }
  };

  const remove = async (id) => {
    try {
      const { data } = await API.delete(`/cart/delete/${id}`, authHeaders);
      return data.cart;
    } catch (err) {
      setError(err.response?.data?.error || "Error al eliminar carrito");
      return null;
    }
  };

 
  const removeItem = async (cartId, userId, items, uniqueProductId) => {
    try {
      const filteredItems = items.filter(
        (i) => i.id_uniqueProduct !== uniqueProductId
      );

      const { data } = await API.put(
        `/cart/update/${cartId}`,
        {
          user: userId,
          items: filteredItems,
        },
        authHeaders
      );

      return data.cart;
    } catch (err) {
      setError(err.response?.data?.error || "Error al eliminar item");
      return null;
    }
  };

  return {
    list,
    getById,
    create,
    update,
    remove,
    removeItem,
    error,
  };
}
