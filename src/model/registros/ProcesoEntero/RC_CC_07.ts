import { Migrable } from "@/types/Migrable";
import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date } from "@nozbe/watermelondb/decorators";

export const name = "a26401_proceso_entero_fresco";

export class ProcesoEnteroFrescoModel extends Model implements Migrable {
  static table = name;

  @text("Fecha") Fecha!: string;
  @field("co_maquina") co_maquina!: number;
  @field("Marca") Marca!: number;
  @field("Importador") Importador!: number;
  @text("Proveedor") Proveedor!: string | null;
  @text("unidad") unidad!: string;
  @text("Lote") Lote!: string;
  @field("co_talla") co_talla!: number;
  @field("Peso_Bruto") Peso_Bruto!: number;
  @field("Peso_Neto") Peso_Neto!: number;
  @field("peso_muestra") peso_muestra!: number;
  @field("Cuenta_Total") Cuenta_Total!: number;
  @field("CuentaXLibra") CuentaXLibra!: number;
  @field("UniformidadG") UniformidadG!: number;
  @field("UniformidadP") UniformidadP!: number;
  @field("uniformidadUT") uniformidadUT!: number;
  @text("hora_analisis") hora_analisis!: string;
  
  @field("Cabeza_Anaranjada") Cabeza_Anaranjada!: number;
  @field("Cabeza_Floja") Cabeza_Floja!: number;
  @field("Cabeza_Descolgada") Cabeza_Descolgada!: number;
  @field("Hepatopanc") Hepatopanc!: number;
  @field("Flacidos") Flacidos!: number;
  @field("Mudados") Mudados!: number;
  @field("Cabeza_Roja") Cabeza_Roja!: number;
  @field("Melanosis") Melanosis!: number;
  @field("deshidratados_leve") deshidratados_leve!: number;
  @field("deshidratados_fuerte") deshidratados_fuerte!: number;
  @field("picado_leve") picado_leve!: number;
  @field("picado_fuerte") picado_fuerte!: number;
  @field("branquias_sucias") branquias_sucias!: number;
  @field("branquias_verdes") branquias_verdes!: number;
  @field("principio_melanosis") principio_melanosis!: number;
  @field("Juveniles") Juveniles!: number;
  @field("Deformes") Deformes!: number;
  @field("Quebrados") Quebrados!: number;
  @field("Materiales_extranos") Materiales_extranos!: number;
  @field("Total_Defectos") Total_Defectos!: number;
  @text("Necrosis") Necrosis!: string;
  @field("Temperatura") Temperatura!: number;
  @text("Declara_Sulfitos") Declara_Sulfitos!: string;
  @text("Observaciones") Observaciones!: string | null;

  @text("UsuCrea") UsuCrea!: string;
  @date("created_at") created_at!: string;
  @text("UsuModi") UsuModi!: string | null;
  @date("updated_at") updated_at!: string | null;
  @field("correccion") correccion!: number;
  @field("foto") foto!: number;
  @field("planta_id") planta_id!: number | null;
  @field("state") state!: number;
  @field("remote_id") remote_id!: number;
}

export const ProcesoEnteroFrescoSchema = tableSchema({
  name,
  columns: [
    { name: "Fecha", type: "string" },
    { name: "co_maquina", type: "number" },
    { name: "Marca", type: "number" },
    { name: "Importador", type: "number" },
    { name: "Proveedor", type: "string", isOptional: true },
    { name: "unidad", type: "string" },
    { name: "Lote", type: "string" },
    { name: "co_talla", type: "number" },
    { name: "Peso_Bruto", type: "number" },
    { name: "Peso_Neto", type: "number" },
    { name: "peso_muestra", type: "number" },
    { name: "Cuenta_Total", type: "number" },
    { name: "CuentaXLibra", type: "number" },
    { name: "UniformidadG", type: "number" },
    { name: "UniformidadP", type: "number" },
    { name: "uniformidadUT", type: "number" },
    { name: "hora_analisis", type: "string" },
    { name: "Cabeza_Anaranjada", type: "number" },
    { name: "Cabeza_Floja", type: "number" },
    { name: "Cabeza_Descolgada", type: "number" },
    { name: "Hepatopanc", type: "number" },
    { name: "Flacidos", type: "number" },
    { name: "Mudados", type: "number" },
    { name: "Cabeza_Roja", type: "number" },
    { name: "Melanosis", type: "number" },
    { name: "deshidratados_leve", type: "number" },
    { name: "deshidratados_fuerte", type: "number" },
    { name: "picado_leve", type: "number" },
    { name: "picado_fuerte", type: "number" },
    { name: "branquias_sucias", type: "number" },
    { name: "branquias_verdes", type: "number" },
    { name: "principio_melanosis", type: "number" },
    { name: "Juveniles", type: "number" },
    { name: "Deformes", type: "number" },
    { name: "Quebrados", type: "number" },
    { name: "Materiales_extranos", type: "number" },
    { name: "Total_Defectos", type: "number" },
    { name: "Necrosis", type: "string" },
    { name: "Temperatura", type: "number" },
    { name: "Declara_Sulfitos", type: "string" },
    { name: "Observaciones", type: "string", isOptional: true },
    { name: "UsuCrea", type: "string" },
    { name: "created_at", type: "string" },
    { name: "UsuModi", type: "string", isOptional: true },
    { name: "updated_at", type: "string", isOptional: true },
    { name: "correccion", type: "number" },
    { name: "foto", type: "number" },
    { name: "planta_id", type: "number", isOptional: true },
    { name: "state", type: "number" },
    { name: "remote_id", type: "number" },
  ],
});
