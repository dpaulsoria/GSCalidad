import { useEffect } from "react";
import BackgroundFetch from "react-native-background-fetch";
import { db } from "@/db";
import { API_URL, JWT_TOKEN } from "@env";
import { synchronize } from "@nozbe/watermelondb/sync";
import axios from "axios";
import { TablesToPush } from "@/model/TablesToPush";

const TAG = "[SyncWorker]";
const URL_BASE = "/api/usuarioExterno/control-calidad-off/exp"

export const syncWatermelon = async () => {
  await synchronize({
    database: db,
    pullChanges: async ({ lastPulledAt }) => {
      console.log(`${TAG} Pulling changes from server...`);
    
      try {
        console.log(`${TAG} [API_URL]=${API_URL} [JWT_TOKEN]=${JWT_TOKEN} [URL_BASE]=${URL_BASE}`)
        console.log(`${TAG} [PULLING]=${`${API_URL}${URL_BASE}/pull`}`)
        const response = await axios.get(`${API_URL}${URL_BASE}/pull`, {
          params: {
            lastPulledAt: lastPulledAt || 0
          },
          headers: {
            Authorization: `Bearer ${JWT_TOKEN}`
          }
        });
    
        if (response.status !== 200) {
          throw new Error("Failed to pull changes from server");
        }
        
        const { changes, timestamp } = response.data;
        console.log(`${TAG} response -> ${JSON.stringify(response.data.changes)}...`);
        console.log(`${TAG} response -> ${JSON.stringify(response.data.timestamp)}`);
        console.log(`${TAG} response -> ${JSON.stringify(response.data)}`);
    
        console.log("[SyncWorker] Changes pulled:", changes);
    
        return { changes, timestamp };
      } catch (error) {
        console.error("Error pulling changes from server:", error);
        throw error;  // Rethrow to ensure the caller knows about the error
      }
    },
    pushChanges: async (dataToPush) => {
      console.log(`${TAG} Pushing changes to server...`);
    
      const data = {};
      for (const table of TablesToPush) {
        if (dataToPush[table]) {
          data[table] = dataToPush[table]; // Solo incluir la tabla si tiene datos
        }
      }

      if (Object.keys(data).length === 0) {
        console.log(`${TAG} No data to push for the specified tables.`);
        return;
      }

      try {
        console.log(`${TAG} [API_URL]=${API_URL} [JWT_TOKEN]=${JWT_TOKEN} [URL_BASE]=${URL_BASE}`);
        console.log(`${TAG} [PUSHING]=${`${API_URL}${URL_BASE}/push`}`);
    
        const response = await axios.post(`${API_URL}${URL_BASE}/push`, data, {
          headers: {
            Authorization: `Bearer ${JWT_TOKEN}`,
          },
        });
    
        if (response.status !== 200) {
          throw new Error("Failed to push changes to server");
        }
    
        console.log(`${TAG} response -> ${JSON.stringify(response.data)}`);
        
        // Si hay un mensaje de éxito o confirmación, puedes manejarlo aquí
        console.log("[SyncWorker] Changes pushed successfully:", response.data);
    
        return response.data; // Puedes retornar la respuesta si necesitas usarla
      } catch (error) {
        console.error("Error pushing changes to server:", error);
        throw error;  // Rethrow to ensure the caller knows about the error
      }
    },    
    migrationsEnabledAtVersion: 1,
  });
};

export const SyncWorker = () => {
  useEffect(() => {
    const initializeBackgroundFetch = async () => {
      try {
        await BackgroundFetch.configure(
          {
            minimumFetchInterval: 15,
          },
          async (taskId) => {
            console.log("[SyncWorker] In progress...", taskId);
            try {
              await syncWatermelon();
            } catch (error) {
              console.error("[SyncWorker] Sync failed", error);
            }
            BackgroundFetch.finish(taskId);
          },
          (error) => {
            console.error("[SyncWorker] Error!", error);
          }
        );
      } catch (error) {
        console.error("Error configuring BackgroundFetch", error);
      }
    };

    initializeBackgroundFetch();

    return () => {
      BackgroundFetch.stop();
    };
  }, []);

  return null;
};