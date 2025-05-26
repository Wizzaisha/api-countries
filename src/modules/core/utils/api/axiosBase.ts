import axios from "axios";
import { getEnvVariables } from "../env/getEnvVariables";

const { apiUrl } = getEnvVariables();
const axiosBase = axios.create({
  baseURL: `${apiUrl}`,
  headers: { "Content-Type": "application/json" },
});

// IMPORTANTE: PARA USAR EL dummyData.json NO puedes enviar token a la peticion PERO cuando se implemente el backend como tal DEBES quitar el comentario de abajo para enviar token a las peticiones.

// axiosBase.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         config.headers.Authorization = `Bearer ${token}`;
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// )

export default axiosBase;
