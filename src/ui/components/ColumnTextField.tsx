import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";

interface ColumnTextFieldProps {
  value: any;
  label?: string | null;
  placeholder?: string;
  onChange: (text: string) => void;
  className?: string;
  keyboardType?: KeyboardTypeOptions;
}

export default function ColumnTextField({
  value,
  label,
  placeholder = "Ingrese",
  onChange,
  className,
  keyboardType = "default",
}: ColumnTextFieldProps) {
  return (
    <View className="mb-4">
      {label && <Text className="text-lg font-semibold mb-2">{label}</Text>}
      <TextInput
        placeholder={placeholder}
        className={
          className +
          `"w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
        }
        onChangeText={onChange}
        value={value}
        keyboardType={keyboardType}
      ></TextInput>
    </View>
  );
}
