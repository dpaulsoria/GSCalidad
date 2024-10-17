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
    <View>
      {options.map((option) => (
        <RadioButton key={option.value} label={option.label} value={option.value} selected={option.value === selectedValue} onPress={handlePress} />
      ))}
    </View>
  );
}
function RadioButton({ label, value, selected, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(value)} className="flex-row items-center mb-2">
      <View className={`w-5 h-5 rounded-full border-2 border-blue-500 items-center justify-center mr-2 ${selected ? "bg-blue-500" : "bg-white"}`}>
        {selected && <View className="w-2 h-2 rounded-full bg-white" />}
      </View>
      <Text className="text-black">{label}</Text>
    </TouchableOpacity>
  );
}
