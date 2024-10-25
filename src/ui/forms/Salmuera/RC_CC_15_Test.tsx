import { Pressable, ScrollView, Text, View } from "react-native";
// import { useForm } from "@/hooks/useForm";
import { useForm, Controller } from "react-hook-form";
import { DescongeladoSalmueraModel } from "@/model/registros/Salmuera/RC_CC_15";
import { useState } from "react";
import AlertNotification from "@/ui/modals/AlertNotification";
import ColumnTextField from "@/ui/components/ColumnTextField";
import { SaveSalmuera } from "@/db/transactions/Salmuera/RC_CC_15";
import { db } from "@/db";
import { useDescongeladoSalmueraStore } from "@/store/Salmuera/RC_CC_15";
import { useUtilStore } from "@/store/util/store";
import CustomSelectOption from "@/ui/components/SelectOptions";
import { TextInput } from "react-native-gesture-handler";
import { styled } from "nativewind";
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

  //   const { state, handleChange, validateForm, resetForm, errors } = useForm<DescongeladoSalmueraModel>(
  //     {} as DescongeladoSalmueraModel,
  //     validationRules,
  //   );
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
  const pwd = watch("tipo_analisis");
  const { register, functions } = useDescongeladoSalmueraStore();
  const { vSelectLists } = useUtilStore();
  async function onSubmitForm(data) {
    console.log(data);
  }
  const StyledView = styled(View);
  const StyledText = styled(Text);
  return (
    <ScrollView className="bg-body-light dark:bg-body-dark px-3 w-full">
      <View className="flex flex-wrap flex-row ">
        <View className=" w-4/12 p-2 ">
          <ColumnTextField
            control={control}
            name="tipo_analisis"
            label="Tipo "
            rules={{
              require: "tipo es requerido",
              minLength: { value: 3, message: "hola mundo" },
            }}
          />
        </View>
        <View className=" w-4/12 p-2 ">
          <ColumnTextField
            control={control}
            name="co_importador"
            label="Tipo Analisis"
            rules={{ validate: value => value === pwd || "not match" }}
          />
        </View>
        <View className="w-4/12 p-2 ">
          <ColumnTextField
            control={control}
            name="cabinplant"
            label="Tipo Analisis"
          />
        </View>
        <View className="w-4/12 p-2">
          <ColumnTextField control={control} name="ju" label="Tipo Analisis" />
        </View>
        <View className="w-4/12 p-2">
          <ColumnTextField
            control={control}
            name="proveedor"
            label="proveedor"
          />
        </View>
        <View className="w-4/12 p-2">
          <ColumnTextField
            control={control}
            name="co_talla"
            label="Tipo Analisis"
          />
        </View>
        <View className="w-4/12 p-2">
          <ColumnTextField
            control={control}
            name="pesoNetoFresco"
            label="Tipo Analisis"
          />
        </View>
      </View>
      <View className="p-2 flex flex-row justify-end">
        <Pressable
          className="w-4/12 bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          onPress={handleSubmit(onSubmitForm)}
        >
          <Text className="text-white text-center text-xl text-bold">
            Subir
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
