import { Model, tableSchema } from "@nozbe/watermelondb";
import { text } from "@nozbe/watermelondb/decorators";

export const descongeladoSalmueraName = "a26401_descongelado_salmuera";

export class DescongeladoSalmuera extends Model {
  static table = descongeladoSalmueraName;

  @text("uuid") uuid: string;
  @text("tipo_analisis") tipo_analisis: string;
  @text("Importador") Importador: string;
  @text("Cabinplant") Cabinplant: string;
  @text("Lote") Lote: string;
  @text("Proveedor") Proveedor: string;
  @text("Talla") Talla: string;
  @text("pesoNetoFresco") pesoNetoFresco: number;
  @text("peso_bruto") peso_bruto: number;
  @text("unidad_medida") unidad_medida: string;
  @text("pesoCongelado") pesoCongelado: number;
  @text("pesoDescongelado") pesoDescongelado: number;
  @text("Cta_PesoNetoFresco") Cta_PesoNetoFresco: number;
  @text("Cta_PesoCongelado") Cta_PesoCongelado: number;
  @text("Cta_PesoDescongelado") Cta_PesoDescongelado: number;
  @text("Observacion") Observacion: string;
  @text("UsuCrea") UsuCrea: string;
  @text("FechaCrea") FechaCrea: string;
  @text("FechaModi") FechaModi?: string | null;
  @text("UsuModi") UsuModi?: string | null;
  @text("Fecha") Fecha: string;
  @text("correccion") correccion: number;
  @text("foto") foto: number;
  @text("state") state: number;
  @text("sync_state") sync_state?: number;
}

export const DescongeladoSalmueraSchema = tableSchema({
  name: descongeladoSalmueraName,
  columns: [
    { name: "uuid", type: "string" },
    { name: "tipo_analisis", type: "string" },
    { name: "Importador", type: "string" },
    { name: "Cabinplant", type: "string" },
    { name: "Lote", type: "string" },
    { name: "Proveedor", type: "string" },
    { name: "Talla", type: "string" },
    { name: "pesoNetoFresco", type: "number" },
    { name: "peso_bruto", type: "number" },
    { name: "unidad_medida", type: "string" },
    { name: "pesoCongelado", type: "string" },
    { name: "pesoDescongelado", type: "number" },
    { name: "Cta_PesoNetoFresco", type: "number" },
    { name: "Cta_PesoCongelado", type: "number" },
    { name: "Cta_PesoDescongelado", type: "number" },
    { name: "Observacion", type: "string" },
    { name: "UsuCrea", type: "string" },
    { name: "FechaCrea", type: "string" },
    { name: "FechaModi", type: "string", isOptional: true },
    { name: "UsuModi", type: "string", isOptional: true },
    { name: "Fecha", type: "string" },
    { name: "correccion", type: "string" },
    { name: "foto", type: "number" },
    { name: "state", type: "number", isOptional: true },
    { name: "sync_state", type: "number" },
  ],
});
