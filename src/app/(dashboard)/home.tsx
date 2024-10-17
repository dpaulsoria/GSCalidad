import { View, Text, Button } from "react-native";
import { useState } from "react";
import Toast from "react-native-toast-message";
import KeyBoardHandling from "@/ui/components/bottonSheet/KeyBoardHandling";
import BreadCrumbs from "@/ui/components/breadCrumbs";
import { Calendar } from "react-native-calendars";
import CalendarComponent from "@/ui/components/calendar";
import RadioButtonGroup from "@/ui/components/radioBottonsGroup";
import CustomSelectOption from "@/ui/components/selectOptions";

export default function HomeScreen({ navigation }) {
  const [pathBreadcrums, setPathBreadcrums] = useState([
    { id: 1, name: "Step_1", condition: true },
    { id: 2, name: "Step_2", condition: true },
    { id: 3, name: "Step_3", condition: false },
  ]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Hello",
      text2: "This is some something 🔥",
    });
  };
  const options = [
    { label: "Opción 1", value: "opcion1" },
    { label: "Opción 2", value: "opcion2" },
    { label: "Opción 3", value: "opcion3" },
  ];
  const handleValueChange = (value) => {
    console.log("value", value);
  };

  return (
    <View className="flex-1 bg-stale-300">
      <Text>Pantalla de Home</Text>
      <Button title="Ir al Perfil" onPress={showToast} />
      <Text className="p-3 bg-stone-300">Hola</Text>
      <BreadCrumbs steps={pathBreadcrums} activeStep={activeStep} onStepPress={setActiveStep} />
      {activeStep === 0 && <Paso1 />}
      {activeStep === 1 && <Paso2 />}
      {activeStep === 2 && <Paso3 />}
      <RadioButtonGroup options={options} onValueChange={handleValueChange} />
      <CustomSelectOption
        options={options}
        selectedValue={selectedValue}
        onValueChange={(value) => setSelectedValue(value)}
        placeholder={"Selecciona una opción"}
      />
      <KeyBoardHandling />
      {/* <Calendar /> */}
      {/* <CalendarComponent /> */}
      <Toast />
    </View>
  );
}
function Paso1() {
  return <Text>Paso 1</Text>;
}
function Paso2() {
  return <Text>Paso 2</Text>;
}
function Paso3() {
  return <Text>Paso 3</Text>;
}
