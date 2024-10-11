import { Model, tableSchema } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

const name = 'users_offline';

class UserOffline extends Model {
  static table = name; // Nombre de la tabla en WatermelonDB

  // Definir los campos correspondientes a las columnas de la tabla con tipos correctos
  @field('cedula') cedula: string | null;
  @field('user_name') userName: string;
  @field('user_username') userUsername: string;
  @field('user_email') userEmail: string;
  @field('user_activo') userActivo: number;
  @field('user_password') userPassword: string;
  @field('rol_id') rolId: number;
  @field('planta') planta: number | null;
  @field('area') area: number | null;
}

// Esquema de la tabla correspondiente
const UserOfflineSchema = tableSchema({
  name, // Nombre de la tabla
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
});

export { UserOffline, UserOfflineSchema, name };
