import { useRef, useState } from "react";
import { Controller } from "react-hook-form";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardTypeOptions,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

interface ColumnTextFieldProps {
  control: any;
  name: string;
  label?: string | null;
  placeholder?: string;
  className?: string;
  keyboardType?: KeyboardTypeOptions;
  error?: string | null;
  rules?: any;
}

export default function ColumnTextField({
  control,
  name,
  label,
  placeholder = "",
  className,
  keyboardType = "default",
  error = null,
  rules,
}: ColumnTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View className="flex-row items-center ">
          <View className="w-full">
            <TextInput
              ref={inputRef}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
                onBlur();
              }}
              placeholder={placeholder}
              className="border border-gray-300 rounded-lg px-4 py-2 "
              onChangeText={onChange}
              value={value}
              keyboardType={keyboardType}
            />

            <Text
              className={`absolute bg-primary-light text-gray-400 bg-bod  left-3 ${
                isFocused || value
                  ? "-top-2.5 text-purple-600 scale-90"
                  : "top-4"
              } duration-100 ease-out px-1`}
            >
              {label}
            </Text>
          </View>
          {error && (
            <Text className="text-rose-500 text-xs">
              {error.message || "Error"}
            </Text>
          )}

          {value ? (
            <TouchableOpacity
              onPress={() => {
                onChange("");
                inputRef.current?.focus();
              }}
              className="ml-2"
            >
              <Feather name="x-circle" size={20} color="gray" />
            </TouchableOpacity>
          ) : null}
        </View>
      )}
    />
  );
}
