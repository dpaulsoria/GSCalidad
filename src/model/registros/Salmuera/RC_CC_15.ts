import { Migrable } from "@/types/Migrable";
import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date, readonly, nochange } from "@nozbe/watermelondb/decorators";

export const name = "a26401_descongelado_salmuera";

export class DescongeladoSalmueraModel extends Model implements Migrable {
  static table = name;

  @text("tipo_analisis") tipo_analisis!: string;
  @text("co_importador") co_importador!: string;
  @text("cabinplant") cabinplant!: string;
  @text("lote") lote!: string;
  @text("proveedor") proveedor!: string;
  @text("co_talla") co_talla!: string;
  @field("pesoNetoFresco") pesoNetoFresco!: number;
  @field("peso_bruto") peso_bruto!: number;
  @text("unidad_medida") unidad_medida!: string;
  @field("pesoCongelado") pesoCongelado!: number;
  @field("pesoDescongelado") pesoDescongelado!: number;
  @field("Cta_PesoNetoFresco") Cta_PesoNetoFresco!: number;
  @field("Cta_PesoCongelado") Cta_PesoCongelado!: number;
  @field("Cta_PesoDescongelado") Cta_PesoDescongelado!: number;
  @text("observaciones") observaciones!: string | null;
  @nochange @text("UsuCrea") UsuCrea!: string;
  @readonly @date("created_at") createdAt!: number;
  @text("UsuModi") UsuModi!: string | null;
  @readonly @date("updated_at") updatedAt!: number;
  @field("correccion") correccion!: number;
  @field("foto") foto!: number;
  // TODO: Quitar estado
  @field("estado") estado!: number;
  @field("state") state!: number;
  @field("planta_id") planta_id!: number | null;
  @field("remote_id") remote_id!: number;
}

export const DescongeladoSalmueraSchema = tableSchema({
  name,
  columns: [
    { name: "tipo_analisis", type: "string" },
    { name: "co_importador", type: "string" },
    { name: "cabinplant", type: "string" },
    { name: "lote", type: "string" },
    { name: "proveedor", type: "string" },
    { name: "co_talla", type: "string" },
    { name: "pesoNetoFresco", type: "number" },
    { name: "peso_bruto", type: "number" },
    { name: "unidad_medida", type: "string" },
    { name: "pesoCongelado", type: "number" },
    { name: "pesoDescongelado", type: "number" },
    { name: "Cta_PesoNetoFresco", type: "number" },
    { name: "Cta_PesoCongelado", type: "number" },
    { name: "Cta_PesoDescongelado", type: "number" },
    { name: "observaciones", type: "string", isOptional: true },
    { name: "UsuCrea", type: "string" },
    { name: "created_at", type: "number" },
    { name: "UsuModi", type: "string", isOptional: true },
    { name: "updated_at", type: "number" },
    { name: "correccion", type: "number" },
    { name: "foto", type: "number" },
    // TODO: Quitar estado
    { name: "estado", type: "number" },
    { name: "state", type: "number" },
    { name: "planta_id", type: "number", isOptional: true },
    { name: "remote_id", type: "number" },
  ],
});

export const empty = {
  tipo_analisis: "",
  co_importador: "",
  cabinplant: "",
  lote: "",
  proveedor: "",
  co_talla: "",
  pesoNetoFresco: 0,
  peso_bruto: 0,
  unidad_medida: "",
  pesoCongelado: 0,
  pesoDescongelado: 0,
  Cta_PesoNetoFresco: 0,
  Cta_PesoCongelado: 0,
  Cta_PesoDescongelado: 0,
  observaciones: null,
  UsuCrea: "",
  createdAt: 0,
  UsuModi: null,
  updatedAt: 0,
  correccion: 0,
  foto: 0,
  // TODO: Quitar estado
  estado: 0,
  state: 0,
  planta_id: null,
  remote_id: 0,
};