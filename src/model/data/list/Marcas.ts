import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date } from "@nozbe/watermelondb/decorators";

export const name = "a20t7";

export class MarcasModel extends Model {
  static table = name;

  @text("name") name!: string; // descripcion
  @text("value") tipo!: string; // co_marca
  @text("corta") corta!: string; // corta
  @field("remote_id") remote_id!: number;
  @date("created_at") created_at!: string; // FechaCrea
  @date("updated_at") updated_at!: string | null; // FechaModi
  @date("deleted_at") deleted_at!: string | null;
}

export const MarcasSchema = tableSchema({
  name,
  columns: [
      { name: "name", type: "string" },
      { name: "value", type: "string" },
      { name: "corta", type: "string" },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "string" },
      { name: "updated_at", type: "string", isOptional: true },
      { name: "deleted_at", type: "string", isOptional: true },
  ],
});
