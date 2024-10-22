import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Corrección en la importación
import { LinearGradient } from "expo-linear-gradient";
import { styled } from "nativewind";

// Si `styled` causa problemas, puedes omitir esta línea y aplicar estilos directamente
const StyledLinearGradient = styled(LinearGradient);

export const ToastConfig = {
  success: (props) => (
    <View className="flex-row h-14 w-4/5 bg-primary-light rounded-lg">
      {/* Si `StyledLinearGradient` causa problemas, usa `LinearGradient` directamente */}
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
    <View
      style={{
        height: 60,
        width: "100%",
        backgroundColor: "#dc3545",
        justifyContent: "center",
        paddingHorizontal: 15,
      }}
    >
      <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>{props.text1}</Text>
      <Text style={{ color: "white", fontSize: 14 }}>{props.text2}</Text>
    </View>
  ),
};
