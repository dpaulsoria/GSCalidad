import { useEffect } from "react";
import BackgroundFetch from "react-native-background-fetch";
import { db } from "@/db";
import { synchronize } from "@nozbe/watermelondb/sync";
import { TablesToPush } from "@/model/TablesToPush";
import ApiService from "@/service/Api";

const TAG = "[SyncWorker]";
const URL_BASE = "/api/usuarioExterno/control-calidad-off/exp"


export const syncWatermelon = async () => {
  await synchronize({
    database: db,
    pullChanges: async ({ lastPulledAt }) => {
      console.log(`${TAG} Pulling changes from server...`);

      try {
        console.log(`${TAG}`, `${URL_BASE}/pull`)
        const response = await ApiService.pull(`${URL_BASE}/pull`, lastPulledAt);
        // console.log(`${TAG} Response:`, `${JSON.stringify(response ?? 'd').slice(0, 10)}`);
        
        // Check if the changes or timestamp is undefined or null
        const { changes, timestamp } = response.data;
        console.log(`test ${response.data.changes}`);
        console.log(`Type of changes: ${typeof changes}, Value: ${JSON.stringify(changes ?? 'd').slice(0, 10)}`);
        console.log(`Type of timestamp: ${typeof timestamp}, Value: ${timestamp ?? 'd'}`);

        if (changes == null || timestamp == null) {
          console.log(`${TAG} Error: Either changes or timestamp is missing`);
          return;  // Exit early if any of the values are invalid
        }
        
        console.log(`${TAG} response -> ${JSON.stringify(changes ?? 'd').slice(0, 10)}`);
        console.log(`${TAG} response -> ${JSON.stringify(timestamp) ?? 'd'}`);
        console.log("[SyncWorker] Changes pulled:", changes);

        return { changes, timestamp };
      } catch (error) {
        console.error("Error pulling changes from server:", error);
        throw error; // Rethrow to ensure the caller knows about the error
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
        const response = await ApiService.push(`${URL_BASE}/push`, data);
        console.log(`${TAG} response -> ${JSON.stringify(response)}`);
        console.log("[SyncWorker] Changes pushed successfully:", response);

        return response; // Puedes retornar la respuesta si necesitas usarla
      } catch (error) {
        console.error("Error pushing changes to server:", error);
        throw error; // Rethrow to ensure the caller knows about the error
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