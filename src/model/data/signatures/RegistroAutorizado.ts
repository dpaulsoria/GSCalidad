import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

export const name = "a26401_registros_autorizados";

export class RegistroAutorizadoModel extends Model {
  static table = name;

  @field("firma_id") firma_id!: number;
  @field("rol_id") rol_id!: number;
  @field("registro_id") registro_id!: number;
  @field("tipo_reporte") tipo_reporte!: number;
  @text("fecha_creacion") fecha_creacion!: string;
  @text("fecha_actualizacion") fecha_actualizacion!: string;
  @field("remote_id") remote_id!: number;
  // @field("created_at") created_at!: number;
  // @field("updated_at") updated_at!: number;
  // @field("deleted_at") deleted_at!: number | null;
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
    // { name: "created_at", type: "number" },
    // { name: "updated_at", type: "number" },
    // { name: "deleted_at", type: "number", isOptional: true },
  ],
});