import { Alert, Button, ScrollView, Text, View } from "react-native";
import FloatingLabelInput from "@/ui/components/floatInputText";
import { useForm } from "@/hooks/useForm";
import database, { rc15Collection } from "@/db";
import { DescongeladoSalmueraModel } from "@/model/registros/Salmuera/RC_CC_15";
import { formatDate } from "@/utils/formatDate";

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
      })}`,
      [{ text: "OK", onPress: () => console.log("Upload") }]
    );
    await database.write(async () => {
      await rc15Collection.create(
        (descongeladoSalmuera: DescongeladoSalmueraModel) => {
          descongeladoSalmuera.cabinplant = state.Cabinplant;
          descongeladoSalmuera.tipo_analisis = state.tipo_analisis;
          descongeladoSalmuera.co_importador = state.Importador;
          descongeladoSalmuera.cabinplant = state.Cabinplant;
          descongeladoSalmuera.lote = state.Lote;
          descongeladoSalmuera.proveedor = state.Proveedor;
          descongeladoSalmuera.co_talla = state.Talla;
          descongeladoSalmuera.pesoNetoFresco = state.pesoNetoFresco;
          descongeladoSalmuera.peso_bruto = state.peso_bruto;
          descongeladoSalmuera.unidad_medida = state.unidad_medida;
          descongeladoSalmuera.pesoCongelado = state.pesoCongelado;
          descongeladoSalmuera.pesoDescongelado = state.pesoDescongelado;
          descongeladoSalmuera.Cta_PesoNetoFresco = state.Cta_PesoNetoFresco;
          descongeladoSalmuera.Cta_PesoCongelado = state.Cta_PesoCongelado;
          descongeladoSalmuera.Cta_PesoDescongelado =
            state.Cta_PesoDescongelado;
          descongeladoSalmuera.observaciones = state.Observacion;
          descongeladoSalmuera.UsuCrea = state.UsuCrea;
          descongeladoSalmuera.FechaCrea = state?.FechaCrea
            ? state.FechaCrea
            : formatDate(new Date(), "yyyy-MM-dd HH:mm:ss");
          descongeladoSalmuera.FechaModi = state?.FechaModi
            ? state.FechaModi
            : formatDate(new Date(), "yyyy-MM-dd HH:mm:ss");
          descongeladoSalmuera.UsuModi = state?.UsuModi;
          descongeladoSalmuera.correccionBln = state.correccion;
          // descongeladoSalmuera.foto = state.foto;
          descongeladoSalmuera.state = state.state;
          // descongeladoSalmuera.sync_state = state.sync_state;
          descongeladoSalmuera.planta_id = 1;
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
          <FloatingLabelInput
            onChangeText={(text) => handleChange("tipo_analisis", text)}
            value={state.tipo_analisis}
            label="Tipo Analisis"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <FloatingLabelInput
            onChangeText={(text) => handleChange("unidad_medida", text)}
            value={state.unidad_medida}
            label="Unidad de Peso"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <FloatingLabelInput
            onChangeText={(text) => handleChange("Cabinplant", text)}
            value={state.Cabinplant}
            label="Cabinplant"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <FloatingLabelInput
            onChangeText={(text) => handleChange("Importador", text)}
            value={state.Importador}
            label="Importador"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <FloatingLabelInput
            onChangeText={(text) => handleChange("Lote", text)}
            value={state.Lote}
            label="Lote"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <FloatingLabelInput
            onChangeText={(text) => handleChange("Proveedor", text)}
            value={state.Proveedor}
            label="Proveedor"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <FloatingLabelInput
            onChangeText={(text) => handleChange("Talla", text)}
            value={state.Talla}
            label="Talla"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <FloatingLabelInput
            onChangeText={(text) => handleChange("pesoNetoFresco", text)}
            value={state.pesoNetoFresco}
            label="Peso Neto Fresco"
          />

          <FloatingLabelInput
            onChangeText={(text) => handleChange("Cta_PesoNetoFresco", text)}
            value={state.Cta_PesoNetoFresco}
            label="Cta Peso Neto Fresco"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <FloatingLabelInput
            onChangeText={(text) => handleChange("peso_bruto", text)}
            value={state.peso_bruto}
            label="Peso Bruto"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <FloatingLabelInput
            onChangeText={(text) => handleChange("pesoCongelado", text)}
            value={state.pesoCongelado}
            label="Peso Congelado"
          />

          <FloatingLabelInput
            onChangeText={(text) => handleChange("Cta_PesoCongelado", text)}
            value={state.Cta_PesoCongelado}
            label="Cta Peso Congelado"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <FloatingLabelInput
            onChangeText={(text) => handleChange("pesoDescongelado", text)}
            value={state.pesoDescongelado}
            label="Peso Descongelado"
          />

          <FloatingLabelInput
            onChangeText={(text) => handleChange("Cta_PesoDescongelado", text)}
            value={state.Cta_PesoDescongelado}
            label="Cta Peso Descongelado"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <FloatingLabelInput
            onChangeText={(text) => handleChange("Observacion", text)}
            value={state.Observacion}
            label="Observacion"
          />
        </View>

        <View className="w-full md:w-1/2 p-2">
          <Button title="Subir" onPress={onSubmitForm} />
        </View>
      </View>
    </ScrollView>
  );
}
