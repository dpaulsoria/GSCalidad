import { create } from "zustand";
import { name as TipoRegistroName } from "@/model/data/navigation/TipoRegistro";
import { name as AreaName } from "@/model/data/list/Area";
import { name as ColorName } from "@/model/data/list/Color";
import { name as TipoCorteName } from "@/model/data/list/TipoCorte";
import { name as TipoProductoName } from "@/model/data/list/TipoProducto";
import { name as TipoProductoEmbarqueName } from "@/model/data/list/TipoProductoEmbarque";
import { name as UnidadPesoName } from "@/model/data/list/UnidadPeso";
import { name as ImportadoresName } from "@/model/data/list/Importador";
import { name as MarcasName } from "@/model/data/list/Marcas";
import { name as MaquinasName } from "@/model/data/list/Maquinas";
import { name as ProveedoresINPName } from "@/model/data/list/ProveedoresINP";
import { getVSelectLists } from "@/db/transactions/read";
import { Model } from "@nozbe/watermelondb";

const TAG = "[utilStore]";

export interface VSelectOption {
  name: string;
  value: string | number;
  object?: any;
}

export interface VSelectLists {
  area: VSelectOption[];
  color: VSelectOption[];
  tipoCorte: VSelectOption[];
  tipoProducto: VSelectOption[];
  tipoProductoEmbarque: VSelectOption[];
  unidadPeso: VSelectOption[];
  importadores: VSelectOption[];
  marcas: VSelectOption[];
  maquinas: VSelectOption[];
  proveedoresINP: VSelectOption[];
  tipoRegistro: VSelectOption[];
}

interface UtilStore {
  vSelectLists: VSelectLists;
  loadVSelectLists: () => Promise<void>;
}

export type VSelectModel = Model & VSelectOption;

const vSelectListMappings: { [key: string]: keyof VSelectLists } = {
  [AreaName]: "area",
  [ColorName]: "color",
  [TipoCorteName]: "tipoCorte",
  [TipoProductoName]: "tipoProducto",
  [TipoProductoEmbarqueName]: "tipoProductoEmbarque",
  [UnidadPesoName]: "unidadPeso",
  [ImportadoresName]: "importadores",
  [MarcasName]: "marcas",
  [MaquinasName]: "maquinas",
  [ProveedoresINPName]: "proveedoresINP",
  [TipoRegistroName]: "tipoRegistro",
};

export const useUtilStore = create<UtilStore>((set) => ({
  vSelectLists: {
    area: [],
    color: [],
    tipoCorte: [],
    tipoProducto: [],
    tipoProductoEmbarque: [],
    unidadPeso: [],
    importadores: [],
    marcas: [],
    maquinas: [],
    proveedoresINP: [],
    tipoRegistro: [],
  },
  loadVSelectLists: async () => {
    console.log(`${TAG} loadVSelectLists started`);
    const fetchedData = await fetchDataFromDB();
    console.log(`${TAG} Fetched Data: `, fetchedData);

    set((state) => {
      console.log(`${TAG} Previous state: `, state.vSelectLists);
      const newState = {
        vSelectLists: {
          ...state.vSelectLists,
          ...fetchedData,
        },
      };
      console.log(`${TAG} New state: `, newState);
      return newState;
    });
  },
}));

async function fetchDataFromDB(): Promise<VSelectLists> {
  console.log(`${TAG} Fetching data from DB...`);
  const vlist = await getVSelectLists();
  console.log(`${TAG} Raw data fetched: `, vlist);

  const result: VSelectLists = {
    area: [],
    color: [],
    tipoCorte: [],
    tipoProducto: [],
    tipoProductoEmbarque: [],
    unidadPeso: [],
    importadores: [],
    marcas: [],
    maquinas: [],
    proveedoresINP: [],
    tipoRegistro: [],
  };

  Object.entries(vlist).forEach(([key, value]) => {
    const mappedKey = vSelectListMappings[key];
    if (mappedKey) {
      console.log(`${TAG} Mapping ${key} to ${mappedKey}`);
      result[mappedKey] = value;
    }
  });

  console.log(`${TAG} Final result after mapping: `, result);
  return result;
}
