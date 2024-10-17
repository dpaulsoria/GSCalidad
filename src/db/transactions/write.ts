import { Migrable } from "@/types/Migrable";
import { db, rc15Collection } from "@/db/index";
import { DescongeladoSalmueraModel } from "@/model/registros/Salmuera/RC_CC_15";
import { formatDate } from "@/utils/formatDate";

function printMigrableInfo<T extends Migrable>(item: T) {
  console.log(`Fecha de Creación: ${item.created_at}`);
  console.log(`Usuario Creador: ${item.UsuCrea}`);
  console.log(`Estado: ${item.state}`);
}

export const SaveRC_CC_15 = async (it: DescongeladoSalmueraModel, plantaId: number) => {
  await db.write(async () => {
    await rc15Collection.create(
      (record: DescongeladoSalmueraModel) => {
        record = it
        record.created_at = it?.created_at
          ? it.created_at
          : formatDate(new Date(), "yyyy-MM-dd HH:mm:ss");
        record.updated_at = it?.updated_at
          ? it.updated_at
          : formatDate(new Date(), "yyyy-MM-dd HH:mm:ss");
        record.UsuModi = it?.UsuModi;
        record.correccion = it.correccion;
        // it.foto = state.foto;
        record.state = it.state;
        // it.sync_state = state.sync_state;
        record.planta_id = plantaId;
      }
    )
  })
}