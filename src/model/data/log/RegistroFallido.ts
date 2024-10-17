import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date } from "@nozbe/watermelondb/decorators";

export const name = "a26401_registros_fallidos";

export class RegistroFallidoModel extends Model {
  static table = name;

  @text("message") message!: string | null;
  @text("tipo_reporte") tipo_reporte!: string;
  @field("remote_id") remote_id!: number;
  @date("created_at") created_at!: string;
  @date("updated_at") updated_at!: string | null;
  @date("deleted_at") deleted_at!: string | null;
}

export const RegistroFallidoSchema = tableSchema({
  name,
  columns: [
    { name: "message", type: "string", isOptional: true },
    { name: "tipo_reporte", type: "string" },
    { name: "remote_id", type: "number" },
    { name: "created_at", type: "string" },
    { name: "updated_at", type: "string", isOptional: true },
    { name: "deleted_at", type: "string", isOptional: true },
  ],
});
