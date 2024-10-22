import { VSelectOption } from "@/store/util/store";
import { Model, tableSchema } from "@nozbe/watermelondb";
import {
  field,
  text,
  date,
  readonly,
  json,
} from "@nozbe/watermelondb/decorators";

export const name = "a20t3";

interface Peso {
  id_peso: number;
  co_talla: number;
  tipo: string;
  peso: number;
  activo: string;
}

export class TallasModel extends Model implements VSelectOption {
  static table = name;

  @text("name") name!: string; // descripción
  @field("value") value!: number; // co_talla
  @json("peso", (raw) => (Array.isArray(raw) ? raw : [])) peso!: Peso[]; // Array de objetos Peso
  @field("remote_id") remote_id!: number;
  @readonly @date("created_at") createdAt!: number;
  @readonly @date("updated_at") updatedAt!: number;
  @readonly @date("deleted_at") deletedAt!: number | null;
}

export const TallasSchema = tableSchema({
  name,
  columns: [
    { name: "name", type: "string" },
    { name: "value", type: "number" },
    { name: "peso", type: "string" },
    { name: "remote_id", type: "number" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
    { name: "deleted_at", type: "number", isOptional: true },
  ],
});
