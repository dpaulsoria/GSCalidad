import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date } from "@nozbe/watermelondb/decorators";

export const name = "a26401_registros_autorizados";

export class RegistroAutorizadoModel extends Model {
  static table = name;

  @field("firma_id") firma_id!: number;
  @field("rol_id") rol_id!: number;
  @field("registro_id") registro_id!: number;
  @field("tipo_reporte") tipo_reporte!: number;
  @field("remote_id") remote_id!: number;
  @date("created_at") created_at!: string;
  @date("updated_at") updated_at!: string | null;
  @date("deleted_at") deleted_at!: string | null;
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
    { name: "created_at", type: "string" },
    { name: "updated_at", type: "string", isOptional: true },
    { name: "deleted_at", type: "string", isOptional: true },
  ],
});