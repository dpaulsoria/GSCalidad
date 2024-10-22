import { View, Text } from "react-native";
import { db } from "@/db";
import { useEffect, useState } from "react";
import { useRootNavigationState, useRouter } from "expo-router";
import "react-native-gesture-handler";
import { syncWatermelon } from "@/worker";
import { initializeDatabasefromJson, loadInitialData } from "@/worker/Init";

export default function LoginScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const rootNavigationState = useRootNavigationState();
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  useEffect(() => {
    const checkFirstTime = async () => {
      try {
        const isFirstTime = await db.localStorage.get("isFirstTime") ?? "true";

        if (isFirstTime === "true") {
          // La primera vez que la app corre, inicializamos la DB desde JSON
          console.log(`[index] Is First Time!`)
          const initialData = loadInitialData();
          if (initialData) {
            await initializeDatabasefromJson(initialData);
            await db.localStorage.set("isFirstTime", "false");
          } else {
            await db.localStorage.set("isFirstTime", "true");
          }
          // Marcamos que ya no es la primera vez
        } else {
          console.log(`[index] Is NOT First Time!`)
          // No es la primera vez, sincroniza con el servidor
          await syncWatermelon();
        }
      } catch (error) {
        console.error("Error during initialization or sync:", error);
      }
    };

    checkFirstTime();
  }, []);
  const handleCorreo = (correo: string) => {
    setCorreo(correo);
  };
  const handleContraseña = (contraseña: string) => {
    setContraseña(contraseña);
  };
  useEffect(() => {
    if (rootNavigationState?.key && isLoggedIn === false) {
      // router.push("/(auth)/login");
      router.push("/(dashboard)/registros");
    }
  }, [isLoggedIn, rootNavigationState]);

  if (isLoggedIn === null) {
    return null; // Mientras se carga la información de sesión
  }
  return (
    <View>
      <Text>Hola</Text>
    </View>
  );
}
