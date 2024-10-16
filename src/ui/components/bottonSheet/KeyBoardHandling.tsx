import React, { useMemo, useRef } from "react";
import { View, Text, Button, KeyboardAvoidingView, Platform } from "react-native";
import { BottomSheetTextInput, BottomSheetModal, BottomSheetModalProvider, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import Animated, { Easing } from "react-native-reanimated";
import SearchAndSuggest from "../searchAndSuggest";

export default function App() {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["40%"], []);

  const handlePresentModalPress = () => {
    bottomSheetModalRef.current.present();
  };

  const handleSelectItem = () => {
    // Lógica después de seleccionar un elemento
    // ...

    // Cerrar el Bottom Sheet Modal
    bottomSheetModalRef.current.dismiss();
  };

  const renderBackdrop = (props) => <BottomSheetBackdrop {...props} opacity={0.5} disappearsOnIndex={-1} appearsOnIndex={0} />;

  return (
    // Envuelve tu componente con BottomSheetModalProvider
    <BottomSheetModalProvider>
      <View className="flex-1 ">
        {/* Botón para abrir el Bottom Sheet Modal */}
        <Button title="Abrir Bottom Sheet" onPress={handlePresentModalPress} />

        {/* Configuración del Bottom Sheet Modal */}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          enableDismissOnClose={true}
          keyboardBehavior="interactive"
          keyboardBlurBehavior="restore"
          animationConfigs={{
            duration: 700,
            easing: Easing.out(Easing.exp),
          }}
        >
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <SearchAndSuggest data={["carro", "gato", "casa", "perro", "computadora", "celular", "libro", "mesa", "silla", "ventana"]} />
              <Text style={{ marginBottom: 10 }}>Contenido del Bottom Sheet</Text>
              {/* Botón que simula la selección de un elemento y cierra el modal */}
              <Button title="Seleccionar elemento" onPress={handleSelectItem} />
              <BottomSheetTextInput placeholder="Escribe aquí..." />
            </View>
          </KeyboardAvoidingView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
}
