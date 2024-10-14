import {
  createTable,
  schemaMigrations,
} from "@nozbe/watermelondb/Schema/migrations";
import { name as UsersTableName } from "@/model/User";
import {
  descongeladoSalmueraName,
  DescongeladoSalmueraSchema,
} from "@/model/DescongeladoSalmuera";
import { TableSchemaSpec } from "@nozbe/watermelondb/Schema";

// Nota: Se debe especificar aqui lo mismo que en el esquema, pero no se puede usar el esquema
export default schemaMigrations({
  migrations: [
    {
      toVersion: 2, // Nueva versión del esquema
      steps: [
        createTable({
          name: UsersTableName, // Nombre de la tabla
          columns: [
            { name: "cedula", type: "string", isOptional: true },
            { name: "user_name", type: "string" },
            { name: "user_username", type: "string" },
            { name: "user_email", type: "string" },
            { name: "user_activo", type: "number" },
            { name: "user_password", type: "string" },
            { name: "rol_id", type: "number" },
            { name: "planta", type: "number", isOptional: true },
            { name: "area", type: "number", isOptional: true },
          ],
        }),
      ],
    },
    {
      toVersion: 3, // Nueva versión del esquema
      steps: [
        createTable({
          name: descongeladoSalmueraName,
          columns: [
            { name: "uuid", type: "string" },
            { name: "tipo_analisis", type: "string" },
            { name: "Importador", type: "string" },
            { name: "Cabinplant", type: "string" },
            { name: "Lote", type: "string" },
            { name: "Proveedor", type: "string" },
            { name: "Talla", type: "string" },
            { name: "pesoNetoFresco", type: "number" },
            { name: "peso_bruto", type: "number" },
            { name: "unidad_medida", type: "string" },
            { name: "pesoCongelado", type: "string" },
            { name: "pesoDescongelado", type: "number" },
            { name: "Cta_PesoNetoFresco", type: "number" },
            { name: "Cta_PesoCongelado", type: "number" },
            { name: "Cta_PesoDescongelado", type: "number" },
            { name: "Observacion", type: "string" },
            { name: "UsuCrea", type: "string" },
            { name: "FechaCrea", type: "string" },
            { name: "FechaModi", type: "string", isOptional: true },
            { name: "UsuModi", type: "string", isOptional: true },
            { name: "Fecha", type: "string" },
            { name: "correccion", type: "string" },
            { name: "foto", type: "number" },
            { name: "state", type: "number", isOptional: true },
            { name: "sync_state", type: "number" },
          ],
        }),
      ],
    },
  ],
});
