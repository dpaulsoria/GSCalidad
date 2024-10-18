import { Migrable } from "@/types/Migrable";
import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date, readonly, nochange } from "@nozbe/watermelondb/decorators";

export const name = "a26401_inspeccion_preliminar";

export class InspeccionPreeliminarModel extends Model implements Migrable {
  static table = name;

  // TODO: Poner la fecha de created_at en fecha en el beforePush
  @date("fecha") fecha!: string;
  @text("proveedor") proveedor!: string;
  @text("registro_inp") registro_inp!: string | null;
  @field("temperatura") temperatura!: number;
  @text("gavetas") gavetas!: string;
  @text("garantia") garantia!: string;
  @text("movil") movil!: string;
  @text("escala") escala!: string; //  Escala de colores
  @field("sulfitos") sulfitos!: number;
  @field("tipo_fuerte") tipo_fuerte!: number;
  @field("tipo_medio") tipo_medio!: number;
  @field("tipo_leve") tipo_leve!: number;
  @field("unidad_muestreada_sabor") unidad_muestreada_sabor!: number;
  @field("unidad_muestreada_valor") unidad_muestreada_valor!: number;
  @field("valor_reventada") valor_reventada!: number;
  @field("valor_verde") valor_verde!: number;
  @field("valor_marron") valor_marron!: number;
  @field("valor_negra") valor_negra!: number;
  @text("lote") lote!: string | null;
  @text("jefe_planta") jefe_planta!: string;
  @text("fauna") fauna!: string;
  @text("materiales") materiales!: string;
  @field("gramos_promedio") gramos_promedio!: number;
  @text("producto") producto!: string;
  @field("correccion") correccion!: number;
  @field("foto") foto!: number;
  @field("terminado") terminado!: number;
  @text("hora") hora!: string | null;
  @text("jefe_calidad") jefe_calidad!: string;
  @text("clasificacion_promedio") clasificacion_promedio!: string;
  @field("buenos_empaque") buenos_empaque!: number;
  @field("total_demeritos") total_demeritos!: number;
  @text("observacion") observacion!: string | null;
  @nochange @text("UsuCrea") UsuCrea!: string;
  @readonly @date("created_at") createdAt!: number;
  @text("UsuModi") UsuModi!: string | null;
  @readonly @date("updated_at") updatedAt!: number | null;
  @field("remote_id") uuid!: number;
  @field("sabor_muy_fuerte_cabeza") sabor_muy_fuerte_cabeza!: number;
  @field("sabor_muy_fuerte_cola") sabor_muy_fuerte_cola!: number;
  @field("sabor_fuerte_cabeza") sabor_fuerte_cabeza!: number;
  @field("sabor_fuerte_cola") sabor_fuerte_cola!: number;
  @field("sabor_medio_cabeza") sabor_medio_cabeza!: number;
  @field("sabor_medio_cola") sabor_medio_cola!: number;
  @field("sabor_buena_cabeza") sabor_buena_cabeza!: number;
  @field("sabor_buena_cola") sabor_buena_cola!: number;
  @field("sabor_leve_cabeza") sabor_leve_cabeza!: number;
  @field("sabor_leve_cola") sabor_leve_cola!: number;
  @field("sabor_muy_leve_cabeza") sabor_muy_leve_cabeza!: number;
  @field("sabor_muy_leve_cola") sabor_muy_leve_cola!: number;
  @field("planta_id") planta_id!: number;
  @text("hora_analisis") hora_analisis!: string;
  @text("lote_apto") lote_apto!: string;
  @field("state") state!: number;
}
export const InspeccionPreeliminarSchema = tableSchema({
  name,
  columns: [
    { name: "id", type: "number" },
    { name: "fecha", type: "string" },
    { name: "proveedor", type: "string" },
    { name: "registro_inp", type: "string", isOptional: true },
    { name: "temperatura", type: "number" },
    { name: "gavetas", type: "string" },
    { name: "garantia", type: "string" },
    { name: "movil", type: "string" },
    { name: "escala", type: "string" },
    { name: "sulfitos", type: "number" },
    { name: "tipo_fuerte", type: "number" },
    { name: "tipo_medio", type: "number" },
    { name: "tipo_leve", type: "number" },
    { name: "unidad_muestreada_sabor", type: "number" },
    { name: "unidad_muestreada_valor", type: "number" },
    { name: "valor_reventada", type: "number" },
    { name: "valor_verde", type: "number" },
    { name: "valor_marron", type: "number" },
    { name: "valor_negra", type: "number" },
    { name: "lote", type: "string", isOptional: true },
    { name: "jefe_planta", type: "string" },
    { name: "fauna", type: "string" },
    { name: "materiales", type: "string" },
    { name: "gramos_promedio", type: "number" },
    { name: "producto", type: "string" },
    { name: "correccion", type: "number" },
    { name: "foto", type: "number" },
    { name: "terminado", type: "number" },
    { name: "hora", type: "string", isOptional: true },
    { name: "jefe_calidad", type: "string" },
    { name: "clasificacion_promedio", type: "string" },
    { name: "buenos_empaque", type: "number" },
    { name: "total_demeritos", type: "number" },
    { name: "observacion", type: "string", isOptional: true },
    { name: "UsuCrea", type: "string" },
    { name: "created_at", type: "number" },
    { name: "UsuModi", type: "string", isOptional: true },
    { name: "updated_at", type: "number", isOptional: true },
    { name: "remote_id", type: "number" },
    { name: "sabor_muy_fuerte_cabeza", type: "number" },
    { name: "sabor_muy_fuerte_cola", type: "number" },
    { name: "sabor_fuerte_cabeza", type: "number" },
    { name: "sabor_fuerte_cola", type: "number" },
    { name: "sabor_medio_cabeza", type: "number" },
    { name: "sabor_medio_cola", type: "number" },
    { name: "sabor_buena_cabeza", type: "number" },
    { name: "sabor_buena_cola", type: "number" },
    { name: "sabor_leve_cabeza", type: "number" },
    { name: "sabor_leve_cola", type: "number" },
    { name: "sabor_muy_leve_cabeza", type: "number" },
    { name: "sabor_muy_leve_cola", type: "number" },
    { name: "planta_id", type: "number" },
    { name: "hora_analisis", type: "string" },
    { name: "lote_apto", type: "string" },
    { name: "state", type: "number" },
  ],
});
