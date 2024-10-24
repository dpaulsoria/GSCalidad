// RadioButton.js
import { TouchableOpacity, View, Text } from "react-native";
// RadioButtonGroup.js
import { useState } from "react";

export default function RadioButtonGroup({ options, onValueChange }) {
  const [selectedValue, setSelectedValue] = useState(null);

  const handlePress = (value) => {
    setSelectedValue(value);
    onValueChange(value);
  };

  return (
    <View className="flex flex-wrap flex-row justify-between">
      {options.map((option) => (
        <RadioButton key={option.value} label={option.name} value={option.value} selected={option.value === selectedValue} onPress={handlePress} />
      ))}
    </View>
  );
}
function RadioButton({ label, value, selected, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(value)} className="flex-row items-center mb-2">
      <View className={`px-2 py-0.5 rounded-lg items-center justify-center  ${selected ? "bg-blue-500" : "bg-white"}`}>
        <Text className={`${selected ? "text-white" : "text-black"}`}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
