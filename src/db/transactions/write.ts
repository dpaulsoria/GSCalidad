import { rc15Collection, rc07Collection, rc103Collection, rc108Collection } from ".."

function printMigrableInfo<T extends Migrable>(item: T) {
    console.log(`Fecha de Creación: ${item.FechaCrea}`);
    console.log(`Usuario Creador: ${item.UsuCrea}`);
    console.log(`Estado: ${item.state}`);
  }
  