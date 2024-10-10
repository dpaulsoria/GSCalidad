import React from "react";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";

interface CustomInputTextProps {
  value: any;
  label?: string | null;
  placeholder: string;
  onChange: (text: string) => void;
  className: string;
  keyboardType?: KeyboardTypeOptions;
}

export default function CustomInputText({
  value,
  label,
  placeholder,
  onChange,
  className,
  keyboardType = "default",
}: CustomInputTextProps) {
  return (
    <View className="mb-4">
      {label && <Text className="text-lg font-semibold mb-2">{label}</Text>}
      <TextInput
        placeholder={placeholder}
        className={className}
        onChangeText={onChange}
        value={value}
        keyboardType={keyboardType}
      ></TextInput>
    </View>
  );
}
