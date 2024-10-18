import { Model, tableSchema } from "@nozbe/watermelondb";
import { field, text, date, readonly } from "@nozbe/watermelondb/decorators";

export const name = "a26401_offline_data";

export class UserOfflineModel extends Model {
  static table = name;

  @text("cedula") cedula!: string | null;
  @text("user_name") user_name!: string;
  @text("user_username") user_username!: string;
  @text("user_email") user_email!: string;
  @field("user_activo") user_activo!: number;
  @text("user_password") user_password!: string;
  @field("rol_id") rol_id!: number;
  @field("planta_id") planta!: number | null;
  @field("area_id") area!: number | null;
  @field("remote_id") remote_id!: number;
  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number | null;
  @readonly @date("deleted_at") deletedAt!: number | null;
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
    { name: "planta_id", type: "number", isOptional: true },
    { name: "area_id", type: "number", isOptional: true },
    { name: "remote_id", type: "number" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number", isOptional: true },
    { name: "deleted_at", type: "number", isOptional: true },
  ],
});
