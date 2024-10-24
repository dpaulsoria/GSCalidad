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
import { name as TallasName } from "@/model/data/list/Talla";
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
  tallas: VSelectOption[];
}

interface UtilStore {
  vSelectLists: VSelectLists;
  loadVSelectLists: () => Promise<void>;
  calculateUT: (g: number, p: number) => number;
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
  [TallasName]: "tallas",
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
    tallas: [],
  },
  loadVSelectLists: async () => {
    const fetchedData = await fetchDataFromDB();

    set((state) => {
      const newState = {
        vSelectLists: {
          ...state.vSelectLists,
          ...fetchedData,
        },
      };
      return newState;
    });
  },
  calculateUT: (g: number, p: number): number => p !== 0 ? g / p : 0
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
    tallas: [],
  };

  Object.entries(vlist).forEach(([key, value]) => {
    const mappedKey = vSelectListMappings[key];
    if (mappedKey) {
      result[mappedKey] = value;
    }
  });

  return result;
}
