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

