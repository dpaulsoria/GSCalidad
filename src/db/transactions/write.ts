import { Migrable } from "@/types/Migrable";
import {
  db,
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

function printMigrableInfo<T extends Migrable>(item: T) {
  console.log(`Fecha de Creación: ${item.created_at}`);
  console.log(`Usuario Creador: ${item.UsuCrea}`);
  console.log(`Estado: ${item.state}`);
}

export const SaveRC_CC_15 = async (
  it: DescongeladoSalmueraModel,
  plantaId: number
) => {
  await db.write(async () => {
    await rc15Collection.create((record: DescongeladoSalmueraModel) => {
      record = it;
      record.created_at = it?.created_at
        ? it.created_at
        : formatDate(new Date(), "yyyy-MM-dd HH:mm:ss");
      record.updated_at = it?.updated_at
        ? it.updated_at
        : formatDate(new Date(), "yyyy-MM-dd HH:mm:ss");
      record.planta_id = plantaId;
    });
  });
};

export const SaveRC_CC_103 = async (
  it: PeladoFrescoModel,
  plantaId: number
) => {
  await db.write(async () => {
    await rc103Collection.create((record: PeladoFrescoModel) => {
      record = it;
      record.created_at = it?.created_at
        ? it.created_at
        : formatDate(new Date(), "yyyy-MM-dd HH:mm:ss");
      record.updated_at = it?.updated_at
        ? it.updated_at
        : formatDate(new Date(), "yyyy-MM-dd HH:mm:ss");
      record.planta_id = plantaId;
    });
  });
};

export const SaveRC_CC_108 = async (
  it: ProdTerminadoModel,
  plantaId: number
) => {
  await db.write(async () => {
    await rc108Collection.create((record: ProdTerminadoModel) => {
      record = it;
      record.created_at = it?.created_at
        ? it.created_at
        : formatDate(new Date(), "yyyy-MM-dd HH:mm:ss");
      record.updated_at = it?.updated_at
        ? it.updated_at
        : formatDate(new Date(), "yyyy-MM-dd HH:mm:ss");
      record.planta_id = plantaId;
    });
  });
};

export const SaveRC_CC_08 = async (
  it: ClasificacionCamaronEnteroModel,
  plantaId: number
) => {
  await db.write(async () => {
    await rc08Collection.create((record: ClasificacionCamaronEnteroModel) => {
      record = it;
      record.created_at = it?.created_at
        ? it.created_at
        : formatDate(new Date(), "yyyy-MM-dd HH:mm:ss");
      record.updated_at = it?.updated_at
        ? it.updated_at
        : formatDate(new Date(), "yyyy-MM-dd HH:mm:ss");
      record.planta_id = plantaId;
    });
  });
};
