import { DescongeladoSalmueraSchema } from "@/model/DescongeladoSalmuera";
import { UserOfflineSchema } from "@/model/User";
import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 2,
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
  ],
});
