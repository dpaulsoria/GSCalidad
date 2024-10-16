import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date } from "@nozbe/watermelondb/decorators";

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
  @text("UsuCrea") UsuCrea!: string | null;
  @date("FechaCrea") FechaCrea!: string | null;
  @field("planta_id") planta_id!: number | null;
  @text("UsuModi") UsuModi!: string | null;
  @date("FechaModi") FechaModi!: string | null;
  @field("state") state!: number;
  @field("remote_id") remote_id!: number;
}

export const ClasificacionCamaronEnteroSchema = tableSchema({
  name: "a26401_clasificacion_camaron_entero",
  columns: [
    { name: "lote", type: "string" },
    { name: "co_proveedor_gr", type: "string" },
    { name: "tipo", type: "number" },
    { name: "piscina", type: "string" },
    { name: "tallas", type: "string" },
    { name: "gramos_promedio", type: "number" },
    { name: "clasificacion_promedio", type: "string" },
    { name: "UsuCrea", type: "string", isOptional: true },
    { name: "FechaCrea", type: "string", isOptional: true },
    { name: "planta_id", type: "number", isOptional: true },
    { name: "UsuModi", type: "string", isOptional: true },
    { name: "FechaModi", type: "string", isOptional: true },
    { name: "state", type: "number" },
    { name: "remote_id", type: "number" },
  ],
});
