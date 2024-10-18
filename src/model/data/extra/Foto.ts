import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date, readonly } from "@nozbe/watermelondb/decorators";

export const name = "a26401_foto";

export class FotosModel extends Model {
  static table = name;

  @field("id_reporte") id_reporte!: number; // remote_id?
  @text("TipoReporte") TipoReporte!: string;
  @text("Nombre") Nombre!: string;
  @text("mime") mime!: string;
  @text("path") path!: string;
  @text("disk") disk!: string;
  @text("real_path") real_path!: string;
  @field("remote_id") remote_id!: number;
  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number | null;
  @readonly @date("deleted_at") deletedAt!: number | null;
}

export const FotosSchema = tableSchema({
  name,
  columns: [
      { name: "id_reporte", type: "number" },
      { name: "TipoReporte", type: "string" },
      { name: "Nombre", type: "string" },
      { name: "mime", type: "string" },
      { name: "path", type: "string" },
      { name: "disk", type: "string" },
      { name: "real_path", type: "string" },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "number" },
      { name: "updated_at", type: "number", isOptional: true },
      { name: "deleted_at", type: "number", isOptional: true },
  ],
});
