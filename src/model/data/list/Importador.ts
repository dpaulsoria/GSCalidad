import { VSelectOption } from "@/store/util/store";
import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date, readonly } from "@nozbe/watermelondb/decorators";

export const name = "a20t1";

export class ImportadoresModel extends Model implements VSelectOption {
  static table = name;

  @text("name") name!: string; // nombre
  @text("value") value!: number; // co_importador
  @field("remote_id") remote_id!: number;
  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number ;
  @readonly @date("deleted_at") deletedAt!: number | null;
}

export const ImportadoresSchema = tableSchema({
  name,
  columns: [
      { name: "name", type: "string" },
      { name: "value", type: "number" },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "number" },
      { name: "updated_at", type: "number" },
      { name: "deleted_at", type: "number", isOptional: true },
  ],
});
