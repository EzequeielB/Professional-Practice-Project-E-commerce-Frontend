import { useState } from "react";
import { useSelector } from "react-redux";
import API from "../api/api";

export function useBrand() {
  const token = useSelector((state) => state.auth.token);
  const [error, setError] = useState(null);

  const authHeaders = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const listBrand = async () => {
    try {
      const { data } = await API.get("/brands/list", authHeaders);
      return data.brands;
    } catch (err) {
      setError(err.response?.data?.error || "Error al listar talles");
      return [];
    }
  };

  const create = async (payload) => {
    try {
      const { data } = await API.post("/brands/create", payload, authHeaders);
      return data.brand;
    } catch (err) {
      console.error("Error al crear talle:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Error al crear talle");
      return null;
    }
  };

  const update = async (id, payload) => {
    try {
      const { data } = await API.put(`/brands/update/${id}`, payload, authHeaders);
      return data.brand;
    } catch (err) {
      console.error("Error al actualizar talle:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Error al actualizar talle");
      return null;
    }
  };

  const remove = async (id) => {
    try {
      const { data } = await API.delete(`/brands/delete/${id}`, authHeaders);
      return data.brand;
    } catch (err) {
      console.error("Error al eliminar talle:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Error al eliminar talle");
      return null;
    }
  };

  return { listBrand, create, update, remove, error };
}
