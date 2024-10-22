import { Pressable, ScrollView, Text, View } from "react-native";
import { useForm } from "@/hooks/useForm";
import { useState } from "react";
import AlertNotification from "@/ui/modals/AlertNotification";
import ColumnTextField from "@/ui/components/ColumnTextField";
import { db } from "@/db";
import { SaveProdTerminado } from "@/db/transactions/ProdTerminado/RC_CC_108";
import { ProdTerminadoModel } from "@/model/registros/ProdTerminado/RC_CC_108";

export default function ProdTerminadoScreen() {
  const { state, handleChange, resetForm } = useForm<ProdTerminadoModel>({} as ProdTerminadoModel);

  const [showModal, setShowModal] = useState(false);

  async function onSubmitForm() {
    setShowModal(true);
    const username: string | void = await db.localStorage.get("user_name")
    await SaveProdTerminado(state, 1, username);
  }

  return (
    <ScrollView className="bg-body-light dark:bg-body-dark px-3">
      <Text className="text-start text-xl text-slate-600 font-semibold pl-4 ">RC.CC.15 - Producto Terminado</Text>
      <View className="flex flex-row flex-wrap justify-between align-center">
        <View className="w-1/2 p-2">
          <ColumnTextField
            onChange={(text) => handleChange("fecha_etiqueta", text)}
            value={state.fecha_etiqueta}
            label="Fecha Etiqueta"
            placeholder={`Ingrese la fecha de etiqueta`}
          />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField
            onChange={(text) => handleChange("tipo_control", text)}
            placeholder="Ingrese el tipo de control"
            value={state.tipo_control}
            label="Tipo de Control"
          />
        </View>
      </View>
      <View className="flex flex-row flex-wrap">
        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("area", text)} value={state.area} label="Área" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("tipo_producto", text)} value={state.tipo_producto} label="Tipo de Producto" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("presentacion", text)} value={state.presentacion} label="Presentación" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("unidad_medida", text)} value={state.unidad_medida} label="Unidad de Medida" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("cliente", text)} value={state.cliente} label="Cliente" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("temperatura", text)} value={state.temperatura} label="Temperatura" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("talla_real", text)} value={state.talla_real} label="Talla Real" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("peso_bruto", text)} value={state.peso_bruto} label="Peso Bruto" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("peso_neto", text)} value={state.peso_neto} label="Peso Neto" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("glaseo", text)} value={state.glaseo} label="Glaseo" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("cta_congelada", text)} value={state.cta_congelada} label="Cuenta Congelada" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("cta_final", text)} value={state.cta_final} label="Cuenta Final" />
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
