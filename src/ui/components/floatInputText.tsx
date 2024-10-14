import React, { useState, useRef } from "react";
import { Animated, TextInput, View, Text, StyleSheet } from "react-native";

export default function FloatingLabelInput({ label, value, onChangeText }) {
  const [isFocused, setIsFocused] = useState(false);
  const labelPosition = useRef(new Animated.Value(value ? 1 : 0)).current;

  return (
    <View className="flex-1 justify-center items-center ">
      <View className="relative w-full">
        <TextInput
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder=""
          className="text-gray-600 rounded-lg bg-gray-100  rounded px-4 py-3 duration-100 ease-out focus:border-purple-600 h-14 w-full"
        />
        <Text
          className={`absolute text-gray-400  left-3 ${
            isFocused || value ? "-top-2.5 text-purple-600 scale-90" : "top-4"
          } duration-100 ease-out px-1`}
        >
          {label}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    marginVertical: 12,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    fontSize: 16,
  },
});
