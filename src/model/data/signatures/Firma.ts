import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

export const name = "a26401_cc_tipo_registro";

export class FirmasModel extends Model {
  static table = name;

  @text("user_id") name!: number;
  @text("rol_id") tipo!: number;
  @text("store_path") nota!: string | null;
  @field("password") register_state!: string;
  @field("remote_id") remote_id!: number;
  @field("created_at") created_at!: number;
  @field("updated_at") updated_at!: number;
  @field("deleted_at") deleted_at!: number | null;
}

export const FirmasSchema = tableSchema({
  name,
  columns: [
      { name: "user_id", type: "number" },
      { name: "rol_id", type: "number" },
      { name: "store_path", type: "string", isOptional: true },
      { name: "password", type: "string" },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "number" },
      { name: "updated_at", type: "number" },
      { name: "deleted_at", type: "number", isOptional: true },
  ],
});
