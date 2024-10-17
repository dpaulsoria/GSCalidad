import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

export const name = "a20t1";

export class ImportadoresModel extends Model {
  static table = name;

  @text("name") name!: string; // nombre
  @text("value") tipo!: string; // co_importador
  @field("remote_id") remote_id!: number;
  @field("created_at") created_at!: number;
  @field("updated_at") updated_at!: number;
  @field("deleted_at") deleted_at!: number | null;
}

export const ImportadoresSchema = tableSchema({
  name,
  columns: [
      { name: "name", type: "string" },
      { name: "value", type: "string" },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "number" },
      { name: "updated_at", type: "number" },
      { name: "deleted_at", type: "number", isOptional: true },
  ],
});
