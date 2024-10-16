import { View, Text, Button } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";
import KeyBoardHandling from "@/ui/components/bottonSheet/KeyBoardHandling";

export default function HomeScreen({ navigation }) {
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Hello",
      text2: "This is some something 🔥",
    });
  };

  return (
    <View className="flex-1 bg-orange-300">
      <Text>Pantalla de Home</Text>
      <Button title="Ir al Perfil" onPress={showToast} />
      <Text className="p-3 bg-amber-300">Hola</Text>
      <KeyBoardHandling />
      <Toast />
    </View>
  );
}
