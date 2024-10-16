import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

export const name = "a26401_cc_tipo_registro";

export class TipoRegistroModel extends Model {
  static table = name;

  @text("name") name!: string;
  @text("code") tipo!: string;
  @text("descripcion") nota!: string | null;
  @field("register_state") register_state!: number;
  @field("remote_id") remote_id!: number;
  @field("created_at") created_at!: number;
  @field("updated_at") updated_at!: number;
  @field("deleted_at") deleted_at!: number | null;
}

export const TipoRegistroSchema = tableSchema({
  name,
  columns: [
      { name: "name", type: "string" },
      { name: "code", type: "string" },
      { name: "descripcion", type: "string", isOptional: true },
      { name: "register_state", type: "number" },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "number" },
      { name: "updated_at", type: "number" },
      { name: "deleted_at", type: "number", isOptional: true },
  ],
});
