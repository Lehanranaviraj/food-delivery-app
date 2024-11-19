import axios from "axios";

const BASE_URL = "http://localhost:4000"; // Backend base URL

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
