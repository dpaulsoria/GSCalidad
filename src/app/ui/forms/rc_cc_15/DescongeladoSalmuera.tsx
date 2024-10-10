import { useForm } from "@/app/hooks/useForm";
import React from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  SafeAreaViewBase,
  ScrollView,
  Text,
  View,
} from "react-native";
import CustomInputText from "../../components/CustomInputText";

import uuid from "react-native-uuid";

interface DescongeladoSalmueraState {
  uuid: string;
  tipo_analisis: string;
  Importador: string;
  Cabinplant: string;
  Lote: string;
  Proveedor: string;
  Talla: string;
  pesoNetoFresco: string;
  peso_bruto: string;
  unidad_medida: string;
  pesoCongelado: number;
  pesoDescongelado: number;
  Cta_PesoNetoFresco: number;
  Cta_PesoCongelado: number;
  Cta_PesoDescongelado: number;
  Observacion: string;
  UsuCrea: string;
  FechaCrea: string;
  FechaModi?: string | null;
  UsuModi?: string | null;
  Fecha: string;
  correccion: number;
  foto: number;
  sincro: number;
  state: number;
}

export default function DescongeladoSalmuera() {
  const { state, handleChange, resetForm } = useForm<DescongeladoSalmueraState>(
    {} as DescongeladoSalmueraState
  );

  function onSubmitForm() {
    Alert.alert(
      "Formulario Subido",
      `Se Guardo exitosamente la informacion. ${JSON.stringify({
        ...state,
        uuid: uuid.v4(),
      })}`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("Upload") },
      ]
    );
    resetForm();
  }
  return (
    <ScrollView className="flex-1 bg-gray-100 p-4 block border border-gray-200 rounded-lg shadow">
      <Text className="text-center text-2xl text-sla">RC.CC.15</Text>
      <View className="flex flex-column flex-wrap justify-between gap-1">
        <View className="w-full md:w-1/2 p-2">
          <CustomInputText
            onChange={(text) => handleChange("tipo_analisis", text)}
            value={state.tipo_analisis}
            className="block w-auto rounded-md border-2 p-3 text-gray-900"
            label="Tipo Analisis"
            placeholder="Ingrese el tipo de analisis"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <CustomInputText
            onChange={(text) => handleChange("unidad_medida", text)}
            value={state.unidad_medida}
            className="block w-auto rounded-md border-2 p-3 text-gray-900"
            label="Unidad de Peso"
            placeholder="Ingrese la unidad del peso"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <CustomInputText
            onChange={(text) => handleChange("Cabinplant", text)}
            value={state.Cabinplant}
            className="block w-auto rounded-md border-2 p-3 text-gray-900"
            label="Cabinplant"
            placeholder="Cabinplant"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <CustomInputText
            onChange={(text) => handleChange("Importador", text)}
            value={state.Importador}
            className="block w-auto rounded-md border-2 p-3 text-gray-900"
            label="Importador"
            placeholder="Importador"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <CustomInputText
            onChange={(text) => handleChange("Lote", text)}
            value={state.Lote}
            className="block w-auto rounded-md border-2 p-3 text-gray-900"
            label="Lote"
            placeholder="Ingrese el Lote"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <CustomInputText
            onChange={(text) => handleChange("Proveedor", text)}
            value={state.Proveedor}
            className="block w-auto rounded-md border-2 p-3 text-gray-900"
            label="Proveedor"
            placeholder="Ingrese el Proveedor"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <CustomInputText
            onChange={(text) => handleChange("Talla", text)}
            value={state.Talla}
            className="block w-auto rounded-md border-2 p-3 text-gray-900"
            label="Talla"
            placeholder="Ingrese la Talla"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <CustomInputText
            onChange={(text) => handleChange("pesoNetoFresco", text)}
            value={state.pesoNetoFresco}
            className="block w-auto rounded-md border-2 p-3 text-gray-900"
            label="Peso Neto Fresco"
            placeholder="Peso Neto Fresco"
          />

          <CustomInputText
            onChange={(text) => handleChange("Cta_PesoNetoFresco", text)}
            value={state.Cta_PesoNetoFresco}
            className="block w-auto rounded-md border-2 p-3 text-gray-900"
            placeholder="Cta Peso Neto Fresco"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <CustomInputText
            onChange={(text) => handleChange("peso_bruto", text)}
            value={state.peso_bruto}
            className="block w-auto rounded-md border-2 p-3 text-gray-900"
            label="Peso Bruto"
            placeholder="Peso Bruto"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <CustomInputText
            onChange={(text) => handleChange("pesoCongelado", text)}
            value={state.pesoCongelado}
            className="block w-auto rounded-md border-2 p-3 text-gray-900"
            label="Peso Congelado"
            placeholder="Peso Congelado"
          />

          <CustomInputText
            onChange={(text) => handleChange("Cta_PesoCongelado", text)}
            value={state.Cta_PesoCongelado}
            className="block w-auto rounded-md border-2 p-3 text-gray-900"
            placeholder="Cta Peso Congelado"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <CustomInputText
            onChange={(text) => handleChange("pesoDescongelado", text)}
            value={state.pesoDescongelado}
            className="block w-auto rounded-md border-2 p-3 text-gray-900"
            label="Peso Descongelado"
            placeholder="Peso Descongelado"
          />

          <CustomInputText
            onChange={(text) => handleChange("Cta_PesoDescongelado", text)}
            value={state.Cta_PesoDescongelado}
            className="block w-auto rounded-md border-2 p-3 text-gray-900"
            placeholder="Cta Peso Descongelado"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <CustomInputText
            onChange={(text) => handleChange("Observacion", text)}
            value={state.Observacion}
            className="block w-auto rounded-md border-2 p-3 text-gray-900"
            label="Observacion"
            placeholder="Observacion"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <Button title="Subir" onPress={onSubmitForm} />
        </View>
      </View>
    </ScrollView>
  );
}
