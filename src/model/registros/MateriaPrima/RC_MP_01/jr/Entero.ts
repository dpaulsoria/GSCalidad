import { Migrable } from "@/types/Migrable";
import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date, nochange, readonly } from "@nozbe/watermelondb/decorators";

export const name = "a26401_inspeccion_preeliminar_entero";

export class InspeccionPreeliminarEnteroModel extends Model implements Migrable {
  static table = name;

  @text("lote") lote!: string;
  @text("piscina") piscina!: string;
  @field("peso_muestra") peso_muestra!: number;
  @field("cabeza_floja") cabeza_floja!: number;
  @field("hepato") hepato!: number;
  @field("branquias") branquias!: number;
  @field("flacidez") flacidez!: number;
  @field("mudados") mudados!: number;
  @field("cabeza_descolgada") cabeza_descolgada!: number;
  @field("cabeza_roja") cabeza_roja!: number;
  @field("cabeza_anaranjada") cabeza_anaranjada!: number;
  @field("quebrados") quebrados!: number;
  @field("picado_fuerte") picado_fuerte!: number;
  @field("picado_leve") picado_leve!: number;
  @field("deformes") deformes!: number;
  @field("deshidratados") deshidratados!: number;
  @field("melanosis") melanosis!: number;
  @field("otras_especies") otras_especies!: number;
  @field("juveniles") juveniles!: number;
  @field("reporte_id") reporte_id!: number;
  @field("deshidratados_leve") deshidratados_leve!: number;
  @field("deshidratados_fuerte") deshidratados_fuerte!: number;
  @field("principio_melanosis") principio_melanosis!: number;
  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number;
  @readonly @date("deleted_at") deletedAt!: number | null;
  @field("state") state!: number;
  // ** No se utiliza, se pone por la interfaz
  @nochange @text("UsuCrea") UsuCrea!: string;
  @text("UsuModi") UsuModi!: string | null;
}

export const InspeccionPreeliminarEnteroSchema = tableSchema({
  name,
  columns: [
    { name: "lote", type: "string" },
    { name: "piscina", type: "string" },
    { name: "peso_muestra", type: "number" },
    { name: "cabeza_floja", type: "number" },
    { name: "hepato", type: "number" },
    { name: "branquias", type: "number" },
    { name: "flacidez", type: "number" },
    { name: "mudados", type: "number" },
    { name: "cabeza_descolgada", type: "number" },
    { name: "cabeza_roja", type: "number" },
    { name: "cabeza_anaranjada", type: "number" },
    { name: "quebrados", type: "number" },
    { name: "picado_fuerte", type: "number" },
    { name: "picado_leve", type: "number" },
    { name: "deformes", type: "number" },
    { name: "deshidratados", type: "number" },
    { name: "melanosis", type: "number" },
    { name: "otras_especies", type: "number" },
    { name: "juveniles", type: "number" },
    { name: "reporte_id", type: "number" },
    { name: "deshidratados_leve", type: "number" },
    { name: "deshidratados_fuerte", type: "number" },
    { name: "principio_melanosis", type: "number" },
    { name: "created_at", type: "number" },
    { name: "UsuCrea", type: "string" },
    { name: "updated_at", type: "number" },
    { name: "UsuModi", type: "string", isOptional: true },
    { name: "deleted_at", type: "number", isOptional: true },
    { name: "state", type: "number" },
  ]
});
