import { VSelectOption } from "@/store/util/store";
import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date, readonly } from "@nozbe/watermelondb/decorators";

export const name = "a20t6";

export class ProveedoresINPModel extends Model implements VSelectOption {
  static table = name;

  @text("name") name!: string; // nombre
  @text("value") value!: string; // INP
  @text("co_prov") co_prov!: number; // co_prov
  @field("remote_id") remote_id!: number;
  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number ;
  @readonly @date("deleted_at") deletedAt!: number | null;
}

export const ProveedoresINPSchema = tableSchema({
  name,
  columns: [
      { name: "name", type: "string" },
      { name: "value", type: "string" },
      { name: "co_prov", type: "number" },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "number" },
      { name: "updated_at", type: "number"},
      { name: "deleted_at", type: "number", isOptional: true },
  ],
});
