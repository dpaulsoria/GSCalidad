import { View, Text, LogBox } from "react-native";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BackgroundFetch from "react-native-background-fetch";
import { useRootNavigationState, useRouter } from "expo-router";

import { syncWatermelon } from "@/worker";
import ReanimatedTest from "@/test/Reanimated";

// Ignore specific logs if necessary
LogBox.ignoreLogs(['Warning: ...']); // Puedes ajustar este mensaje según lo que quieras ignorar

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.warn('Unhandled promise rejection:', reason);
});

export default function LoginScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const rootNavigationState = useRootNavigationState();
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  useEffect(() => {
    syncWatermelon();
  }, []);

  const handleCorreo = (correo: string) => {
    setCorreo(correo);
  };

  const handleContraseña = (contraseña: string) => {
    setContraseña(contraseña);
  };

  useEffect(() => {
    if (rootNavigationState?.key && isLoggedIn === false) {
      router.push("/(auth)/login");
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
