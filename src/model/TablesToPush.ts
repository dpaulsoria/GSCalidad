import { name as DescongeladoSalmueraName } from "@/model/registros/Salmuera/RC_CC_15";
import { name as PeladoFrescoName } from "@/model/registros/ValorAgregado/RC_CC_103";
import { name as ProdTerminadoName } from "@/model/registros/ProdTerminado/RC_CC_108";
import { name as ProcesoEnteroName } from "@/model/registros/ProcesoEntero/RC_CC_07";
import { name as InspeccionPreeliminarName } from "@/model/registros/MateriaPrima/RC_MP_01/InspeccionPreeliminar";
import { name as InspeccionPreeliminarColaName } from "@/model/registros/MateriaPrima/RC_MP_01/jr/Cola";
import { name as InspeccionPreeliminarEnteroName } from "@/model/registros/MateriaPrima/RC_MP_01/jr/Entero";

export const TablesToPush = [
  DescongeladoSalmueraName,
  PeladoFrescoName,
  ProdTerminadoName,
  ProcesoEnteroName,
  InspeccionPreeliminarName,
  InspeccionPreeliminarColaName,
  InspeccionPreeliminarEnteroName
];
