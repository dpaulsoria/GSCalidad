import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import FloatingLabelInput from "@/ui/components/floatInputText";
import { SafeAreaView } from "react-native";
import Svg, { Path } from "react-native-svg";
import BackgroundFetch from "react-native-background-fetch";
import { sync } from "@/worker";
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
      <View className=" relative h-2/5 bg-body-dark justify-center items-center">
        <Image source={require("../../assets/images/logoSPnslogan.png")} className=" rounded-full" style={{ width: "50%", height: "50%" }} />
        <View className="w-full absolute bottom-0">
          <Svg height="100" width="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <Path
              fill="#f8fafc" // Color blanco para la parte superior
              d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,181.3C672,181,768,171,864,176C960,181,1056,203,1152,192C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </Svg>
        </View>
      </View>
      {/* Parte inferior con inputs */}
      <View className="h-3/5 px-4 pt-8  gap-12  ">
        <Text className="text-xl font-semibold text-center text-gray-800 ">Bienvenidos a la App Salem</Text>
        <View className="flex gap-y-5">
          {/* Input de correo */}
          <View className="">
            <SafeAreaView className="">
              <FloatingLabelInput label="Correo Salem" value={""} onChangeText={handleCorreo} />
            </SafeAreaView>
          </View>
          {/* Input de contraseña */}
          <View className=" ">
            <SafeAreaView className="">
              <FloatingLabelInput label="Contraseña" value={""} onChangeText={handleContraseña} />
            </SafeAreaView>
          </View>
        </View>
        {/* Botón de Iniciar Sesión */}
        <TouchableOpacity className="  h-12 bg-table-header-dark rounded-lg justify-center items-center">
          <Text className="text-white text-lg font-semibold">Iniciar Sesión</Text>
        </TouchableOpacity>
        {/* Texto de "Olvidé mi contraseña" */}
      </View>
    </View>
  );
}
