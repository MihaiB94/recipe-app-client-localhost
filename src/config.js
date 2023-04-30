import axios from "axios";

export const axiosInstance = axios.create({
   baseURL: "https://recipe-app-api.onrender.com/server/"
});
