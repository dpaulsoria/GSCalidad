import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date } from "@nozbe/watermelondb/decorators";

export const name = "a26401_control_pt_congelado_fresco";

export class ProdTerminadoModel extends Model {
  static table = name;

  @text("fecha_etiqueta") fecha_etiqueta!: string;
  @text("tipo_control") tipo_control!: string;
  @text("area") area!: string;
  @text("tipo_producto") tipo_producto!: string;
  @text("presentacion") presentacion!: string;
  @text("unidad_medida") unidad_medida!: string;
  @text("tipo_muestreo") tipo_muestreo!: string;
  @text("lote") lote!: string;
  @field("cliente") cliente!: number;
  @field("temperatura") temperatura!: number;
  @field("talla_real") talla_real!: number;
  @field("talla_marcada") talla_marcada!: number;
  @field("peso_bruto") peso_bruto!: number;
  @field("peso_sin_funda") peso_sin_funda!: number;
  @field("peso_neto") peso_neto!: number;
  @field("glaseo") glaseo!: number;
  @field("cta_congelada") cta_congelada!: number;
  @field("cta_final") cta_final!: number;
  @field("cuenta_total") cuenta_total!: number;
  @field("peso_muestra") peso_muestra!: number;
  @text("olor") olor!: string;
  @text("sabor") sabor!: string;
  @field("uniformidad_g") uniformidad_g!: number;
  @field("uniformidad_p") uniformidad_p!: number;
  @field("uniformidad_t") uniformidad_t!: number;
  @field("mudados") mudados!: number;
  @field("flacidez") flacidez!: number;
  @field("deformes") deformes!: number;
  @field("picados") picados!: number;
  @field("cola_floja") cola_floja!: number;
  @field("deshidratados") deshidratados!: number;
  @field("principio_melanosis") principio_melanosis!: number;
  @field("melanosis") melanosis!: number;
  @field("pelado_vena") pelado_vena!: number;
  @field("falta_corte") falta_corte!: number;
  @field("corte_largo") corte_largo!: number;
  @field("corte_profundo") corte_profundo!: number;
  @field("corte_irregular") corte_irregular!: number;
  @field("cascara") cascara!: number;
  @field("patas") patas!: number;
  @field("quebrados") quebrados!: number;
  @field("luxados") luxados!: number;
  @field("quebrado_3") quebrado_3!: number;
  @field("cola_danada") cola_danada!: number;
  @field("pedazos") pedazos!: number;
  @field("corbatas") corbatas!: number;
  @field("rosados") rosados!: number;
  @field("semi_rosados") semi_rosados!: number;
  @field("mal_descabezado") mal_descabezado!: number;
  @field("juveniles") juveniles!: number;
  @field("intestinos") intestinos!: number;
  @field("residuos_venas") residuos_venas!: number;
  @field("cascara_floja") cascara_floja!: number;
  @field("mal_desvenado") mal_desvenado!: number;
  @field("sin_telson") sin_telson!: number;
  @field("total_defecto") total_defecto!: number;
  @field("calidad") calidad!: number | null;
  @field("fundas") fundas!: number | null;
  @field("etiquetado") etiquetado!: number | null;
  @field("sulfitos") sulfitos!: number | null;
  @field("crustaceos") crustaceos!: number | null;
  @field("tratamiento") tratamiento!: number | null;
  @text("observacion") observacion!: string | null;
  @text("UsuCrea") UsuCrea!: string | null;
  @date("FechaCrea") FechaCrea!: string | null;
  @text("UsuModi") UsuModi!: string | null;
  @date("FechaModi") FechaModi!: string | null;
  @field("state") state!: number;
  @field("planta_id") planta_id!: number | null;
}


export const ProdTerminadoSchema = tableSchema({
    name: "a26401_control_pt_congelado_fresco",
    columns: [
      { name: "fecha_etiqueta", type: "string" },
      { name: "tipo_control", type: "string" },
      { name: "area", type: "string" },
      { name: "tipo_producto", type: "string" },
      { name: "presentacion", type: "string" },
      { name: "unidad_medida", type: "string" },
      { name: "tipo_muestreo", type: "string" },
      { name: "lote", type: "string" },
      { name: "cliente", type: "number" },
      { name: "temperatura", type: "number" },
      { name: "talla_real", type: "number" },
      { name: "talla_marcada", type: "number" },
      { name: "peso_bruto", type: "number" },
      { name: "peso_sin_funda", type: "number" },
      { name: "peso_neto", type: "number" },
      { name: "glaseo", type: "number" },
      { name: "cta_congelada", type: "number" },
      { name: "cta_final", type: "number" },
      { name: "cuenta_total", type: "number" },
      { name: "peso_muestra", type: "number", isOptional: true },
      { name: "olor", type: "string" },
      { name: "sabor", type: "string" },
      { name: "uniformidad_g", type: "number" },
      { name: "uniformidad_p", type: "number" },
      { name: "uniformidad_t", type: "number" },
      { name: "state", type: "number" },
      { name: "observacion", type: "string", isOptional: true },
      { name: "UsuCrea", type: "string", isOptional: true },
      { name: "FechaCrea", type: "string", isOptional: true },
      { name: "UsuModi", type: "string", isOptional: true },
      { name: "FechaModi", type: "string", isOptional: true },
      { name: "planta_id", type: "number", isOptional: true },
    ],
  });