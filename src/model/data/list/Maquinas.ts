import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

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
