import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date } from "@nozbe/watermelondb/decorators";

export const name = "a26401_areas";

export class AreasProcesoModel extends Model {
  static table = name;

  @text("name") name!: string;
  @text("nota") nota!: string | null;
  @field("remote_id") remote_id!: number;
  @date("created_at") created_at!: string;
  @date("updated_at") updated_at!: string | null;
  @date("deleted_at") deleted_at!: string | null;
}

export const AreasProcesoSchema = tableSchema({
  name,
  columns: [
      { name: "name", type: "string" },
      { name: "nota", type: "string", isOptional: true },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "string" },
      { name: "updated_at", type: "string", isOptional: true },
      { name: "deleted_at", type: "string", isOptional: true },
  ],
});
