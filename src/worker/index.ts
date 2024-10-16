import { useEffect } from "react";
import BackgroundFetch from "react-native-background-fetch";
import { db, rc15Collection } from "@/db";
import { getUnsync } from "@/db/transactions/read";
import { synchronize } from "@nozbe/watermelondb/sync";

const SYNC_URL = "http://10.51.12.141:8000";

export const syncWatermelon = async () => {
  await synchronize({
    database: db,
    pullChanges: async ({ lastPulledAt }) => {
      console.log("[SyncWorker] Pulling changes from server...");
      const response = await fetch(
        `${SYNC_URL}/exp/pull?lastPulledAt=${lastPulledAt || 0}`
      );
      if (!response.ok) throw new Error("Failed to pull changes from server");
      const { changes, timestamp } = await response.json();
      console.log("[SyncWorker] Changes pulled:", changes);
      return { changes, timestamp };
    },
    // pushChanges: async ({ changes }) => {
    //   console.log("[SyncWorker] Pushing changes to server...");
    //   const response = await fetch(`${SYNC_URL}/exp-push`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ changes }),
    //   });
    //   if (!response.ok) {
    //     throw new Error("Failed to push changes to server");
    //   }
    // },
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