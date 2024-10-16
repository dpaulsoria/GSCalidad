import { Migrable } from "@/types/Migrable";
import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date } from "@nozbe/watermelondb/decorators";

export const name = "a26401_pelado_fresco";

export class PeladoFrescoModel extends Model implements Migrable {
    static table = name;

    @text("unidad_peso") unidad_peso!: string;
    @text("tipo_corte") tipo_corte!: string;
    @text("lote") lote!: string;
    @field("co_importador") co_importador!: number;
    @text("name_importador") name_importador!: string;
    @field("co_talla") co_talla!: number;
    @text("name_talla") name_talla!: string;
    @text("area") area!: string;
    @field("peso_muestra") peso_muestra!: number;
    @field("cuenta_libra") cuenta_libra!: number;
    @field("uniformidad_p") uniformidad_p!: number;
    @field("uniformidad_g") uniformidad_g!: number;
    @field("uniformidad_total") uniformidad_total!: number;
    @field("corte_irregular") corte_irregular!: number;
    @field("corte_largo") corte_largo!: number;
    @field("corte_profundo") corte_profundo!: number;
    @field("falta_corte") falta_corte!: number;
    @field("pud") pud!: number;
    @field("cascaras") cascaras!: number;
    @field("patas") patas!: number;
    @field("p_melanosis") p_melanosis!: number;
    @field("melanosis") melanosis!: number;
    @field("semirosado") semirosado!: number;
    @field("rosado") rosado!: number;
    @field("mudado") mudado!: number;
    @field("flacido") flacido!: number;
    @field("picado") picado!: number;
    @field("deshidratados") deshidratados!: number;
    @field("pedazos") pedazos!: number;
    @field("quebrado") quebrado!: number;
    @field("quebrado_3er") quebrado_3er!: number;
    @field("sin_telson") sin_telson!: number;
    @field("corbata") corbata!: number;
    @field("deforme") deforme!: number;
    @field("mal_descabezado") mal_descabezado!: number;
    @field("juvenil") juvenil!: number;
    @field("intestinos") intestinos!: number;
    @field("residuo_venas") residuo_venas!: number;
    @field("cascara_floja") cascara_floja!: number;
    @field("cascara_floja_6to") cascara_floja_6to!: number;
    @field("total_defectos") total_defectos!: number;
    @text("calidad") calidad!: string;
    @text("olor") olor!: string;
    @text("sabor") sabor!: string;
    @field("temperatura") temperatura!: number;
    @text("sulfito") sulfito!: string;
    @text("observacion") observacion!: string | null;
    @text("UsuCrea") UsuCrea!: string | null;
    @date("FechaCrea") FechaCrea!: string | null;
    @text("UsuModi") UsuModi!: string | null;
    @date("FechaModi") FechaModi!: string | null;
    @field("correccion") correccion!: number;
    @field("foto") foto!: number;
    @field("state") state!: number;
    @field("planta_id") planta_id!: number | null;
    @field("remote_id") remote_id!: number;
}

export const PeladoFrescoSchema = tableSchema({
    name,
    columns: [
        { name: "unidad_peso", type: "string" },
        { name: "tipo_corte", type: "string" },
        { name: "lote", type: "string" },
        { name: "co_importador", type: "number" },
        { name: "name_importador", type: "string" },
        { name: "co_talla", type: "number" },
        { name: "name_talla", type: "string" },
        { name: "area", type: "string" },
        { name: "peso_muestra", type: "number" },
        { name: "cuenta_libra", type: "number" },
        { name: "uniformidad_p", type: "number" },
        { name: "uniformidad_g", type: "number" },
        { name: "uniformidad_total", type: "number" },
        { name: "corte_irregular", type: "number" },
        { name: "corte_largo", type: "number" },
        { name: "corte_profundo", type: "number" },
        { name: "falta_corte", type: "number" },
        { name: "pud", type: "number" },
        { name: "cascaras", type: "number" },
        { name: "patas", type: "number" },
        { name: "p_melanosis", type: "number" },
        { name: "melanosis", type: "number" },
        { name: "semirosado", type: "number" },
        { name: "rosado", type: "number" },
        { name: "mudado", type: "number" },
        { name: "flacido", type: "number" },
        { name: "picado", type: "number" },
        { name: "deshidratados", type: "number" },
        { name: "pedazos", type: "number" },
        { name: "quebrado", type: "number" },
        { name: "quebrado_3er", type: "number" },
        { name: "sin_telson", type: "number" },
        { name: "corbata", type: "number" },
        { name: "deforme", type: "number" },
        { name: "mal_descabezado", type: "number" },
        { name: "juvenil", type: "number" },
        { name: "intestinos", type: "number" },
        { name: "residuo_venas", type: "number" },
        { name: "cascara_floja", type: "number" },
        { name: "cascara_floja_6to", type: "number" },
        { name: "total_defectos", type: "number" },
        { name: "calidad", type: "string" },
        { name: "olor", type: "string" },
        { name: "sabor", type: "string" },
        { name: "temperatura", type: "number" },
        { name: "sulfito", type: "string" },
        { name: "observacion", type: "string", isOptional: true },
        { name: "UsuCrea", type: "string", isOptional: true },
        { name: "FechaCrea", type: "string", isOptional: true },
        { name: "UsuModi", type: "string", isOptional: true },
        { name: "FechaModi", type: "string", isOptional: true },
        { name: "correccion", type: "number" },
        { name: "foto", type: "number" },
        { name: "state", type: "number" },
        { name: "planta_id", type: "number", isOptional: true },
        { name: "remote_id", type: "number" },
    ],
});
