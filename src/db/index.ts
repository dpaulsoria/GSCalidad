import { Platform } from "react-native";
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import schema from "./schema";
import migrations from "./migrations";
import Account from "../model/Account";
<<<<<<< HEAD

import { name as UsersTableName, UserOffline } from "@/model/User";
import {
  DescongeladoSalmueraModel,
  name as DescongeladoSalmueraName,
} from "@/model/registros/Salmuera/RC_CC_15";
=======
import { name as UsersTableName, UserOffline } from "@/model/user";
import { DescongeladoSalmueraModel, name as DescongeladoSalmueraName } from "@/model/registros/Salmuera/RC_CC_15";
>>>>>>> f9bdba683d843951e8cca69e482c416dc2b5f0af

import { PeladoFrescoModel, name as PeladoFrescoName } from "@/model/registros/ValorAgregado/RC_CC_103";

import { ProdTerminadoModel, name as ProdTerminadoName } from "@/model/registros/ProdTerminado/RC_CC_108";
import { ProcesoEnteroFrescoModel, name as ProcesoEnteroName } from "@/model/registros/ProcesoEntero/RC_CC_07";

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
    console.error("Error al levantar la base de datos con Watermelondb:", error);
  },
});

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [Account, UserOffline, DescongeladoSalmueraModel, PeladoFrescoModel, ProdTerminadoModel, ProcesoEnteroFrescoModel],
});

export const accountsCollection = database.get<Account>("accounts");
const usersCollection = database.get<UserOffline>(UsersTableName);

<<<<<<< HEAD
const rc15Collection = database.get<DescongeladoSalmueraModel>(
  DescongeladoSalmueraName
);
const rc103Collection = database.get<PeladoFrescoModel>(PeladoFrescoName);
const rc108Collection = database.get<ProdTerminadoModel>(ProdTerminadoName);
const rc07Collection =
  database.get<ProcesoEnteroFrescoModel>(ProcesoEnteroName);

export {
  database as db,
  usersCollection,
  rc15Collection,
  rc103Collection,
  rc108Collection,
  rc07Collection,
};
=======
export const rc15Collection = database.get<DescongeladoSalmueraModel>(DescongeladoSalmueraName);
export const rc103Collection = database.get<PeladoFrescoModel>(PeladoFrescoName);
export const rc108Collection = database.get<ProdTerminadoModel>(ProdTerminadoName);
export const rc07Collection = database.get<ProcesoEnteroFrescoModel>(ProcesoEnteroName);
>>>>>>> f9bdba683d843951e8cca69e482c416dc2b5f0af
