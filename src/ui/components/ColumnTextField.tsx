import { useRef, useState } from "react";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
interface ColumnTextFieldProps {
  value: any;
  label?: string | null;
  placeholder?: string;
  onChange: (text: string) => void;
  className?: string;
  keyboardType?: KeyboardTypeOptions;
}
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function ColumnTextField({
  value,
  label,
  placeholder = "Ingrese",
  onChange,
  className,
  keyboardType = "default",
}: ColumnTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const onClear = () => {
    onChange("");
    inputRef.current.focus();
  };
  return (
    <View className="justify-center items-center">
      <View className="relative w-full flex-row bg-orange-400">
        <TextInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder=""
          className={
            className +
            `" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"` // Añadimos pr-10 para espacio a la derecha
          }
          onChangeText={onChange}
          value={value}
          keyboardType={keyboardType}
        />
        <View pointerEvents="none" className="absolute ">
          <Text
            className={`absolute text-gray-400 left-3 bg-body-light dark:bg-body-dark ${
              isFocused || value ? "-top-2.5 text-purple-600 scale-90" : "top-4"
            } duration-100 ease-out px-2`}
          >
            {label}
          </Text>
        </View>
        {/* <MaterialIcons
          name="cancel"
          size={24}
          color="black"
          className={`hidden absolute right-2 top-1/2 transform -translate-y-1/2 `}
          onPress={onClear}
        /> */}
      </View>
    </View>
  );
}
