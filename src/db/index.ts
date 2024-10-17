import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import schema from "./schema";
import migrations from "./migrations";

// Usuarios
import { name as UsersOfflineName, UserOfflineModel } from "@/model/User";
// Registros
import {
  name as DescongeladoSalmueraName,
  DescongeladoSalmueraModel,
} from "@/model/registros/Salmuera/RC_CC_15";
import {
  name as PeladoFrescoName,
  PeladoFrescoModel,
} from "@/model/registros/ValorAgregado/RC_CC_103";
import {
  name as ProdTerminadoName,
  ProdTerminadoModel,
} from "@/model/registros/ProdTerminado/RC_CC_108";
import {
  name as ProcesoEnteroName,
  ProcesoEnteroFrescoModel,
} from "@/model/registros/ProcesoEntero/RC_CC_07";
import {
  name as InspeccionPreeliminarName,
  InspeccionPreeliminarModel,
} from "@/model/registros/MateriaPrima/RC_MP_01/InspeccionPreeliminar";
import {
  name as InspeccionPreeliminarColaName,
  InspeccionPreeliminarColaModel,
} from "@/model/registros/MateriaPrima/RC_MP_01/jr/Cola";
import {
  name as InspeccionPreeliminarEnteroName,
  InspeccionPreeliminarEnteroModel,
} from "@/model/registros/MateriaPrima/RC_MP_01/jr/Entero";

// Navegacion
import {
  name as PlantasName,
  PlantasModel,
} from "@/model/data/navigation/Planta";
import {
  name as TipoRegistroName,
  TipoRegistroModel,
} from "@/model/data/navigation/TipoRegistro";
import {
  name as AreaProcesoName,
  AreasProcesoModel,
} from "@/model/data/navigation/AreasProceso";
// Listas
import { name as AreasName, AreasModel } from "@/model/data/list/Area";
import { name as ColoresName, ColoresModel } from "@/model/data/list/Color";
import {
  name as TipoCorteName,
  TipoCorteModel,
} from "@/model/data/list/TipoCorte";
import {
  name as TipoProductoName,
  TipoProductoModel,
} from "@/model/data/list/TipoProducto";
import {
  name as TipoProductoEmbarqueName,
  TipoProductoEmbarqueModel,
} from "@/model/data/list/TipoProductoEmbarque";
import {
  name as TipoRegistroEstadoName,
  TipoRegistroEstadoModel,
} from "@/model/data/list/TipoRegistroEstado";
import {
  name as UnidadPesoName,
  UnidadPesoModel,
} from "@/model/data/list/UnidadPeso";
// Pivot
import {
  name as RegistrosAreaName,
  RegistrosAreaModel,
} from "@/model/data/pivot/RegistrosArea";
import {
  name as RegistrosPlantaName,
  RegistrosPlantaModel,
} from "@/model/data/pivot/RegistrosPlanta";
// Signatures
import { name as FirmasName, FirmasModel } from "@/model/data/signatures/Firma";
// Fallido
import {
  name as RegistroFallidoName,
  RegistroFallidoModel,
} from "@/model/data/log/RegistroFallido";
import {
  name as ImportadoresName,
  ImportadoresModel,
} from "@/model/data/list/Importador";
import { name as MarcasName, MarcasModel } from "@/model/data/list/Marcas";
import {
  name as MaquinasName,
  MaquinasModel,
} from "@/model/data/list/Maquinas";
import {
  name as ProveedoresINPName,
  ProveedoresINPModel,
} from "@/model/data/list/ProveedoresINP";
import {
  name as CorreccionesName,
  CorreccionesModel,
} from "@/model/data/extra/Correccion";
import { name as FotosName, FotosModel } from "@/model/data/extra/Foto";

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  migrations,
  // (optional database name or file system path)
  // dbName: 'gscalidad_db',
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  // TODO: Verificar si debe estar en true o false
  jsi: false /* Platform.OS === 'ios' */,
  // (optional, but you should implement this method)
  onSetUpError: (error) => {
    // Database failed to load -- offer the user to reload the app or log out
    console.error(
      "Error al levantar la base de datos con Watermelondb:",
      error
    );
  },
});

