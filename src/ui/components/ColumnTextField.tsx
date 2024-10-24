import { useRef, useState } from "react";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";

interface ColumnTextFieldProps {
  value: any;
  label?: string | null;
  placeholder?: string;
  onChange: (text: string) => void;
  className?: string;
  keyboardType?: KeyboardTypeOptions;
  error?: string | null; // New prop for displaying error
}

export default function ColumnTextField({
  value,
  label,
  placeholder = "Ingrese", // Set placeholder default value
  onChange,
  className,
  keyboardType = "default",
  error = null, // Initialize error prop
}: ColumnTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const onClear = () => {
    onChange("");
    inputRef.current.focus();
  };

  return (
    <View className="justify-center items-center">
      <View className="relative w-full flex-row">
        <TextInput
          ref={inputRef}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder} // Use placeholder passed as prop
          className={
            className +
            `" bg-gray-50 border ${
              error ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"`
          }
          onChangeText={onChange}
          value={value}
          keyboardType={keyboardType}
        />
        <View pointerEvents="none" className="absolute">
          <Text
            className={`absolute text-gray-400 left-3 bg-body-light dark:bg-body-dark ${
              isFocused || value ? "-top-2.5 text-purple-600 scale-90" : "top-4"
            } duration-100 ease-out px-2`}
          >
            {label}
          </Text>
        </View>
        {/* Optional clear button, commented out for now */}
        {/* <MaterialIcons
          name="cancel"
          size={24}
          color="black"
          className={`hidden absolute right-2 top-1/2 transform -translate-y-1/2 `}
          onPress={onClear}
        /> */}
      </View>
      {/* Display error message if present */}
      {error && <Text className="text-red-500 text-xs mt-1">{error}</Text>}
    </View>
  );
}
