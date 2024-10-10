import { useForm } from "@/data/hooks/useForm";
import CustomInputText from "@/ui/components/CustomInputText";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

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
  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      <View className="flex flex-row flex-wrap justify-between">
        <View className="w-full md:w-1/2 p-2">
          {/* <CustomInputText
            label={"Importador"}
            onChange={handleChange}
            value={state.Importador}
          /> */}
        </View>
      </View>
    </ScrollView>
  );
}
