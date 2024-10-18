import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date, readonly } from "@nozbe/watermelondb/decorators";

export const name = "a26401_registros_por_area";

export class RegistrosPlantaModel extends Model {
  static table = name;

  @text("tipo_registro_id") name!: number;
  @text("planta_id") tipo!: number;
  @field("remote_id") remote_id!: number;
  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number;
  @readonly @date("deleted_at") deletedAt!: number | null;
}

export const RegistrosPlantaSchema = tableSchema({
  name,
  columns: [
      { name: "tipo_registro_id", type: "number" },
      { name: "planta_id", type: "number" },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "number" },
      { name: "updated_at", type: "number" },
      { name: "deleted_at", type: "number", isOptional: true },
  ],
});
