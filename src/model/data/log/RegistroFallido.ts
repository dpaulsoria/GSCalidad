import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date, readonly } from "@nozbe/watermelondb/decorators";

export const name = "a26401_registros_fallidos";

export class RegistroFallidoModel extends Model {
  static table = name;

  @text("message") message!: string | null;
  @text("tipo_reporte") tipo_reporte!: string;
  @field("remote_id") remote_id!: number;
  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number | null;
  @readonly @date("deleted_at") deletedAt!: number | null;
}

export const RegistroFallidoSchema = tableSchema({
  name,
  columns: [
    { name: "message", type: "string", isOptional: true },
    { name: "tipo_reporte", type: "string" },
    { name: "remote_id", type: "number" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number", isOptional: true },
    { name: "deleted_at", type: "number", isOptional: true },
  ],
});
