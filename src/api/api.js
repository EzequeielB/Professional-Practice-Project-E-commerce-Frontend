import axios from "axios";
import dotenv from "dotenv"
dotenv.config();

const BASE_URL = process.env.BASE_URL;

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export default API;