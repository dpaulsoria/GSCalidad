import { sync } from "@/worker";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import BackgroundFetch from "react-native-background-fetch";

const HomeScreen = () => {
  useEffect(() => {
    BackgroundFetch.configure(
      {
        minimumFetchInterval: 15,
      },
      async (taskId) => {
        console.log("[SyncWorker] Done!", taskId);
        await sync();
        BackgroundFetch.finish(taskId);
      },
      (error) => {
        console.error("[SyncWorker] Error!", error);
      }
    );
    return () => {
      BackgroundFetch.stop();
    };
  }, []);
  return <Redirect href={"/allocations"} />;
};

export default HomeScreen;
