import { VSelectOption } from "@/store/util/store";
import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, FlatList, Animated } from "react-native";

type customSelectoptionTyle = {
  options: VSelectOption[];
  onValueChange: (value: string) => void;
  selectedValue: string;
  placeholder?: string;
  disable?: boolean;
};

export default function CustomSelectOption({
  options,
  onValueChange,
  selectedValue,
  placeholder,
  disable = false,
}: customSelectoptionTyle) {
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

  const selectedLabel = options.find(
    option => option.value === selectedValue
  )?.name;

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
        className={`bg-white border ${
          disable ? "border-gray-400" : "border-gray-300"
        } rounded-md px-4 py-2 flex-row justify-between items-center`}
        disabled={disable}
      >
        <Text className="text-black">
          {selectedLabel || placeholder || "Selecciona una opción"}
        </Text>

        {/* Animación entre la flecha y la "X" */}
        <View>
          <Animated.View
            style={{ position: "absolute", opacity: arrowOpacity }}
          ></Animated.View>

          <Animated.View
            style={{ position: "absolute", opacity: clearOpacity }}
          >
            <TouchableOpacity onPress={handleClearSelection}>
              <Text className="text-gray-500">{"\u2715"}</Text>{" "}
              {/* "X" para borrar */}
            </TouchableOpacity>
          </Animated.View>
        </View>
      </TouchableOpacity>

      {/* Dropdown */}
      {isDropdownVisible && !disable && (
        <View className="absolute w-full self-center top-9 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg z-10">
          <FlatList
            data={options}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleOptionPress(item.value.toString())}
                className="py-2 px-4"
              >
                <Text className="text-black">{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}
