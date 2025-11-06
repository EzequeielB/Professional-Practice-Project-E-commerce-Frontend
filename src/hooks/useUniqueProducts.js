import { useState } from "react";
import { useSelector } from "react-redux";
import API from "../api/api";

export function useUniqueProducts() {
  const token = useSelector((state) => state.auth.token);
  const [error, setError] = useState(null);

  const authHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const list = async () => {
    try {
      const { data } = await API.get("/unique-product/list", authHeaders);
      return data.unique_products; 
    } catch (err) {
      setError(err.response?.data?.error || "Error al listar productos únicos");
      return [];
    }
  };

  const getById = async (id) => {
    try {
      const { data } = await API.get(`/unique-product/${id}`, authHeaders);
      return data.unique_product; 
    } catch (err) {
      setError(err.response?.data?.error || "Error al obtener producto único");
      return null;
    }
  };

  const create = async (payload) => {
    try {
      const { data } = await API.post("/unique-product/create", payload, authHeaders);
      return data.unique_product;
    } catch (err) {
      setError(err.response?.data?.error || "Error al crear producto único");
      return null;
    }
  };

  const update = async (id, payload) => {
    try {
      const { data } = await API.put(`/unique-product/update/${id}`, payload, authHeaders);
      return data.unique_product; 
    } catch (err) {
      setError(err.response?.data?.error || "Error al actualizar producto único");
      return null;
    }
  };

  const remove = async (id) => {
    try {
      const { data } = await API.delete(`/unique-product/delete/${id}`, authHeaders);
      return data.unique_product; 
    } catch (err) {
      setError(err.response?.data?.error || "Error al eliminar producto único");
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
