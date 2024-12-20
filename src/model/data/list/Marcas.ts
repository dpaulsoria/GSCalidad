import { VSelectOption } from "@/store/util/store";
import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date, readonly } from "@nozbe/watermelondb/decorators";

export const name = "a20t7";

export class MarcasModel extends Model implements VSelectOption {
  static table = name;

  @text("name") name!: string; // descripcion
  @text("value") value!: number; // co_marca
  @text("corta") corta!: string; // corta
  @field("remote_id") remote_id!: number;
  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number ;
  @readonly @date("deleted_at") deletedAt!: number | null;
}

export const MarcasSchema = tableSchema({
  name,
  columns: [
      { name: "name", type: "string" },
      { name: "value", type: "number" },
      { name: "corta", type: "string" },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "number" },
      { name: "updated_at", type: "number" },
      { name: "deleted_at", type: "number", isOptional: true },
  ],
});
