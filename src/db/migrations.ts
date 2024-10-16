import {
  createTable,
  schemaMigrations,
} from "@nozbe/watermelondb/Schema/migrations";
import { name as UsersTableName } from "@/model/User";
import { name as DescongeladoSalmueraName } from "@/model/registros/Salmuera/RC_CC_15";
import { name as PeladoFrescoName } from "@/model/registros/ValorAgregado/RC_CC_103";
import { name as ProdTerminadoName } from "@/model/registros/ProdTerminado/RC_CC_108";
import { name as ProcesoEnteroName } from "@/model/registros/ProcesoEntero/RC_CC_07";

// Nota: Se debe especificar aqui lo mismo que en el esquema, pero no se puede usar el esquema
export default schemaMigrations({
  migrations: [
  ],
});
