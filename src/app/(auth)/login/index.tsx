import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import FloatingLabelInput from "@/ui/components/floatInputText";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import BackgroundFetch from "react-native-background-fetch";
import { sync } from "@/worker";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen() {
  const [correo, setCorreo] = React.useState("");
  const [contraseña, setContraseña] = React.useState("");

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
      },
    );
    return () => {
      BackgroundFetch.stop();
    };
  }, []);

  const handleCorreo = (correo: string) => {
    setCorreo(correo);
  };
  const handleContraseña = (contraseña: string) => {
    setContraseña(contraseña);
  };

  return (
    <View className="h-screen">
      {/* Parte superior con imagen */}
      <StatusBar style="light" backgroundColor="#161d31" translucent={false} />

      <SafeAreaView
        edges={["left", "right", "bottom"]}
        style={{ flex: 1, backgroundColor: "#161d31" }}
        className="relative h-2/5 bg-body-dark justify-center items-center"
      >
        <Image source={require("@assets/images/logoSPnslogan.png")} className="rounded-full" style={{ width: "50%", height: "50%" }} />
        <View className="w-full absolute bottom-0">
          <Svg height="100" width="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <Path
              fill="#f8fafc"
              d="M0,64 C120,90 240,120 360,110 C480,100 600,60 720,80 
       C840,100 960,150 1080,140 C1200,130 1320,70 1440,160 
       L1440,320 L0,320 Z"
            />
          </Svg>
        </View>
      </SafeAreaView>
      {/* Parte inferior con inputs */}
      <View className="h-3/5 px-4 pt-8 gap-12">
        <Text className="text-xl font-semibold text-center text-gray-800">Bienvenidos a la App Salem</Text>
        <View className="flex gap-y-5">
          {/* Input de correo */}
          <View>
            <FloatingLabelInput label="Correo Salem" value={correo} onChangeText={handleCorreo} />
          </View>
          {/* Input de contraseña */}
          <View>
            <FloatingLabelInput label="Contraseña" value={contraseña} onChangeText={handleContraseña} />
          </View>
        </View>
        {/* Botón de Iniciar Sesión */}
        <TouchableOpacity className="h-12 bg-table-header-dark rounded-lg justify-center items-center">
          <Text className="text-white text-lg font-semibold">Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