// Then, make a Watermelon database from it!
export const db = new Database({
  adapter,
  modelClasses: [
    // Usuarios
    UserOfflineModel,
    // Registros
    DescongeladoSalmueraModel,
    PeladoFrescoModel,
    ProdTerminadoModel,
    ProcesoEnteroFrescoModel,
    InspeccionPreeliminarModel,
    // Navegacion
    PlantasModel,
    TipoRegistroModel,
    AreasProcesoModel,
    // Listas
    AreasModel,
    ColoresModel,
    TipoCorteModel,
    TipoProductoModel,
    TipoProductoEmbarqueModel,
    TipoRegistroEstadoModel,
    UnidadPesoModel,
    ImportadoresModel,
    MarcasModel,
    MaquinasModel,
    ProveedoresINPModel,
    // Pivot
    RegistrosAreaModel,
    RegistrosPlantaModel,
    // Signatures
    FirmasModel,
    // Fallidos
    RegistroFallidoModel,
    // Extra
    CorreccionesModel,
    FotosModel,
  ],
});

// Usuarios
export const usersCollection = db.get<UserOfflineModel>(UsersOfflineName);
// Registros
export const rc15Collection = db.get<DescongeladoSalmueraModel>(
  DescongeladoSalmueraName
);
export const rc103Collection = db.get<PeladoFrescoModel>(PeladoFrescoName);
export const rc108Collection = db.get<ProdTerminadoModel>(ProdTerminadoName);
export const rc07Collection =
  db.get<ProcesoEnteroFrescoModel>(ProcesoEnteroName);
export const rc01Collection = db.get<InspeccionPreeliminarModel>(
  InspeccionPreeliminarName
);
export const rc01ColaCollection = db.get<InspeccionPreeliminarColaModel>(InspeccionPreeliminarColaName);
export const rc01EnteroCollection = db.get<InspeccionPreeliminarEnteroModel>(InspeccionPreeliminarEnteroName);

// Navegacion
export const plantasCollection = db.get<PlantasModel>(PlantasName);
export const tipoRegistroCollection =
  db.get<TipoRegistroModel>(TipoRegistroName);
export const areaProcesoCollection = db.get<AreasProcesoModel>(AreaProcesoName);
// Listas
export const areasCollection = db.get<AreasModel>(AreasName);
export const coloresCollection = db.get<ColoresModel>(ColoresName);
export const tipoCorteCollection = db.get<TipoCorteModel>(TipoCorteName);
export const tipoProductoCollection =
  db.get<TipoProductoModel>(TipoProductoName);
export const tipoProductoEmbarqueCollection = db.get<TipoProductoEmbarqueModel>(
  TipoProductoEmbarqueName
);
export const tipoRegistroEstadoCollection = db.get<TipoRegistroEstadoModel>(
  TipoRegistroEstadoName
);
export const unidadPesoCollection = db.get<UnidadPesoModel>(UnidadPesoName);
export const importadoresCollection =
  db.get<ImportadoresModel>(ImportadoresName);
export const marcasCollection = db.get<MarcasModel>(MarcasName);
export const maquinasCollection = db.get<MaquinasModel>(MaquinasName);
export const proveedoresINPCollection =
  db.get<ProveedoresINPModel>(ProveedoresINPName);
// Pivot
export const registrosAreaCollection =
  db.get<RegistrosAreaModel>(RegistrosAreaName);
export const registrosPlantaCollection =
  db.get<RegistrosPlantaModel>(RegistrosPlantaName);
// Signatures
export const firmasCollection = db.get<FirmasModel>(FirmasName);
// Fallido
export const registroFallidoCollection =
  db.get<RegistroFallidoModel>(RegistroFallidoName);
// Extra
export const correccionCollection = db.get<CorreccionesModel>(CorreccionesName);
export const fotoCollection = db.get<FotosModel>(FotosName);
