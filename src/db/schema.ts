import { PeladoFrescoSchema } from "@/model/registros/ValorAgregado/RC_CC_103";
import { ProdTerminadoSchema } from "@/model/registros/ProdTerminado/RC_CC_108";
import { DescongeladoSalmueraSchema } from "@/model/registros/Salmuera/RC_CC_15";
import { UserOfflineSchema } from "@/model/User";
import { appSchema, tableSchema } from "@nozbe/watermelondb";
import { ProcesoEnteroFrescoSchema } from "@/model/registros/ProcesoEntero/RC_CC_07";

export default appSchema({
  version: 3,
  tables: [
    tableSchema({
      name: "accounts",
      columns: [
        { name: "name", type: "string" },
        { name: "cap", type: "number" },
        { name: "tap", type: "number" },
      ],
    }),
    UserOfflineSchema,
    DescongeladoSalmueraSchema,
    PeladoFrescoSchema,
    ProdTerminadoSchema,
    ProcesoEnteroFrescoSchema,
  ],
});
