import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text } from "@nozbe/watermelondb/decorators";

export const name = "a26401_offline_data";

export class UserOffline extends Model {
  static table = name;

  @text("cedula") cedula: string | null;
  @text("user_name") user_name: string;
  @text("user_username") user_username: string;
  @text("user_email") user_email: string;
  @field("user_activo") user_activo: number;
  @text("user_password") user_password: string;
  @field("rol_id") rol_id: number;
  @field("planta") planta: number | null;
  @field("area") area: number | null;
}

export const UserOfflineSchema = tableSchema({
  name,
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
});
