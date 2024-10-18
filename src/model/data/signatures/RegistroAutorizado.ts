import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date, readonly } from "@nozbe/watermelondb/decorators";

export const name = "a26401_registros_autorizados";

export class RegistroAutorizadoModel extends Model {
  static table = name;

  @field("firma_id") firma_id!: number;
  @field("rol_id") rol_id!: number;
  @field("registro_id") registro_id!: number;
  @field("tipo_reporte") tipo_reporte!: number;
  @field("remote_id") remote_id!: number;
  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number | null;
  @readonly @date("deleted_at") deletedAt!: number | null;
}

export const RegistroAutorizadoSchema = tableSchema({
  name,
  columns: [
    { name: "firma_id", type: "number"},
    { name: "rol_id", type: "number"},
    { name: "registro_id", type: "number"},
    { name: "tipo_reporte", type: "number"},
    { name: "fecha_creacion", type: "string"},
    { name: "fecha_actualizacion", type: "string"},
    { name: "remote_id", type: "number"},
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number", isOptional: true },
    { name: "deleted_at", type: "number", isOptional: true },
  ],
});