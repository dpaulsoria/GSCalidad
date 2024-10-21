import { Pressable, ScrollView, Text, View } from "react-native";
import { useForm } from "@/hooks/useForm";
import { PeladoFrescoModel } from "@/model/registros/ValorAgregado/RC_CC_103";
import { useState } from "react";
import AlertNotification from "@/ui/modals/AlertNotification";
import ColumnTextField from "@/ui/components/ColumnTextField";
import { SavePeladoFresco } from "@/db/transactions/ValorAgregado/RC_CC_103";
import { db } from "@/db";

export default function PeladoFrescoScreen() {
  const { state, handleChange, resetForm } = useForm<PeladoFrescoModel>({} as PeladoFrescoModel);

  const [showModal, setShowModal] = useState(false);

  async function onSubmitForm() {
    setShowModal(true);
    const username: string | void  = await db.localStorage.get("user_name");
    await SavePeladoFresco(state, 1, username);
  }

  return (
    <ScrollView className="bg-body-light dark:bg-body-dark px-3">
      <Text className="text-start text-xl text-slate-600 font-semibold pl-4">Pelado Fresco</Text>
      
      <View className="flex flex-row flex-wrap justify-between align-center">
        <View className="w-1/2 p-2">
          <ColumnTextField
            onChange={(text) => handleChange("unidad_peso", text)}
            value={state.unidad_peso}
            label="Unidad Peso"
            placeholder={`Ingrese la Unidad de Peso`}
          />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField
            onChange={(text) => handleChange("tipo_corte", text)}
            value={state.tipo_corte}
            label="Tipo Corte"
            placeholder={`Ingrese el Tipo de Corte`}
          />
        </View>
      </View>

      <View className="flex flex-row flex-wrap">
        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("lote", text)} value={state.lote} label="Lote" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("name_importador", text)} value={state.name_importador} label="Importador" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("name_talla", text)} value={state.name_talla} label="Talla" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("area", text)} value={state.area} label="Área" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("peso_muestra", text)} value={state.peso_muestra} label="Peso Muestra" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("cuenta_libra", text)} value={state.cuenta_libra} label="Cuenta por Libra" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("uniformidad_p", text)} value={state.uniformidad_p} label="Uniformidad P" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("uniformidad_g", text)} value={state.uniformidad_g} label="Uniformidad G" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("observacion", text)} value={state.observacion} label="Observación" />
        </View>
      </View>

      <View className="p-2 flex flex-row justify-end">
        <Pressable className="w-1/4 bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onPress={onSubmitForm}>
          <Text className="text-white text-center text-xl text-bold">Guardar</Text>
        </Pressable>
      </View>

      {showModal && (
        <AlertNotification
          visible={showModal}
          title="Exito"
          message="Registro Guardado Satisfactoriamente"
          onClose={() => {
            resetForm();
            setShowModal(false);
          }}
        />
      )}
    </ScrollView>
  );
}
