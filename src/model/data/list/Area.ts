import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date, readonly } from "@nozbe/watermelondb/decorators";

export const name = "a26401_sp_areas";

export class AreasModel extends Model {
  static table = name;

  @text("name") name!: string;
  @text("value") tipo!: string;
  @field("remote_id") remote_id!: number;
  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number | null;
  @readonly @date("deleted_at") deletedAt!: number | null;
}

export const AreasSchema = tableSchema({
  name,
  columns: [
      { name: "name", type: "string" },
      { name: "value", type: "string" },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "number" },
      { name: "updated_at", type: "number", isOptional: true },
      { name: "deleted_at", type: "number", isOptional: true },
  ],
});
