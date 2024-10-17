import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date } from "@nozbe/watermelondb/decorators";

export const name = "a26401_correcciones";

export class CorreccionesModel extends Model {
  static table = name;

  @field("id_reporte") id_reporte!: number; // remote_id?
  @text("TipoReporte") TipoReporte!: string;
  @text("Lugar") Lugar!: string;
  @text("Problema") Problema!: string;
  @text("Acciones") Acciones!: string;
  @text("Desviacion") Desviacion!: string | null;
  @text("FechaVerificacion") FechaVerificacion!: string | null;
  @text("ResponsableArea") ResponsableArea!: string | null;
  @text("Observacion") Observacion!: string | null;
  @field("remote_id") remote_id!: number;
  @date("created_at") created_at!: string;
  @date("updated_at") updated_at!: string | null;
  @date("deleted_at") deleted_at!: string | null;
}

export const CorreccionesSchema = tableSchema({
  name,
  columns: [
      { name: "id_reporte", type: "number" },
      { name: "TipoReporte", type: "string" },
      { name: "Lugar", type: "string" },
      { name: "Problema", type: "string" },
      { name: "Acciones", type: "string" },
      { name: "Desviacion", type: "string", isOptional: true },
      { name: "FechaVerificacion", type: "string", isOptional: true },
      { name: "ResponsableArea", type: "string", isOptional: true },
      { name: "Observacion", type: "string", isOptional: true },
      { name: "remote_id", type: "number" },
      { name: "created_at", type: "string" },
      { name: "updated_at", type: "string", isOptional: true },
      { name: "deleted_at", type: "string", isOptional: true },
  ],
});
