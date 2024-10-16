import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

export const name = "a26401_registros_fallidos";

export class RegistroFallidoModel extends Model {
  static table = name;

  @text("message") message!: string | null;
  @text("FechaCrea") FechaCrea!: string;
  @text("tipo_reporte") tipo_reporte!: string;
  @field("remote_id") remote_id!: number;
  // @field("created_at") created_at!: number;
  // @field("updated_at") updated_at!: number;
  // @field("deleted_at") deleted_at!: number | null;
}

export const RegistroFallidoSchema = tableSchema({
  name,
  columns: [
    { name: "message", type: "string", isOptional: true },
    { name: "FechaCrea", type: "string" },
    { name: "tipo_reporte", type: "string" },
    { name: "remote_id", type: "number" },
    // { name: "created_at", type: "number" },
    // { name: "updated_at", type: "number" },
    // { name: "deleted_at", type: "number", isOptional: true },
  ],
});
