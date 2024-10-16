import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BackgroundFetch from "react-native-background-fetch";
import { sync } from "@/worker";
import { useRootNavigationState, Redirect, useRouter } from "expo-router";

export default function LoginScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const rootNavigationState = useRootNavigationState();

  useEffect(() => {
    // Configura BackgroundFetch
    BackgroundFetch.configure(
      { minimumFetchInterval: 15 },
      async (taskId) => {
        console.log("[SyncWorker] Done!", taskId);
        await sync();
        BackgroundFetch.finish(taskId);
      },
      (error) => {
        console.error("[SyncWorker] Error!", error);
      },
    );

    return () => {
      BackgroundFetch.stop();
    };
  }, []);

  useEffect(() => {
    if (rootNavigationState?.key && isLoggedIn === false) {
      router.push("/(auth)/login");
    }
  }, [isLoggedIn, rootNavigationState]);

  if (isLoggedIn === null) {
    return null; // Mientras se carga la información de sesión
  }

  return (
    <View className="h-screen flex justify-center items-center">
      <Text>Init Page</Text>
    </View>
  );
}
