import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date, readonly } from "@nozbe/watermelondb/decorators";

export const name = "a26401_areas";

export class AreasProcesoModel extends Model {
  static table = name;

  @text("name") name!: string;
  @text("nota") nota!: string | null;
  @field("remote_id") remote_id!: number;
  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number | null;
  @readonly @date("deleted_at") deletedAt!: number | null;
}

export const AreasProcesoSchema = tableSchema({
  name,
  columns: [
      { name: "name", type: "string" },
      { name: "nota", type: "string", isOptional: true },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "number" },
      { name: "updated_at", type: "number", isOptional: true },
      { name: "deleted_at", type: "number", isOptional: true },
  ],
});
