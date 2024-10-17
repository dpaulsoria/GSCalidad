import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date } from "@nozbe/watermelondb/decorators";

export const name = "a26401_cc_tipo_registro";

export class FirmasModel extends Model {
  static table = name;

  @text("user_id") name!: number;
  @text("rol_id") tipo!: number;
  @text("store_path") nota!: string | null;
  @field("password") register_state!: string;
  @field("remote_id") remote_id!: number;
  @date("created_at") created_at!: string;
  @date("updated_at") updated_at!: string | null;
  @date("deleted_at") deleted_at!: string | null;
}

export const FirmasSchema = tableSchema({
  name,
  columns: [
      { name: "user_id", type: "number" },
      { name: "rol_id", type: "number" },
      { name: "store_path", type: "string", isOptional: true },
      { name: "password", type: "string" },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "string" },
      { name: "updated_at", type: "string", isOptional: true },
      { name: "deleted_at", type: "string", isOptional: true },
  ],
});
