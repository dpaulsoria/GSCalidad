import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import ColumnTextField from "./ColumnTextField";
type FieldType = "text" | "number" | "select" | "checkbox";

interface Field {
  id: string;
  name: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  className?: string;
  options?: { label: string; value: string }[]; // Para selects
}

interface DynamicFormProps {
  fields: Field[];
  onSubmit: (formData: { [key: string]: any }) => void;
}

export default function DynamicForm({ fields, onSubmit }: DynamicFormProps) {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  const handleInputChange = (name: string, value: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };
  return (
    <SafeAreaView className="flex-1">
      {fields.map((field) => {
        // Renderizar diferentes tipos de input basados en el tipo del campo
        switch (field.type) {
          case "text":
          case "number":
            return (
              <View>
                <ColumnTextField
                  key={field.id}
                  value={formData[field.name]}
                  keyboardType={field.type === "number" ? "numeric" : "default"}
                  placeholder={field.placeholder}
                  onChange={(value) => handleInputChange(field.name, value)}
                />
              </View>
            );
          //TODO: Hacer DropDown
          //   case "dropdown":
          //     return (

          //     );
          case "checkbox":
            return (
              <View className={field.className}>
                <Text>{field.label}</Text>
                <Switch
                  value={formData[field.name] || false}
                  onValueChange={(value) =>
                    handleInputChange(field.name, value)
                  }
                />
              </View>
            );
          default:
            return null;
        }
      })}
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
}
