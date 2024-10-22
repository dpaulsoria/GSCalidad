import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Corrección en la importación
import { LinearGradient } from "expo-linear-gradient";
import { styled } from "nativewind";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// Si `styled` causa problemas, puedes omitir esta línea y aplicar estilos directamente
const StyledLinearGradient = styled(LinearGradient);

export const ToastConfig = {
  success: (props) => (
    <View className="flex-row h-14 w-4/5 bg-primary-light rounded-lg">
      {/* <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]} style={{ justifyContent: "center", alignItems: "center", padding: 10 }}>
        <Text className="text-white text-lg font-bold">Fondo Degradado</Text>
      </LinearGradient> */}
      <View className="px-3 pt-1.5">
        <AntDesign name="checkcircleo" size={20} color="#2DD4BF" />
      </View>
      <View className="pt-1.5">
        <Text className="text-secondary-light font-semibold">{props.text1}</Text>
        <Text className="text-secondary-light">{props.text2}</Text>
      </View>
    </View>
  ),
  error: (props) => (
    <View className="flex-row h-14 w-4/5 bg-primary-light rounded-lg">
      {/* <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]} style={{ justifyContent: "center", alignItems: "center", padding: 10 }}>
        <Text className="text-white text-lg font-bold">Fondo Degradado</Text>
      </LinearGradient> */}
      <View className="px-3 pt-1.5">
        <MaterialIcons name="error-outline" size={20} color="#FF5252" />
      </View>
      <View className="pt-1.5">
        <Text className="text-secondary-light font-semibold">{props.text1}</Text>
        <Text className="text-secondary-light">{props.text2}</Text>
      </View>
    </View>
  ),
  warning: (props) => (
    <View className="flex-row h-14 w-4/5 bg-primary-light rounded-lg">
      {/* <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]} style={{ justifyContent: "center", alignItems: "center", padding: 10 }}>
        <Text className="text-white text-lg font-bold">Fondo Degradado</Text>
      </LinearGradient> */}
      <View className="px-3 pt-1.5">
        <AntDesign name="warning" size={20} color="#FFC107" />
      </View>
      <View className="pt-1.5">
        <Text className="text-secondary-light font-semibold">{props.text1}</Text>
        <Text className="text-secondary-light">{props.text2}</Text>
      </View>
    </View>
  ),
};
