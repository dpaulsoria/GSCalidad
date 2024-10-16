import React from "react";
import { Button, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const ReanimatedTest = () => {
  const translateX = useSharedValue(0); // Valor compartido para la animación

  // Definir el estilo animado
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  // Función para iniciar la animación
  const startAnimation = () => {
    translateX.value = withTiming(translateX.value === 0 ? 200 : 0, {
      duration: 500,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: "blue",
          },
          animatedStyle,
        ]}
      />
      <Button title="Move Box" onPress={startAnimation} />
    </View>
  );
};

export default ReanimatedTest;
