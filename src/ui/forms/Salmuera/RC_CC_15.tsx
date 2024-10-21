import { Pressable, ScrollView, Text, View } from "react-native";
import { useForm } from "@/hooks/useForm";
import { DescongeladoSalmueraModel } from "@/model/registros/Salmuera/RC_CC_15";
import { useState } from "react";
import AlertNotification from "@/ui/modals/AlertNotification";
import ColumnTextField from "@/ui/components/ColumnTextField";
import { SaveSalmuera } from "@/db/transactions/Salmuera/RC_CC_15";
import { db } from "@/db";

export default function DescongeladoSalmuera() {
  const { state, handleChange, resetForm } = useForm<DescongeladoSalmueraModel>({} as DescongeladoSalmueraModel);

  const [showModal, setShowModal] = useState(false);

  async function onSubmitForm() {
    setShowModal(true);
    const username: string | void = await db.localStorage.get("user_name")
    await SaveSalmuera(state, 1, username);
  }

  return (
    <ScrollView className="bg-body-light dark:bg-body-dark px-3">
      <Text className="text-start text-xl text-slate-600 font-semibold pl-4 ">RC.CC.15</Text>
      <View className="flex flex-row flex-wrap justify-between align-center">
        <View className="w-1/2 p-2">
          <ColumnTextField
            onChange={(text) => handleChange("tipo_analisis", text)}
            value={state.tipo_analisis}
            label="Tipo Analisis"
            placeholder={`Ingrese el tipo de analisis`}
          />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField
            onChange={(text) => handleChange("unidad_medida", text)}
            placeholder="Ingrese la Unidad Peso"
            value={state.unidad_medida}
            label="Unidad de Peso"
          />
        </View>
      </View>
      <View className="flex flex-row flex-wrap">
        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("cabinplant", text)} value={state.cabinplant} label="Cabinplant" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("co_importador", text)} value={state.co_importador} label="Importador" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("lote", text)} value={state.lote} label="Lote" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("proveedor", text)} value={state.proveedor} label="Proveedor" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("co_talla", text)} value={state.co_talla} label="Talla" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("pesoNetoFresco", text)} value={state.pesoNetoFresco} label="Peso Neto Fresco" />

          <ColumnTextField
            className="w-1/3"
            onChange={(text) => handleChange("Cta_PesoNetoFresco", text)}
            value={state.Cta_PesoNetoFresco}
            placeholder="Cta Peso Neto Fresco"
          />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("peso_bruto", text)} value={state.peso_bruto} label="Peso Bruto" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("pesoCongelado", text)} value={state.pesoCongelado} label="Peso Congelado" />

          <ColumnTextField
            onChange={(text) => handleChange("Cta_PesoCongelado", text)}
            value={state.Cta_PesoCongelado}
            placeholder="Cta Peso Congelado"
          />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("pesoDescongelado", text)} value={state.pesoDescongelado} label="Peso Descongelado" />

          <ColumnTextField
            onChange={(text) => handleChange("Cta_PesoDescongelado", text)}
            value={state.Cta_PesoDescongelado}
            placeholder="Cta Peso Descongelado"
          />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField onChange={(text) => handleChange("observaciones", text)} value={state.observaciones} label="Observacion" />
        </View>
      </View>

      <View className="p-2 flex flex-row justify-end">
        <Pressable className="w-1/4 bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onPress={onSubmitForm}>
          <Text className="text-white text-center text-xl text-bold">Subir</Text>
        </Pressable>
      </View>

      {showModal && (
        <AlertNotification
          visible={showModal}
          title="Exito"
          message="Registro RC.CC.15 Guardado Sastifactoriamente"
          onClose={() => {
            resetForm();
            setShowModal(false);
          }}
        />
      )}
    </ScrollView>
  );
}
