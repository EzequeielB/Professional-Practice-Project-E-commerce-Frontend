import { useState } from "react";
import { useSelector } from "react-redux";
import API from "../api/api";

export function useProducts() {
  const token = useSelector((state) => state.auth.token);
  const [error, setError] = useState(null);

  const authHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const list = async () => {
    try {
      const { data } = await API.get("/products/list", authHeaders);
      console.log(data.products)
      return data.products;
    } catch (err) {
      setError(err.response?.data?.error || "Error al listar productos");
      return [];
    }
  };

  const getById = async (id) => {
    try {
      const { data } = await API.get(`/products/${id}`, authHeaders);
      return data.product;
    } catch (err) {
      setError(err.response?.data?.error || "Error al obtener producto");
      return null;
    }
  };

  const create = async (payload) => {
    try {
      const { data } = await API.post("/products/create", payload, authHeaders);
      return data.product;
    } catch (err) {
      setError(err.response?.data?.error || "Error al crear producto");
      return null;
    }
  };

  const update = async (id, payload) => {
    try {
      const { data } = await API.put(`/products/update/${id}`, payload, authHeaders);
      return data.product;
    } catch (err) {
      setError(err.response?.data?.error || "Error al actualizar producto");
      return null;
    }
  };

  const remove = async (id) => {
    try {
      const { data } = await API.delete(`/products/delete/${id}`, authHeaders);
      return data.product;
    } catch (err) {
      setError(err.response?.data?.error || "Error al eliminar producto");
      return null;
    }
  };

  return {
    list,
    getById,
    create,
    update,
    remove,
    error,
  };
}
