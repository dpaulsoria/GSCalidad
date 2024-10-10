import React from "react";
import { Text, TextInput, View } from "react-native";

interface CustomInputTextProps {
  value: any;
  label: string;
  placeholder: string;
  onChange: () => void;
  className: string;
}

export default function CustomInputText({
  value,
  label,
  placeholder,
  onChange,
  className,
}: CustomInputTextProps) {
  return (
    <View className="mb-4">
      {label && <Text className="text-lg font-semibold mb-2">{label}</Text>}
      <TextInput
        placeholder={placeholder}
        className={className}
        onChangeText={onChange}
        value={value}
      ></TextInput>
    </View>
  );
}
