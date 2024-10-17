import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date } from "@nozbe/watermelondb/decorators";

export const name = "a26401_registros_por_area";

export class RegistrosAreaModel extends Model {
  static table = name;

  @text("tipo_registro_id") name!: number;
  @text("area_id") tipo!: number;
  @field("remote_id") remote_id!: number;
  @date("created_at") created_at!: string;
  @date("updated_at") updated_at!: string | null;
  @date("deleted_at") deleted_at!: string | null;
}

export const RegistrosAreaSchema = tableSchema({
  name,
  columns: [
      { name: "tipo_registro_id", type: "number" },
      { name: "area_id", type: "number" },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "string" },
      { name: "updated_at", type: "string", isOptional: true },
      { name: "deleted_at", type: "string", isOptional: true },
  ],
});
