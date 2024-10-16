import { Migrable } from "@/types/Migrable";
import { Collection, Model, Q } from "@nozbe/watermelondb";

// Función genérica para obtener registros con state = 0
export async function getUnsync<T extends Model & Migrable>(
    collection: Collection<T>
  ): Promise<T[]> {
    try {
      const items = await collection.query(Q.where("state", 0)).fetch();
      return items;
    } catch (error) {
      console.error("Error al obtener los registros:", error);
      return [];
    }
  }