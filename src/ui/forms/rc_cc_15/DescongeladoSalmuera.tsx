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
import { useForm } from "@/hooks/useForm";
import database, { descongeladoSalmueraCollection } from "@/db";
import { DescongeladoSalmuera } from "@/model/DescongeladoSalmuera";

// import uuid from "react-native-uuid";

interface DescongeladoSalmueraState {
  uuid: string;
  tipo_analisis: string;
  Importador: string;
  Cabinplant: string;
  Lote: string;
  Proveedor: string;
  Talla: string;
  pesoNetoFresco: number;
  peso_bruto: number;
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
  state: number;
  sync_state?: number;
}

export default function DescongeladoSalmuera() {
  const { state, handleChange, resetForm } = useForm<DescongeladoSalmueraState>(
    {} as DescongeladoSalmueraState
  );

  async function onSubmitForm() {
    Alert.alert(
      "Formulario Subido",
      `Se Guardo exitosamente la informacion. ${JSON.stringify({
        ...state,
        // uuid: uuid.v4(),
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
    await database.write(async () => {
      await descongeladoSalmueraCollection.create(
        (descongeladoSalmuera: DescongeladoSalmuera) => {
          descongeladoSalmuera.Cabinplant = state.Cabinplant;
          descongeladoSalmuera.uuid = state.uuid;
          descongeladoSalmuera.tipo_analisis = state.tipo_analisis;
          descongeladoSalmuera.Importador = state.Importador;
          descongeladoSalmuera.Cabinplant = state.Cabinplant;
          descongeladoSalmuera.Lote = state.Lote;
          descongeladoSalmuera.Proveedor = state.Proveedor;
          descongeladoSalmuera.Talla = state.Talla;
          descongeladoSalmuera.pesoNetoFresco = state.pesoNetoFresco;
          descongeladoSalmuera.peso_bruto = state.peso_bruto;
          descongeladoSalmuera.unidad_medida = state.unidad_medida;
          descongeladoSalmuera.pesoCongelado = state.pesoCongelado;
          descongeladoSalmuera.pesoDescongelado = state.pesoDescongelado;
          descongeladoSalmuera.Cta_PesoNetoFresco = state.Cta_PesoNetoFresco;
          descongeladoSalmuera.Cta_PesoCongelado = state.Cta_PesoCongelado;
          descongeladoSalmuera.Cta_PesoDescongelado =
            state.Cta_PesoDescongelado;
          descongeladoSalmuera.Observacion = state.Observacion;
          descongeladoSalmuera.UsuCrea = state.UsuCrea;
          descongeladoSalmuera.FechaCrea = state.FechaCrea;
          descongeladoSalmuera.FechaModi = state.FechaModi;
          descongeladoSalmuera.UsuModi = state.UsuModi;
          descongeladoSalmuera.Fecha = state.Fecha;
          descongeladoSalmuera.correccion = state.correccion;
          descongeladoSalmuera.foto = state.foto;
          descongeladoSalmuera.state = state.state;
          descongeladoSalmuera.sync_state = state.sync_state;
        }
      );
    });
    await resetForm();
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
