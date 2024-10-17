import { Migrable } from "@/types/Migrable";
import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date } from "@nozbe/watermelondb/decorators";

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
  @text("UsuCrea") UsuCrea!: string;
  @date("updated_at") created_at!: string;
  @text("UsuModi") UsuModi!: string | null;
  @date("updated_at") updated_at!: string | null;
  @field("correccion") correccion!: number;
  @field("foto") foto!: number;
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
    { name: "created_at", type: "string" },
    { name: "UsuModi", type: "string", isOptional: true },
    { name: "updated_at", type: "string", isOptional: true },
    { name: "correccion", type: "number" },
    { name: "foto", type: "number" },
    { name: "estado", type: "number" },
    { name: "state", type: "number" },
    { name: "planta_id", type: "number", isOptional: true },
    { name: "remote_id", type: "number" },
  ],
});
