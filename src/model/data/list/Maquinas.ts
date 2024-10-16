import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

/**
 * Nota: El nombre de la tabla corresponde a la tabla en prod de donde 
 * provienen los datos, sin embargo no se intenta hacen un "mirror" a esta 
 * tabla puesto que para esto se requiere agregar created_at, updated_at y
 * deleted_at.
 * Por lo que para evitar confilctos solo se actualiza en cada pull
 * TODO: Consultar a Eduardo sobre agregar estas columnas y 
 * el timestamps true en dicho modelo (de ser neceario)
 */
export const name = "a26t33";

export class MaquinasModel extends Model {
  static table = name;

  @text("name") name!: string; // descripcion
  @text("value") tipo!: string; // co_maquina
  @field("status") status!: number;
  @field("remote_id") remote_id!: number;
  @field("created_at") created_at!: number; // FechaCrea
  @field("updated_at") updated_at!: number; // FechaModi
  @field("deleted_at") deleted_at!: number | null;
}

export const MaquinasSchema = tableSchema({
  name,
  columns: [
      { name: "name", type: "string" },
      { name: "value", type: "string" },
      { name: "status", type: "number" },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "number" },
      { name: "updated_at", type: "number" },
      { name: "deleted_at", type: "number", isOptional: true },
  ],
});
