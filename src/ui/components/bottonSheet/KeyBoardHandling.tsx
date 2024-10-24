import React, { useEffect, useMemo, useRef, useCallback, useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import CustomSelectOption from "@/ui/components/SelectOptions";
import RadioButtonGroup from "../RadioBottonsGroup";
type BottomSheetProps = {
  isOpen: boolean;
};

export default function BottomSheetComponent({ isOpen }: BottomSheetProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedPlanta, setSelectedPlanta] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedRegistro, setSelectedRegistro] = useState(null);
  const snapPoints = useMemo(() => ["40%", "60%"], []);
  const options1 = [
    { name: "Guayaquil", value: "opcion1" },
    { name: "Quito", value: "opcion2" },
    { name: "Cuenca", value: "opcion3" },
    { name: "Manta", value: "opcion4" },
    { name: "Portoviejo", value: "opcion5" },
    { name: "Ambato", value: "opcion6" },
    { name: "Esmeraldas", value: "opcion7" },
    { name: "Machala", value: "opcion8" },
    { name: "Ibarra", value: "opcion9" },
    { name: "Loja", value: "opcion10" },
  ];

  const options2 = [
    { name: "12345-a", value: "area1" },
    { name: "67890-e", value: "area2" },
    { name: "54321-i", value: "area3" },
    { name: "09876-o", value: "area4" },
    { name: "11223-u", value: "area5" },
    { name: "33445-a", value: "area6" },
    { name: "55678-e", value: "area7" },
    { name: "99887-i", value: "area8" },
    { name: "77654-o", value: "area9" },
    { name: "34567-u", value: "area10" },
    { name: "21345-a", value: "area11" },
    { name: "56789-e", value: "area12" },
    { name: "98765-i", value: "area13" },
    { name: "65432-o", value: "area14" },
    { name: "32109-u", value: "area15" },
  ];

  const option3 = [
    { name: "RC_CC_108", value: "r1" },
    { name: "RC_CC_109", value: "r2" },
    { name: "RC_CC_15", value: "r3" },
    { name: "RC_CC_103", value: "r4" },
    { name: "RC_CC_200", value: "r5" },
    { name: "RC_CC_210", value: "r6" },
    { name: "RC_CC_301", value: "r7" },
    { name: "RC_CC_303", value: "r8" },
    { name: "RC_CC_305", value: "r9" },
    { name: "RC_CC_400", value: "r10" },
    { name: "RC_CC_402", value: "r11" },
    { name: "RC_CC_403", value: "r12" },
    { name: "RC_CC_404", value: "r13" },
    { name: "RC_CC_405", value: "r14" },
    { name: "RC_CC_406", value: "r15" },
    { name: "RC_CC_501", value: "r16" },
    { name: "RC_CC_503", value: "r17" },
    { name: "RC_CC_505", value: "r18" },
    { name: "RC_CC_600", value: "r19" },
    { name: "RC_CC_602", value: "r20" },
  ];

  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isOpen]);

  if (!isOpen) return null;
  const onClose = () => {
    console.log("Cerrar bottom sheet");
  };
  return (
    <View style={StyleSheet.absoluteFill}>
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} enablePanDownToClose={true}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>¡Filtro!</Text>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text>Cerrar</Text>
          </Pressable>
          <View className="flex-row justify-evenly  w-full">
            <CustomSelectOption
              options={options1}
              selectedValue={selectedPlanta}
              onValueChange={(value) => setSelectedPlanta(value)}
              placeholder={"Selecciona una opción"}
            />
            <CustomSelectOption
              options={options2}
              selectedValue={selectedArea}
              onValueChange={(value) => setSelectedArea(value)}
              placeholder={"Selecciona una opción"}
              disable={selectedPlanta === null}
            />
          </View>
          <View>{selectedArea && selectedPlanta && <RadioButtonGroup options={option3} onValueChange={(value) => console.log(value)} />}</View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  closeButton: {
    marginTop: 16,
    padding: 8,
  },
});
