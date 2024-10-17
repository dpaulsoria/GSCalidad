import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

export const name = "a20t6";

export class ProveedoresINPModel extends Model {
  static table = name;

  @text("name") name!: string; // nombre
  @text("value") inp!: string; // INP
  @text("co_prov") co_prov!: number; // co_prov
  @field("remote_id") remote_id!: number;
  @field("created_at") created_at!: number;
  @field("updated_at") updated_at!: number;
  @field("deleted_at") deleted_at!: number | null;
}

export const ProveedoresINPSchema = tableSchema({
  name,
  columns: [
      { name: "name", type: "string" },
      { name: "value", type: "string" },
      { name: "co_prov", type: "number" },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "number" },
      { name: "updated_at", type: "number" },
      { name: "deleted_at", type: "number", isOptional: true },
  ],
});
