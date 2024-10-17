import { Migrable } from "@/types/Migrable";
import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date } from "@nozbe/watermelondb/decorators";

export const name = "a26401_inspeccion_preeliminar_cola";

export class InspeccionPreeliminarColaModel extends Model implements Migrable {
  static table = name;

  @text("lote") lote!: string;
  @text("piscina") piscina!: string;
  @field("peso_muestra") peso_muestra!: number;
  @field("flacidez") flacidez!: number;
  @field("mudados") mudados!: number;
  @field("rojos_semirosados") rojos_semirosados!: number;
  @field("quebrados") quebrados!: number;
  @field("necrosis") necrosis!: number;
  @field("deformes") deformes!: number;
  @field("melanosis") melanosis!: number;
  @field("corbatas") corbatas!: number;
  @field("maldescabezado") maldescabezado!: number;
  @field("luxados") luxados!: number;
  @field("manchados") manchados!: number;
  @field("otras_especies") otras_especies!: number;
  @field("juveniles") juveniles!: number;
  @field("reporte_id") reporte_id!: number;
  @field("picado_fuerte") picado_fuerte!: number;
  @field("picado_leve") picado_leve!: number;
  @field("deshidratados_leve") deshidratados_leve!: number;
  @field("deshidratados_fuerte") deshidratados_fuerte!: number;
  @field("principio_melanosis") principio_melanosis!: number;
  @date("created_at") created_at!: string;
  // ** No se utiliza, se pone por la interfaz
  @text("UsuCrea") UsuCrea!: string;
  @date("updated_at") updated_at!: string | null;
  // ** No se utiliza, se pone por la interfaz
  @text("UsuModi") UsuModi!: string | null;
  @date("deleted_at") deleted_at!: string | null;
  @field("state") state!: number;
}

export const InspeccionPreeliminarColaSchema = tableSchema({
  name,
  columns: [
    { name: "id", type: "number" },
    { name: "lote", type: "string" },
    { name: "piscina", type: "string" },
    { name: "peso_muestra", type: "number" },
    { name: "flacidez", type: "number" },
    { name: "mudados", type: "number" },
    { name: "rojos_semirosados", type: "number" },
    { name: "quebrados", type: "number" },
    { name: "necrosis", type: "number" },
    { name: "deformes", type: "number" },
    { name: "deshidratados", type: "number" },
    { name: "melanosis", type: "number" },
    { name: "corbatas", type: "number" },
    { name: "maldescabezado", type: "number" },
    { name: "luxados", type: "number" },
    { name: "manchados", type: "number" },
    { name: "otras_especies", type: "number" },
    { name: "juveniles", type: "number" },
    { name: "reporte_id", type: "number" },
    { name: "picado_fuerte", type: "number" },
    { name: "picado_leve", type: "number" },
    { name: "deshidratados_leve", type: "number" },
    { name: "deshidratados_fuerte", type: "number" },
    { name: "principio_melanosis", type: "number" },
    { name: "created_at", type: "string" },
    { name: "UsuCrea", type: "string" },
    { name: "updated_at", type: "string", isOptional: true },
    { name: "UsuModi", type: "string", isOptional: true },
    { name: "deleted_at", type: "string", isOptional: true },
    { name: "state", type: "number" },
  ]
});