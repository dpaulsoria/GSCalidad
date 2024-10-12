import { createTable, schemaMigrations } from '@nozbe/watermelondb/Schema/migrations';
import { name as UsersTableName } from '@/model/User'

// Nota: Se debe especificar aqui lo mismo que en el esquema, pero no se puede usar el esquema
export default schemaMigrations({
  migrations: [
    {
      toVersion: 2, // Nueva versión del esquema
      steps: [
        createTable({
          name: UsersTableName, // Nombre de la tabla
          columns: [
            { name: 'cedula', type: 'string', isOptional: true },
            { name: 'user_name', type: 'string' },
            { name: 'user_username', type: 'string' },
            { name: 'user_email', type: 'string' },
            { name: 'user_activo', type: 'number' },
            { name: 'user_password', type: 'string' },
            { name: 'rol_id', type: 'number' },
            { name: 'planta', type: 'number', isOptional: true },
            { name: 'area', type: 'number', isOptional: true },
          ],
        }),
      ],
    },
  ],
});
