import { Forms } from "./Form";

// Enum para los tipos de registro
export enum RegisterTypes {
  RC_CC_103 = "RC_CC_103",
  RC_CC_108 = "RC_CC_108",
  RC_CC_15 = "RC_CC_15",
  RC_CC_07 = "RC_CC_07",
  RC_CC_08 = "RC_CC_08",
  RC_CC_219 = "RC_CC_219",
  RC_CC_25_26 = "RC_CC_25_26",
  RC_CC_26 = "RC_CC_26",
  RC_MP_01 = "RC_MP_01",
  RC_CC_198 = "RC_CC_198",
}

// Implementación de las funciones en un objeto mapeado para evitar un `switch` largo
const RegisterTypeDetails: Record<RegisterTypes, Forms> = {
  [RegisterTypes.RC_CC_103]: {
    parse: () => "RC.CC.103",
    identifierName: () => "Lote",
    fullName: () => "Pelado Fresco",
  },
  [RegisterTypes.RC_CC_108]: {
    parse: () => "RC.CC.108",
    identifierName: () => "Lote",
    fullName: () => "Producto Terminado",
  },
  [RegisterTypes.RC_CC_15]: {
    parse: () => "RC.CC.15",
    identifierName: () => "Lote",
    fullName: () => "Descongelado Salmuera",
  },
  [RegisterTypes.RC_CC_07]: {
    parse: () => "RC.CC.07",
    identifierName: () => "Lote",
    fullName: () => "Proceso Entero Fresco",
  },
  [RegisterTypes.RC_CC_08]: {
    parse: () => "RC.CC.08",
    identifierName: () => "Lote",
    fullName: () => "Clasificación de Camarón Entero",
  },
  [RegisterTypes.RC_CC_219]: {
    parse: () => "RC.CC.219",
    identifierName: () => "Lote",
    fullName: () => "Control Proceso Camarón Cocido",
  },
  [RegisterTypes.RC_CC_25_26]: {
    parse: () => "RC.CC.25 / RC.CC.26",
    identifierName: () => "Contenedor",
    fullName: () => "C.C. Embarque Despacho / Estiba Contenedor",
  },
  [RegisterTypes.RC_CC_26]: {
    parse: () => "RC.CC.25 / RC.CC.26",
    identifierName: () => "Contenedor",
    fullName: () => "C.C. Embarque Despacho / Estiba Contenedor",
  },
  [RegisterTypes.RC_MP_01]: {
    parse: () => "RC.MP.01",
    identifierName: () => "Lote",
    fullName: () => "Inspección Preliminar Materia Prima",
  },
  [RegisterTypes.RC_CC_198]: {
    parse: () => "RC.CC.198",
    identifierName: () => "Lote",
    fullName: () => "Producto No Conforme",
  },
};

// **Función para obtener los detalles de un tipo de registro**
export function getRegisterTypeDetails(type: RegisterTypes): Forms {
  return RegisterTypeDetails[type];
}
