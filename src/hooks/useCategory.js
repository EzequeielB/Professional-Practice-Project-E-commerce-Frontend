import { useState } from "react";
import { useSelector } from "react-redux";
import API from "../api/api";

export function useCategory() {
  const token = useSelector((state) => state.auth.token);
  const [error, setError] = useState(null);

  const authHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const list = async () => {
    try {
      const { data } = await API.get("/categories/list", authHeaders);
      return data.categories;
    } catch (err) {
      setError(err.response?.data?.error || "Error al listar categorías");
      return [];
    }
  };

  const getById = async (id) => {
    try {
      const { data } = await API.get(`/categories/${id}`, authHeaders);
      return data.category;
    } catch (err) {
      setError(err.response?.data?.error || "Error al obtener categoría");
      return null;
    }
  };

  const create = async (payload) => {
    try {
      const { data } = await API.post("/categories/create", payload, authHeaders);
      return data.category;
    } catch (err) {
      setError(err.response?.data?.error || "Error al crear categoría");
      return null;
    }
  };

  const update = async (id, payload) => {
    try {
      const { data } = await API.put(`/categories/update/${id}`, payload, authHeaders);
      return data.category;
    } catch (err) {
      setError(err.response?.data?.error || "Error al actualizar categoría");
      return null;
    }
  };

  const remove = async (id) => {
    try {
      const { data } = await API.delete(`/categories/delete/${id}`, authHeaders);
      return data.category;
    } catch (err) {
      setError(err.response?.data?.error || "Error al eliminar categoría");
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
