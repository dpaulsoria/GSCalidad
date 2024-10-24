import { Pressable, ScrollView, Text, View } from "react-native";
import { DescongeladoSalmueraModel } from "@/model/registros/Salmuera/RC_CC_15";
import { useState } from "react";
import AlertNotification from "@/ui/modals/AlertNotification";
import ColumnTextField from "@/ui/components/ColumnTextField";
import { SaveSalmuera } from "@/db/transactions/Salmuera/RC_CC_15";
import { db } from "@/db";
import { useDescongeladoSalmueraStore } from "@/store/Salmuera/RC_CC_15";
import { useUtilStore } from "@/store/util/store";
import CustomSelectOption from "@/ui/components/SelectOptions";
import { useForm, Controller } from "react-hook-form";

const TAG = "[RC.CC.15]";

export default function DescongeladoSalmuera() {
  const validationRules = {
    pesoNetoFresco: (value: number) =>
      value >= 0 && value < 100
        ? true
        : "Peso neto fresco debe estar entre 0 y 100",
    peso_bruto: (value: number) =>
      value >= 0 && value < 100 ? true : "Peso bruto debe estar entre 0 y 100",
    pesoCongelado: (value: number) =>
      value >= 0 && value < 100
        ? true
        : "Peso congelado debe estar entre 0 y 100",
    pesoDescongelado: (value: number) =>
      value >= 0 && value < 100
        ? true
        : "Peso descongelado debe estar entre 0 y 100",
    Cta_PesoNetoFresco: (value: number) =>
      value >= 0 ? true : "Cta Peso Neto Fresco debe ser mayor o igual a 0",
    Cta_PesoDescongelado: (value: number) =>
      value >= 0 ? true : "Cta Peso Descongelado debe ser mayor o igual a 0",
    unidad_medida: (value: string) =>
      value ? true : "Debe seleccionar una unidad de peso",
    lote: (value: string) => (value ? true : "Lote no puede estar vacío"),
    proveedor: (value: string) =>
      value ? true : "Proveedor no puede estar vacío",
  };

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DescongeladoSalmueraModel & { tmp: string }>({
    defaultValues: {
      proveedor: "proveedor",
    },
  });
  const { register, functions } = useDescongeladoSalmueraStore();
  const [showModal, setShowModal] = useState(false);
  const { vSelectLists } = useUtilStore();

  async function onSubmitForm() {
    // Mostrar errores o mensaje de validación
    console.log("Formulario tiene errores:", errors);

    setShowModal(true);
    const username: string | void = await db.localStorage.get("user_name");
    // await SaveSalmuera(state, 1, username);
  }

  return (
    <ScrollView className="bg-body-light dark:bg-body-dark px-3">
      <Text className="text-start text-xl text-slate-600 font-semibold pl-4 ">
        [RC.CC.15] - Descongelado Salmuera
      </Text>
      <View className="flex flex-row flex-wrap justify-between align-center">
        <View className="w-1/2 p-2">
          <ColumnTextField
            control={control}
            name="tipo_analisis"
            label="Tipo Analisis"
            // placeholder={`Ingrese el tipo de analisis`}
          />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField
            control={control}
            name="unidad_medida"
            label="Unidad de Peso"
          />
        </View>
      </View>
      <View className="flex flex-row flex-wrap">
        <View className="w-1/2 p-2">
          <ColumnTextField
            control={control}
            name="cabinplant"
            label="Cabinplant"
          />
        </View>
        <View>
          {/* <CustomSelectOption
            options={vSelectLists.importadores}
            selectedValue={state.co_importador}
            onValueChange={(text: string) =>
              handleChange("co_importador", text)
            }
            placeholder={"Selecciona una opción"}
          /> */}
        </View>
        <View className="w-1/2 p-2">
          <ColumnTextField control={control} name="lote" label="Lote" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField
            control={control}
            name="proveedor"
            label="Proveedor"
          />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField control={control} name="co_talla" label="Talla" />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField
            control={control}
            name="pesoNetoFresco"
            label="Peso Neto Fresco"
            rules={{ required: "Peso Neto Fresco es requerido" }}
          />

          <ColumnTextField
            className="w-1/3"
            control={control}
            name="Cta_PesoNetoFresco"
            // placeholder="Cta Peso Neto Fresco"
          />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField
            control={control}
            name="peso_bruto"
            label="Peso Bruto"
            rules={{ required: "Peso Bruto es requerido" }}
          />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField
            name="pesoCongelado"
            control={control}
            label="Peso Congelado"
          />

          <ColumnTextField
            control={control}
            name="Cta_PesoCongelado"
            label="Cta Peso Congelado"
          />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField
            control={control}
            name="pesoDescongelado"
            label="Peso Descongelado"
          />

          <ColumnTextField
            control={control}
            name="Cta_PesoDescongelado"
            label="Cta Peso Descongelado"
          />
        </View>

        <View className="w-1/2 p-2">
          <ColumnTextField
            control={control}
            name="observaciones"
            label="Observacion"
          />
        </View>
      </View>

      <View className="p-2 flex flex-row justify-end">
        <Pressable
          className="w-1/4 bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          onPress={handleSubmit(onSubmitForm)}
        >
          <Text className="text-white text-center text-xl text-bold">
            Subir
          </Text>
        </Pressable>
      </View>

      {showModal && (
        <AlertNotification
          visible={showModal}
          title="Exito"
          message="Registro RC.CC.15 Guardado Sastifactoriamente"
          // onClose={() => {
          //   resetForm();
          //   setShowModal(false);
          // }}
        />
      )}
    </ScrollView>
  );
}
