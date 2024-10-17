// CustomSelectOption.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, Pressable } from "react-native";

export default function CustomSelectOption({ options, onValueChange, selectedValue, placeholder }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOptionPress = (value) => {
    onValueChange(value);
    setModalVisible(false);
  };

  const selectedLabel = options.find((option) => option.value === selectedValue)?.label;

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="bg-white border border-gray-300 rounded-md px-4 py-2 flex-row justify-between items-center"
      >
        <Text className="text-black">{selectedLabel || placeholder || "Selecciona una opción"}</Text>
        <Text className="text-gray-500">{"\u25BC"}</Text>
      </TouchableOpacity>

      <Modal transparent={true} visible={modalVisible} animationType="fade" onRequestClose={() => setModalVisible(false)}>
        <Pressable style={{ flex: 1 }} onPress={() => setModalVisible(false)}>
          <View className="absolute top-1/4 left-4 right-4 bg-white shadow-lg rounded-lg p-4">
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleOptionPress(item.value)} className="py-2">
                  <Text className="text-black">{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
