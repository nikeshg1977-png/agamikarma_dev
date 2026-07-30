import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7024/api",
});

export default api;