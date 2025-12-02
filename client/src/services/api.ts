import axios from "axios";

// Configurar baseURL baseado no ambiente
// Em desenvolvimento, usa localhost
// Em produção na Vercel, usa a mesma origem
const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"
    : typeof window !== "undefined"
    ? window.location.origin
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

