import { View, Text, Button } from "react-native";
import { useState } from "react";
import Toast from "react-native-toast-message";
import FormWizard from "@/ui/components/FormWizard";
import { Calendar } from "react-native-calendars";
import CalendarComponent from "@/ui/components/Calendar";
import RadioButtonGroup from "@/ui/components/radioBottonsGroup";
import CustomSelectOption from "@/ui/components/selectOptions";
import KeyBoardHandling from "@/ui/components/bottonSheet/KeyBoardHandling";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function RegistrosScreem({ navigation }) {
  const { top, bottom, left, right } = useSafeAreaInsets();
  const [pathBreadcrums, setPathBreadcrums] = useState([
    { id: 1, name: "Registro activo", condition: true },
    { id: 2, name: "Valores Peso", condition: true },
    { id: 3, name: "Correctivos", condition: true },
    { id: 3, name: "Correctivos", condition: true },
  ]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Hello",
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
    <View className="flex-1 bg-stale-300 " style={{ paddingTop: top }}>
      <Text>Pantalla de Home</Text>
      <Button title="Ir al Perfil" onPress={showToast} />
      <Text className="p-3 bg-stone-300">Hodasdla</Text>
      <FormWizard steps={pathBreadcrums} activeStep={activeStep} onStepPress={setActiveStep} classNameStyle="mb-9 p-4" />
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
