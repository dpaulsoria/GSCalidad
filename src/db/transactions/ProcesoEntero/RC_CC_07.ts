import { db, rc07Collection } from "@/db";
import { ProcesoEnteroFrescoModel } from "@/model/registros/ProcesoEntero/RC_CC_07";

export const SaveProcesoEnteroFresco = async (
    it: ProcesoEnteroFrescoModel,
    plantaId: number
  ) => {
    await db.write(async () => {
      await rc07Collection.create((record: ProcesoEnteroFrescoModel) => {
        record.Fecha = it.Fecha;
        record.co_maquina = it.co_maquina;
        record.Marca = it.Marca;
        record.Importador = it.Importador;
        record.Proveedor = it.Proveedor;
        record.unidad = it.unidad;
        record.Lote = it.Lote;
        record.co_talla = it.co_talla;
        record.Peso_Bruto = it.Peso_Bruto;
        record.Peso_Neto = it.Peso_Neto;
        record.peso_muestra = it.peso_muestra;
        record.Cuenta_Total = it.Cuenta_Total;
        record.CuentaXLibra = it.CuentaXLibra;
        record.UniformidadG = it.UniformidadG;
        record.UniformidadP = it.UniformidadP;
        record.uniformidadUT = it.uniformidadUT;
        record.hora_analisis = it.hora_analisis;
        record.Cabeza_Anaranjada = it.Cabeza_Anaranjada;
        record.Cabeza_Floja = it.Cabeza_Floja;
        record.Cabeza_Descolgada = it.Cabeza_Descolgada;
        record.Hepatopanc = it.Hepatopanc;
        record.Flacidos = it.Flacidos;
        record.Mudados = it.Mudados;
        record.Cabeza_Roja = it.Cabeza_Roja;
        record.Melanosis = it.Melanosis;
        record.deshidratados_leve = it.deshidratados_leve;
        record.deshidratados_fuerte = it.deshidratados_fuerte;
        record.picado_leve = it.picado_leve;
        record.picado_fuerte = it.picado_fuerte;
        record.branquias_sucias = it.branquias_sucias;
        record.branquias_verdes = it.branquias_verdes;
        record.principio_melanosis = it.principio_melanosis;
        record.Juveniles = it.Juveniles;
        record.Deformes = it.Deformes;
        record.Quebrados = it.Quebrados;
        record.Materiales_extranos = it.Materiales_extranos;
        record.Total_Defectos = it.Total_Defectos;
        record.Necrosis = it.Necrosis;
        record.Temperatura = it.Temperatura;
        record.Declara_Sulfitos = it.Declara_Sulfitos;
        record.Observaciones = it.Observaciones;
        record.UsuCrea = it.UsuCrea; // @nochange para evitar modificaciones en la creación
        record.UsuModi = it.UsuModi;
        record.correccion = it.correccion;
        record.foto = it.foto;
        record.state = it.state;
        record.planta_id = plantaId;
        record.remote_id = it.remote_id;
        // No es necesario setear createdAt y updatedAt, @readonly se encarga de ello.
      });
    });
  };
  