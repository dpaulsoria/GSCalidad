import axios, { AxiosInstance } from "axios";
import { API_URL, JWT_TOKEN } from "@env"; // Asegúrate de que estas variables están configuradas en tu .env

class ApiService {
  private apiClient: AxiosInstance;

  constructor(baseURL: string = API_URL) {
    console.log("[net] Initializing ApiService with baseURL:", baseURL);

    this.apiClient = axios.create({
      maxContentLength: 50 * 1024 * 1024,
      baseURL, // Establece la base URL
      // transformResponse: (data) => {
      //   try {
      //     return JSON.parse(data);
      //   } catch (error) {
      //     console.error("[net] JSON parsing error:", error.message);
      //     // console.error("[net] Response data received:", data);
      //     console.error("[net] Stack trace:", error.stack);
      //     throw new Error("Invalid JSON format received from server");
      //   }
      // },
    });

    // Interceptor para agregar el token a las solicitudes
    this.apiClient.interceptors.request.use(
      (config) => {
        console.log("[net] Preparing request to:", config.url);

        if (JWT_TOKEN) {
          config.headers["Authorization"] = `Bearer ${JWT_TOKEN}`;
          config.headers["Cache-Control"] = "no-cache, private";
          config.headers["Content-Type"] = "application/json";
          config.headers["Accept"] = "application/json, text/plain, */*";
          config.headers["Accept-Encoding"] = "gzip, deflate";
          console.log("[net] Added JWT token to headers");
        } else {
          console.warn("[net] JWT token not found");
        }

        return config;
      },
      (error) => {
        console.error("[net] Request error:", error);
        return Promise.reject(error);
      }
    );
  }

  // Método para realizar un pull
  public async pull(url: string, lastPulledAt: number = 0): Promise<any> {
    console.log(
      `[net] Initiating pull request to: ${url} with lastPulledAt: ${lastPulledAt}`
    );

    try {
      const response = await this.apiClient.get(url, {
        params: {
          lastPulledAt,
        },
      });

      console.log(`[net] Header ${response.headers['content-type']??';'} ${response.headers['Content-Type']??';'}`)
      console.log(`[net] Received data ${typeof response.data}`)
      console.log(
        `[net] Received response from pull request. Status: ${response.data.status}`
      );

      if (response.status !== 200 || response.data.status !== '1') {
        console.error(
          "[net] Failed to pull changes. Status code:",
          response.status
        );
        throw new Error("Failed to pull changes from server");
      }
      console.log(`[net]`, `Typeof Data ${typeof response.data}`)
      return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
      console.error("[net] Error pulling changes from server:", error);
      throw error; // Lanza el error para que lo maneje quien llame a la función
    }
  }

  // Método para realizar un push
  public async push(url: string, dataToPush: object) {
    console.log(
      `[net] Initiating push request to: ${url} with data:`,
      JSON.stringify(dataToPush)
    );

    try {
      const response = await this.apiClient.post(url, dataToPush);

      console.log(
        `[net] Received response from push request. Status: ${response.status}`
      );

      if (response.status !== 200) {
        console.error(
          "[net] Failed to push changes. Status code:",
          response.status
        );
        throw new Error("Failed to push changes to server");
      }

      console.log("[net] Push successful:", response.data);
      return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
      console.error("[net] Error pushing changes to server:", error);
      throw error; // Lanza el error para que lo maneje quien llame a la función
    }
  }
}

export default new ApiService(); // Exporta una instancia de ApiService
