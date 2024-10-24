import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, FlatList, Animated } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

type customSelectoptionTyle = {
  options: { name: string; value: string }[];
  onValueChange: (value: string) => void;
  selectedValue: string;
  placeholder?: string;
  disable?: boolean;
};

export default function CustomSelectOption({ options, onValueChange, selectedValue, placeholder, disable = false }: customSelectoptionTyle) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isClearIconVisible, setClearIconVisible] = useState(!!selectedValue);
  const iconAnimation = useRef(new Animated.Value(0)).current;

  const handleOptionPress = (value: string) => {
    if (!disable) {
      onValueChange(value);
      setDropdownVisible(false);
    }
  };

  const handleClearSelection = () => {
    if (!disable) {
      onValueChange("");
      setClearIconVisible(false);
    }
  };

  // Animación entre la flecha y la "X"
  useEffect(() => {
    Animated.timing(iconAnimation, {
      toValue: isClearIconVisible ? 1 : 0, // Si hay valor seleccionado, mostrar "X"
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isClearIconVisible, iconAnimation]);

  // Cambiar el ícono si hay un valor seleccionado
  useEffect(() => {
    setClearIconVisible(!!selectedValue);
  }, [selectedValue]);

  const selectedLabel = options.find((option) => option.value === selectedValue)?.name;

  // Interpolaciones de animación
  const arrowOpacity = iconAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const clearOpacity = iconAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={{ zIndex: 1, opacity: disable ? 0.5 : 1 }}>
      {/* Main Select Box */}
      <TouchableOpacity
        onPress={() => {
          if (!disable) {
            setDropdownVisible(!isDropdownVisible);
          }
        }}
        style={{
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: disable ? "gray" : "lightgray",
          borderRadius: 8,
          paddingHorizontal: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: 50,
        }}
        disabled={disable}
      >
        <Text style={{ color: "black", fontSize: 16 }}>{selectedLabel || placeholder || "Selecciona una opción"}</Text>

        {/* Animación entre la flecha y la "X" */}
        <View style={{ position: "relative", width: 30, height: 30 }}>
          <Animated.View
            style={{ position: "absolute", opacity: arrowOpacity, justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}
          >
            <AntDesign name={isDropdownVisible ? "caretup" : "caretdown"} size={18} color="black" />
          </Animated.View>

          <Animated.View
            style={{ position: "absolute", opacity: clearOpacity, justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}
          >
            <TouchableOpacity onPress={handleClearSelection}>
              <Feather name="x-circle" size={20} color="black" />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </TouchableOpacity>

      {/* Dropdown */}
      {isDropdownVisible && !disable && (
        <View
          style={{
            position: "absolute",
            top: 60,
            width: "100%",
            backgroundColor: "white",
            borderRadius: 8,
            zIndex: 10,
          }}
        >
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleOptionPress(item.value)}
                style={{
                  padding: 12,
                  borderBottomWidth: 1,
                  borderBottomColor: "#f0f0f0",
                }}
              >
                <Text style={{ color: "black", fontSize: 16 }}>{item.name}</Text>
              </TouchableOpacity>
            )}
            ListFooterComponent={<View style={{ padding: 5 }} />}
          />
        </View>
      )}
    </View>
  );
}
