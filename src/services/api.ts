import axios from "axios";

// Configurar baseURL baseado no ambiente
const baseURL = typeof window !== "undefined" 
  ? (process.env.NODE_ENV === "development" ? "" : window.location.origin)
  : "";

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para tratamento de erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Erro da API
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Erro de rede
      return Promise.reject({ error: "Erro de conexão com o servidor" });
    } else {
      // Outro erro
      return Promise.reject({ error: error.message });
    }
  }
);
