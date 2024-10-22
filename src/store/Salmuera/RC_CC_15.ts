import { DescongeladoSalmueraModel } from "@/model/registros/Salmuera/RC_CC_15";
import { Migrable } from "@/types/Migrable";
import { create } from "zustand";

const TAG = "[RC.CC.15 - Store]";

interface FormStore {
  register: Migrable;
  functions: {
    handleChangeTipoAnalisis: (value: string) => string
    handleChangeLote: (value: string) => string
    handleChangeProveedor: (value: string) => string
  },
}

export const useDescongeladoSalmueraStore = create<FormStore>((set) => ({
    register: {} as Migrable,
    functions: {
        handleChangeTipoAnalisis: (value: string) => value === "VERIFICAR PESO" ? "PESO" : "DESC",
        handleChangeLote: (value: string) => value.toUpperCase(),
        handleChangeProveedor: (value: string) => value.toUpperCase(),
    }
}));
