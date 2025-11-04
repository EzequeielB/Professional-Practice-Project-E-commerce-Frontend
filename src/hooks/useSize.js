// src/hooks/useSize.js
import { useState } from "react";
import { useSelector } from "react-redux";
import API from "../api/api";

export function useSize() {
  const token = useSelector((state) => state.auth.token);
  const [error, setError] = useState(null);

  const authHeaders = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const list = async () => {
    try {
      const { data } = await API.get("/sizes/list", authHeaders);
      return data.sizes;
    } catch (err) {
      setError(err.response?.data?.error || "Error al listar talles");
      return [];
    }
  };

  const create = async (payload) => {
    try {
      const { data } = await API.post("/sizes/create", payload, authHeaders);
      return data.size;
    } catch (err) {
      console.error("Error al crear talle:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Error al crear talle");
      return null;
    }
  };

  const update = async (id, payload) => {
    try {
      const { data } = await API.put(`/sizes/update/${id}`, payload, authHeaders);
      return data.size;
    } catch (err) {
      console.error("Error al actualizar talle:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Error al actualizar talle");
      return null;
    }
  };

  const remove = async (id) => {
    try {
      const { data } = await API.delete(`/sizes/delete/${id}`, authHeaders);
      return data.size;
    } catch (err) {
      console.error("Error al eliminar talle:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Error al eliminar talle");
      return null;
    }
  };

  return { list, create, update, remove, error };
}
