import { Migrable } from "@/types/Migrable";
import {
  correccionCollection,
  db,
  fotoCollection,
  rc08Collection,
  rc103Collection,
  rc108Collection,
  rc15Collection,
} from "@/db/index";
import { DescongeladoSalmueraModel } from "@/model/registros/Salmuera/RC_CC_15";
import { formatDate } from "@/utils/formatDate";
import { PeladoFrescoModel } from "@/model/registros/ValorAgregado/RC_CC_103";
import { ProdTerminadoModel } from "@/model/registros/ProdTerminado/RC_CC_108";
import { ClasificacionCamaronEnteroModel } from "@/model/registros/ProcesoEntero/RC_CC_08";
import { CorreccionesModel } from "@/model/data/extra/Correccion";
import { FotosModel } from "@/model/data/extra/Foto";

function printMigrableInfo<T extends Migrable>(item: T) {
  console.log(`Fecha de Creación: ${item.createdAt}`);
  console.log(`Usuario Creador: ${item.UsuCrea}`);
  console.log(`Estado: ${item.state}`);
}

export const SaveSalmuera = async (
  it: DescongeladoSalmueraModel,
  plantaId: number
) => {
  await db.write(async () => {
    await rc15Collection.create((record: DescongeladoSalmueraModel) => {
      record.tipo_analisis = it.tipo_analisis;
      record.co_importador = it.co_importador;
      record.cabinplant = it.cabinplant;
      record.lote = it.lote;
      record.proveedor = it.proveedor;
      record.co_talla = it.co_talla;
      record.pesoNetoFresco = it.pesoNetoFresco;
      record.peso_bruto = it.peso_bruto;
      record.unidad_medida = it.unidad_medida;
      record.pesoCongelado = it.pesoCongelado;
      record.pesoDescongelado = it.pesoDescongelado;
      record.Cta_PesoNetoFresco = it.Cta_PesoNetoFresco;
      record.Cta_PesoCongelado = it.Cta_PesoCongelado;
      record.Cta_PesoDescongelado = it.Cta_PesoDescongelado;
      record.observaciones = it.observaciones;
      record.UsuCrea = it.UsuCrea; // @nochange will prevent changes after creation
      record.UsuModi = it.UsuModi;
      record.correccion = it.correccion;
      record.foto = it.foto;
      record.estado = it.estado;
      record.state = it.state;
      record.planta_id = plantaId;
      record.remote_id = it.remote_id;
      // No need to set createdAt and updatedAt manually as @readonly handles it.
    });
  });
};
