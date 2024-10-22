import { View, Text } from "react-native";
import { db } from "@/db";
import { useEffect, useState } from "react";
import { useRootNavigationState, useRouter } from "expo-router";
import "react-native-gesture-handler";
import { syncWatermelon } from "@/worker";
import { initializeDatabasefromJson, loadInitialData } from "@/worker/Init";
import { useUtilStore } from "@/store/util/store";

export default function LoginScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const rootNavigationState = useRootNavigationState();
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const { loadVSelectLists } = useUtilStore(); // Extraer la función de cargar listas

  useEffect(() => {
    const checkFirstTime = async () => {
      try {
        const isFirstTime = (await db.localStorage.get("isFirstTime")) ?? "true";

        if (isFirstTime === "true") {
          console.log(`[index] Is First Time!`);
          const initialData = loadInitialData();
          if (initialData) {
            await initializeDatabasefromJson(initialData);
            await db.localStorage.set("isFirstTime", "false");
          } else {
            await db.localStorage.set("isFirstTime", "true");
          }
        } else {
          console.log(`[index] Is NOT First Time!`);
          await syncWatermelon();
        }

        // Aquí llamamos al método para cargar las listas de selección
        await loadVSelectLists();
        console.log("Las listas de selección han sido cargadas.");
      } catch (error) {
        console.error("Error during initialization or sync:", error);
      }
    };

    checkFirstTime();
  }, [loadVSelectLists]);

  useEffect(() => {
    if (rootNavigationState?.key && isLoggedIn === false) {
      router.push("/(dashboard)/registros");
    }
  }, [isLoggedIn, rootNavigationState]);

  if (isLoggedIn === null) {
    return null;
  }

  return (
    <View>
      <Text>Hola</Text>
    </View>
  );
}
