import { db, rc08Collection } from "@/db";
import { ClasificacionCamaronEnteroModel } from "@/model/registros/ProcesoEntero/RC_CC_08";

export const SaveClasificacionCamaronEntero = async (
  it: ClasificacionCamaronEnteroModel,
  plantaId: number,
  username: string | void = "none"
) => {
  await db.write(async () => {
    await rc08Collection.create((record: ClasificacionCamaronEnteroModel) => {
      record.lote = it.lote;
      record.co_proveedor_gr = it.co_proveedor_gr;
      record.tipo = it.tipo; // Materia Prima = 1
      record.piscina = it.piscina;
      record.tallas = it.tallas;
      record.gramos_promedio = it.gramos_promedio;
      record.clasificacion_promedio = it.clasificacion_promedio;
            // record.UsuCrea = it.UsuCrea;
      record.UsuCrea = typeof username === "string" ? username : "none"
      record.UsuModi = it.UsuModi;
      record.state = it.state;
      record.planta_id = plantaId; // Se asigna el planta_id proporcionado como parámetro
      record.remote_id = it.remote_id;
      // Los campos createdAt y updatedAt no se establecen manualmente, ya que @readonly los gestiona automáticamente.
      
    });
  });
};
