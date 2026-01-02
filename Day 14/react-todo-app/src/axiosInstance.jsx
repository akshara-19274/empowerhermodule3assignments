import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Public Todos API
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;