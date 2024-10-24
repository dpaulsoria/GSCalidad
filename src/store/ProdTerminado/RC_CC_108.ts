import { ProdTerminadoModel } from "@/model/registros/ProdTerminado/RC_CC_108";
import { create } from "zustand";

const TAG = "[RC.CC.108 - Store]";

interface FormStore {
  register: ProdTerminadoModel;
  functions: {
    calculateCuentaTotal: (
      isLB: boolean,
      ctaFinal: number,
      pesoNeto: number
    ) => number;
    calculateGlaseo: (pesoSinFunda: number, pesoNeto: number) => number;
    calculateSumaDefectos: (defectos: Defectos) => number;
  };
}

interface Defectos {
    mudados: number,
    flacidez: number,
    deformes: number,
    picados: number,
    cola_floja: number,
    deshidratados: number,
    principios_melanosis: number,
    melanosis: number,
    pelado_vena: number,
    falta_corte: number,
    corte_largo: number,
    corte_profundo: number,
    corte_irregular: number,
    cascara: number,
    patas: number,
    quebrados: number,
    luxados: number,
    quebrado_3: number,
    cola_danada: number,
    pedazos: number,
    corbatas: number,
    rosados: number,
    semi_rosados: number,
    mal_descabezado: number,
    juveniles: number,
    intestinos: number,
    residuos_venas: number,
    cascara_floja: number,
    mal_desvenado: number,
    sin_telson: number,
}

export const useProdTerminadoStore = create<FormStore>(set => ({
  register: {} as ProdTerminadoModel,
  functions: {
    calculateCuentaTotal: (
      isLB: boolean,
      ctaFinal: number,
      pesoNeto: number
    ): number => (isLB ? ctaFinal * pesoNeto : ctaFinal * pesoNeto * 2.205),
    calculateGlaseo: (pesoSinFunda: number, pesoNeto: number): number =>
      pesoSinFunda > 0 ? 100 - (pesoNeto * 100) / pesoSinFunda : 0,
    calculateSumaDefectos: (defectos: Defectos): number => (
        defectos.mudados +
        defectos.flacidez +
        defectos.deformes +
        defectos.picados +
        defectos.cola_floja +
        defectos.deshidratados +
        defectos.principios_melanosis +
        defectos.melanosis +
        defectos.pelado_vena +
        defectos.falta_corte +
        defectos.corte_largo +
        defectos.corte_profundo +
        defectos.corte_irregular +
        defectos.cascara +
        defectos.patas +
        defectos.quebrados +
        defectos.luxados +
        defectos.quebrado_3 +
        defectos.cola_danada +
        defectos.pedazos +
        defectos.corbatas +
        defectos.rosados +
        defectos.semi_rosados +
        defectos.mal_descabezado +
        defectos.juveniles +
        defectos.intestinos +
        defectos.residuos_venas +
        defectos.cascara_floja +
        defectos.mal_desvenado +
        defectos.sin_telson
    ),
  },
}));