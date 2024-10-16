import axios, { AxiosInstance } from 'axios';
import { API_URL, JWT_TOKEN } from "@env"; // Asegúrate de que estas variables están configuradas en tu .env

class ApiService {
  private apiClient: AxiosInstance;

  constructor(baseURL: string = API_URL) {
    this.apiClient = axios.create({
      baseURL, // Establece la base URL
    });

    // Interceptor para agregar el token a las solicitudes
    this.apiClient.interceptors.request.use(
      (config) => {
        if (JWT_TOKEN) {
          config.headers.Authorization = `Bearer ${JWT_TOKEN}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  // Método para realizar un pull
  public async pull(url: string, lastPulledAt: number = 0) {
    try {
      const response = await this.apiClient.get(url, {
        params: {
          lastPulledAt,
        },
      });

      if (response.status !== 200) {
        throw new Error("Failed to pull changes from server");
      }

      return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
      console.error("Error pulling changes from server:", error);
      throw error; // Lanza el error para que lo maneje quien llame a la función
    }
  }

  // Método para realizar un push
  public async push(url: string, dataToPush: object) {
    try {
      const response = await this.apiClient.post(url, dataToPush);

      if (response.status !== 200) {
        throw new Error("Failed to push changes to server");
      }

      return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
      console.error("Error pushing changes to server:", error);
      throw error; // Lanza el error para que lo maneje quien llame a la función
    }
  }
}

export default new ApiService(); // Exporta una instancia de ApiService
