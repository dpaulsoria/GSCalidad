import { useEffect } from "react";
import BackgroundFetch from "react-native-background-fetch";
import { db } from "@/db";
import { synchronize } from "@nozbe/watermelondb/sync";
import { TablesToPush } from "@/model/TablesToPush";
import ApiService from "@/service/Api";

const TAG = "[SyncWorker]";
const URL_BASE = "/api/usuarioExterno/control-calidad-off/exp";
export const syncWatermelon = async (localData = null) => {
  await synchronize({
    database: db,
    pullChanges: async ({ lastPulledAt }) => {
      if (localData) {
        console.log("Pulling changes from local JSON...");
        try {
          const { changes, timestamp } = localData;
          if (!changes || !timestamp) {
            console.log("Error: Missing changes or timestamp in local data.");
            return;
          }
          // Actualiza lastPulledAt con el timestamp del JSON
          return { changes, timestamp };
        } catch (error) {
          console.error("Error pulling changes from local data:", error);
          throw error;
        }
      } else {
        console.log("Pulling changes from server...");
        try {
          const response = await ApiService.pull(
            `${URL_BASE}/pull`,
            lastPulledAt
          );
          const { changes, timestamp } = response;
          if (!changes || !timestamp) {
            console.log("Error: Missing changes or timestamp from server.");
            return;
          }
          return { changes, timestamp };
        } catch (error) {
          console.error("Error pulling changes from server:", error);
          throw error;
        }
      }
    },
    pushChanges: async (dataToPush) => {
      console.log("Pushing changes to server...");
      const data = {};
      for (const table of TablesToPush) {
        if (dataToPush[table]) {
          data[table] = dataToPush[table];
        }
      }
      if (Object.keys(data).length === 0) {
        console.log("No data to push for the specified tables.");
        return;
      }
      try {
        const response = await ApiService.push(`${URL_BASE}/push`, data);
        console.log("Changes pushed successfully:", response);
        return response;
      } catch (error) {
        console.error("Error pushing changes to server:", error);
        throw error;
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
