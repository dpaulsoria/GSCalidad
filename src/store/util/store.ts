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

// Create a mapping of the collection names to the keys of `vSelectLists`
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
    const fetchedData = await fetchDataFromDB();

    set((state) => ({
      vSelectLists: {
        ...state.vSelectLists,
        ...fetchedData,
      },
    }));
  },
}));

async function fetchDataFromDB(): Promise<VSelectLists> {
  const vlist = await getVSelectLists();
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

  // Dynamically map the fetched data based on the vSelectListMappings
  Object.entries(vlist).forEach(([key, value]) => {
    const mappedKey = vSelectListMappings[key];
    if (mappedKey) {
      result[mappedKey] = value;
    }
  });

  return result;
}
