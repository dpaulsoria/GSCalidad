import { Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Para íconos como el de check

type FormWizardTypes = {
  steps: { id: number; name: string; condition: boolean }[];
  activeStep: number;
  onStepPress: (step: number) => void;
  classNameStyle?: string;
};

export default function FormWizard({ steps, activeStep, onStepPress, classNameStyle }: FormWizardTypes) {
  return (
    <View className={`flex-row items-center ${classNameStyle}`}>
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;
        const isAllowed = step.condition;

        return (
          <View key={step.id} className="flex-row flex-1">
            <View className="" style={{ alignItems: "center", position: "relative" }}>
              <TouchableOpacity
                onPress={() => {
                  onStepPress(index);
                }}
                disabled={!isAllowed}
                className={`items-center justify-center w-8 h-8 rounded-full  ${
                  isCompleted ? "bg-tertiary-light" : isActive ? "bg-primary-light border-2 border-tertiary-light" : "bg-tertiary-light"
                }`}
              >
                {isCompleted ? (
                  <MaterialIcons name="check" size={24} color="white" />
                ) : (
                  <Text className={`${isActive ? "text-green-500 font-bold" : "text-black"}`}>{index + 1}</Text>
                )}
              </TouchableOpacity>

              <Text
                style={{
                  position: "absolute",
                  top: 40,
                  textAlign: "center",
                  width: 70,
                  color: isActive ? "#38a169" : "#a0aec0",
                  fontWeight: isActive ? "600" : "normal",
                  fontSize: 12,
                }}
              >
                {step.name}
              </Text>
            </View>

            {index < steps.length - 1 && (
              <View className={`flex-1 h-0.5 self-center  ${isCompleted ? "bg-tertiary-light" : "bg-secondary -light"} `} />
            )}
          </View>
        );
      })}
    </View>
  );
}
