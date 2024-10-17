import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
type BreadCrumbStep = {
  steps: { id: number; name: string; condition: boolean }[];
  activeStep: number;
  onStepPress: (step: number) => void;
};
export default function BreadCrumbs({ steps, activeStep, onStepPress }: BreadCrumbStep) {
  return (
    <View className="flex-row">
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isAllowed = step.condition;

        return (
          <View key={step.id} className=" flex-row text-center  items-center ">
            <TouchableOpacity
              onPress={() => {
                onStepPress(index);
                console.log("onStepPress", index);
              }}
              disabled={!isAllowed}
              className="px-3 py-1 bg-slate-500 rounded-full"
            >
              <Text className={`${isActive ? "font-bold text-white" : "font-normal"}`}>{step.name}</Text>
            </TouchableOpacity>
            {index < steps.length - 1 && <Text>{" > "}</Text>}
          </View>
        );
      })}
    </View>
  );
}
