import { Migrable } from "@/types/Migrable";
import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date, readonly, nochange } from "@nozbe/watermelondb/decorators";

export const name = "a26401_clasificacion_camaron_entero";

// TODO: Agregar al esquema y la db
// TODO: Primero revisar 

export class ClasificacionCamaronEnteroModel extends Model implements Migrable {
  static table = name;

  @text("lote") lote!: string;
  @text("co_proveedor_gr") co_proveedor_gr!: string;
  @field("tipo") tipo!: number; // Materia Prima = 1 
  @text("piscina") piscina!: string;
  @text("tallas") tallas!: string;
  @field("gramos_promedio") gramos_promedio!: number;
  @text("clasificacion_promedio") clasificacion_promedio!: string;
  @nochange @text("UsuCrea") UsuCrea!: string;
  @readonly @date("created_at") createdAt!: number;
  @text("UsuModi") UsuModi!: string | null;
  @readonly @date("updated_at") updatedAt!: number;
  @field("state") state!: number;
  @field("planta_id") planta_id!: number | null;
  @field("remote_id") remote_id!: number;
}

export const ClasificacionCamaronEnteroSchema = tableSchema({
  name,
  columns: [
    { name: "lote", type: "string" },
    { name: "co_proveedor_gr", type: "string" },
    { name: "tipo", type: "number" },
    { name: "piscina", type: "string" },
    { name: "tallas", type: "string" },
    { name: "gramos_promedio", type: "number" },
    { name: "clasificacion_promedio", type: "string" },
    { name: "UsuCrea", type: "string" },
    { name: "created_at", type: "number" },
    { name: "planta_id", type: "number", isOptional: true },
    { name: "UsuModi", type: "string", isOptional: true },
    { name: "updated_at", type: "number" },
    { name: "state", type: "number" },
    { name: "remote_id", type: "number" },
  ],
});
