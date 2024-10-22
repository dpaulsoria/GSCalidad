// CustomSelectOption.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

export default function CustomSelectOption({ options, onValueChange, selectedValue, placeholder }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleOptionPress = (value) => {
    onValueChange(value);
    setDropdownVisible(false);
  };

  const selectedLabel = options.find((option) => option.value === selectedValue)?.label;

  return (
    <View style={{ zIndex: 1 }}>
      {/* Main Select Box */}
      <TouchableOpacity
        onPress={() => setDropdownVisible(!isDropdownVisible)}
        className="bg-white border border-gray-300 rounded-md px-4 py-2 flex-row justify-between items-center"
      >
        <Text className="text-black">{selectedLabel || placeholder || "Selecciona una opción"}</Text>
        <Text className="text-gray-500">{"\u25BC"}</Text>
      </TouchableOpacity>

      {/* Dropdown */}
      {isDropdownVisible && (
        <View className="absolute w-full self-center top-9 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg z-10">
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleOptionPress(item.value)} className="py-2 px-4">
                <Text className="text-black">{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}
