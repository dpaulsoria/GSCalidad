import { Migrable } from "@/types/Migrable";
import { Collection, Model, Q } from "@nozbe/watermelondb";

import {
  areasCollection,
  coloresCollection,
  tipoCorteCollection,
  tipoProductoCollection,
  tipoProductoEmbarqueCollection,
  tipoRegistroCollection,
  unidadPesoCollection,
  importadoresCollection,
  marcasCollection,
  maquinasCollection,
  proveedoresINPCollection,
} from "@/db";
import { VSelectModel, VSelectOption } from "@/store/util/store";

export const vSelectLists: Collection<Model>[] = [
  areasCollection,
  coloresCollection,
  tipoCorteCollection,
  tipoProductoCollection,
  tipoProductoEmbarqueCollection,
  tipoRegistroCollection,
  unidadPesoCollection,
  importadoresCollection,
  marcasCollection,
  maquinasCollection,
  proveedoresINPCollection,
];

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

// Async function to map over the collections and format the data
export async function getVSelectLists(): Promise<{ [k: string]: VSelectOption[] }> {
  const result: { [k: string]: VSelectOption[] } = {};

  // Use `Promise.all` to handle multiple async operations
  await Promise.all(
    vSelectLists.map(async (collection) => {
      const records = (await collection.query().fetch()) as unknown as VSelectModel[] ;

      // Mapear los registros a VSelectModel
      const mappedRecords: VSelectOption[] = records.map((record) => ({
        object: record,
        name: record.name,
        value: record.value,
      }));

      result[collection.table] = mappedRecords; // Guardar los registros mapeados
    })
  );

  return result;
}