import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { useRootNavigationState, useRouter } from "expo-router";
import "react-native-gesture-handler";

import { syncWatermelon } from "@/worker";
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
