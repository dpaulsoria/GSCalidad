import { Migrable } from "@/model/registros/base";

function printMigrableInfo<T extends Migrable>(item: T) {
  console.log(`Fecha de Creación: ${item.FechaCrea}`);
  console.log(`Usuario Creador: ${item.UsuCrea}`);
  console.log(`Estado: ${item.state}`);
}

